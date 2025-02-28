// src/eap.ts
import { Buffer } from 'buffer';
import { createHash, randomBytes, randomInt } from 'crypto';
import { pki, tls as forgeTls } from 'node-forge';
import { RadiusPacket } from './packet';
import { rfc2865 } from './attribute/rfc2865';
import fs from 'fs';
import { logger } from '../src/logger';

// EAPコード
export const EapCodes = {
  Request: 1,
  Response: 2,
  Success: 3,
  Failure: 4,
} as const;

export type EapCode = typeof EapCodes[keyof typeof EapCodes];

// EAPタイプ（RFC 3748およびIANA登録に基づく網羅的定義）
export const EapTypes = {
  Identity: 1, // RFC 3748
  Notification: 2, // RFC 3748
  Nak: 3, // RFC 3748 (Response only)
  MD5Challenge: 4, // RFC 3748
  OneTimePassword: 5, // RFC 3748
  GenericTokenCard: 6, // RFC 3748
  TLS: 13, // RFC 5216
  TTLS: 21, // RFC 5281
  PEAP: 25, // draft-josefsson-pppext-eap-tls-eap
  MSCHAPv2: 26, // RFC 2759
  FAST: 43, // RFC 4851
} as const;

export type EapType = typeof EapTypes[keyof typeof EapTypes];

export class EapHandler {
  private challenges: Map<string, Buffer> = new Map();
  private fragments: Map<string, { totalLength: number; receivedLength: number; data: Buffer[] }> = new Map();
  private serverCert: Buffer;
  private serverKey: Buffer;
  private clientCert: Buffer;
  private clientKey: Buffer;
  // private tlsSessions: Map<string, { clientHello: Buffer | null; serverHelloSent: boolean; serverFragments: Buffer[]; finished: boolean }> = new Map();
  private tlsSessions: Map<string, { clientHello: Buffer | null; serverFragments: Buffer[]; clientFragments: Buffer[]; step: 'start' | 'serverHello' | 'clientResponse' | 'finished' }> = new Map();

  constructor() {
    // mkcertで生成した証明書と鍵を読み込み（MacOS前提）
    this.serverCert = fs.readFileSync('certs/localhost.pem'); // mkcertで生成した証明書
    this.serverKey = fs.readFileSync('certs/localhost-key.pem'); // mkcertで生成した鍵
    this.clientCert = fs.readFileSync('certs/client.pem');
    this.clientKey = fs.readFileSync('certs/client-key.pem');
  }

  getClientCert(): Buffer {
    return this.clientCert;
  }

  getClientKey(): Buffer {
    return this.clientKey;
  }

  createIdentityRequest(identifier: number): Buffer {
    return Buffer.from([EapCodes.Request, identifier, 0, 5, EapTypes.Identity]);
  }

  processIdentityResponse(packet: RadiusPacket, eapMessage: Buffer): Buffer {
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    const challenge = randomBytes(16);
    this.challenges.set(challengeKey, challenge);
    return Buffer.from([EapCodes.Request, packet.identifier, 0, 6, EapTypes.TLS, 0x20]); // EAP-TLS Start
  }

  processTlsHandshake(packet: RadiusPacket, eapMessage: Buffer): Buffer {
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    const flags = eapMessage.readUInt8(5);
    const isLengthIncluded = (flags & 0x80) !== 0;
    const moreFragments = (flags & 0x40) !== 0;
    let dataOffset = isLengthIncluded ? 10 : 6;
    const fragment = eapMessage.slice(dataOffset);

    let fragState = this.fragments.get(challengeKey) || {
      totalLength: isLengthIncluded ? eapMessage.readUInt32BE(6) : fragment.length,
      receivedLength: 0,
      data: []
    };
    fragState.data.push(fragment);
    fragState.receivedLength += fragment.length;
    this.fragments.set(challengeKey, fragState);

    let tlsSession = this.tlsSessions.get(challengeKey) || { clientHello: null, serverFragments: [], clientFragments: [], step: 'start' };

    logger.debug({
      challengeKey,
      flags,
      totalLength: fragState.totalLength,
      receivedLength: fragState.receivedLength,
      moreFragments,
      msg: 'Processing TLS handshake fragment',
    });

    if (!moreFragments && fragState.receivedLength >= fragState.totalLength) {
      const completeData = Buffer.concat(fragState.data).slice(0, fragState.totalLength);
      this.fragments.delete(challengeKey);

      logger.debug({
        challengeKey,
        completeDataLength: completeData.length,
        msg: 'TLS handshake data reassembled',
      });

      if (tlsSession.step === 'start') {
        // ClientHello受信
        tlsSession.clientHello = completeData;
        const serverHello = Buffer.concat([
          Buffer.from([0x16, 0x03, 0x01]), // TLS 1.0 Handshake
          Buffer.from([0x00, 0x2f]), // Length
          Buffer.from([0x02]), // Server Hello
          Buffer.from([0x00, 0x00, 0x2b]), // Message Length
          Buffer.from([0x03, 0x03]), // Version TLS 1.2
          randomBytes(32), // Random
          Buffer.from([0x00]), // Session ID Length
          Buffer.from([0xc0, 0x2f]), // Cipher Suite
          Buffer.from([0x00]) // Compression
        ]);
        const certificate = Buffer.concat([
          Buffer.from([0x16, 0x03, 0x01]), // TLS 1.0 Handshake
          Buffer.from([0x01, 0x00]), // Length (仮)
          Buffer.from([0x0b]), // Certificate
          Buffer.from([0x00, 0x00, this.serverCert.length + 3]),
          Buffer.from([0x00, 0x00, this.serverCert.length]),
          this.serverCert
        ]);
        const certRequest = Buffer.from([0x16, 0x03, 0x01, 0x00, 0x04, 0x0d, 0x00, 0x00, 0x00]);
        const serverHelloDone = Buffer.from([0x16, 0x03, 0x01, 0x00, 0x04, 0x0e, 0x00, 0x00, 0x00]);
        const responseData = Buffer.concat([serverHello, certificate, certRequest, serverHelloDone]);
        const responseFragments = this.fragmentData(responseData, packet.identifier, 247); // 253バイト未満に調整
        tlsSession.serverFragments = responseFragments.slice(1); // 最初のフラグメント以外を保持
        tlsSession.step = 'serverHello';
        this.tlsSessions.set(challengeKey, tlsSession);
        logger.debug({
          challengeKey,
          fragmentCount: responseFragments.length,
          msg: 'Sending first Server Hello fragment',
        });
        return responseFragments[0];
      } else if (tlsSession.step === 'serverHello') {
        // Client Response (Certificate, ClientKeyExchange, Finished)
        const clientKeyExchange = Buffer.from([0x16, 0x03, 0x01, 0x00, 0x10, 0x10, 0x00, 0x00, 0x0c, ...Buffer.from('ClientKey')]);
        const finished = Buffer.from([0x16, 0x03, 0x01, 0x00, 0x14, 0x14, 0x00, 0x00, 0x10, ...randomBytes(16)]);
        const responseData = Buffer.concat([this.clientCert, clientKeyExchange, finished]);
        const responseFragments = this.fragmentData(responseData, packet.identifier, 247);
        tlsSession.clientFragments = responseFragments.slice(1);
        tlsSession.step = 'clientResponse';
        this.tlsSessions.set(challengeKey, tlsSession);
        logger.debug({
          challengeKey,
          fragmentCount: responseFragments.length,
          msg: 'Sending first Client Response fragment',
        });
        return responseFragments[0];
      } else if (tlsSession.step === 'clientResponse') {
        const finalResponse = Buffer.from([EapCodes.Success, packet.identifier, 0, 4]);
        this.tlsSessions.delete(challengeKey);
        logger.debug({
          challengeKey,
          msg: 'Sending EAP Success',
        });
        return finalResponse;
      }
    } else if (tlsSession.step === 'serverHello' && tlsSession.serverFragments.length > 0) {
      const nextFragment = tlsSession.serverFragments.shift();
      this.tlsSessions.set(challengeKey, tlsSession);
      logger.debug({
        challengeKey,
        remainingFragments: tlsSession.serverFragments.length,
        msg: 'Sending next Server Hello fragment',
      });
      return nextFragment!;
    } else if (tlsSession.step === 'clientResponse' && tlsSession.clientFragments.length > 0) {
      const nextFragment = tlsSession.clientFragments.shift();
      this.tlsSessions.set(challengeKey, tlsSession);
      logger.debug({
        challengeKey,
        remainingFragments: tlsSession.clientFragments.length,
        msg: 'Sending next Client Response fragment',
      });
      return nextFragment!;
    }

    logger.debug({
      challengeKey,
      msg: 'Sending ACK for more fragments',
    });
    return Buffer.from([EapCodes.Request, packet.identifier, 0, 6, EapTypes.TLS, moreFragments ? 0x40 : 0]);
  }

  processMD5Challenge(packet: RadiusPacket): Buffer {
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    const challenge = randomBytes(16);
    this.challenges.set(challengeKey, challenge);
    return Buffer.concat([
      Buffer.from([EapCodes.Request, packet.identifier, 0, 22, EapTypes.MD5Challenge]),
      Buffer.from([16]),
      challenge,
    ]);
  }

  verifyMD5Response(packet: RadiusPacket, eapMessage: Buffer, password: string): Buffer {
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    const storedChallenge = this.challenges.get(challengeKey);
    if (!storedChallenge) throw new Error('No stored challenge');

    const valueSize = eapMessage.readUInt8(5);
    const value = eapMessage.slice(6, 6 + valueSize);
    const expectedHash = createHash('md5')
      .update(storedChallenge)
      .update(Buffer.from(password))
      .update(Buffer.from([packet.identifier]))
      .digest();

    const isValid = value.equals(expectedHash);
    const response = Buffer.from([
      isValid ? EapCodes.Success : EapCodes.Failure,
      packet.identifier,
      0, 4
    ]);
    this.challenges.delete(challengeKey);
    return response;
  }

  fragmentData(data: Buffer, identifier: number, maxSize: number): Buffer[] {
    const fragments: Buffer[] = [];
    let offset = 0;
    const totalLength = data.length;

    while (offset < totalLength) {
      const chunkSize = Math.min(maxSize - 10, totalLength - offset);
      const isFirst = offset === 0;
      const moreFragments = offset + chunkSize < totalLength;
      const flags = (isFirst ? 0x80 : 0) | (moreFragments ? 0x40 : 0);
      const header = Buffer.alloc(isFirst ? 10 : 6);
      header.writeUInt8(EapCodes.Request, 0);
      header.writeUInt8(identifier, 1);
      header.writeUInt16BE((isFirst ? 10 : 6) + chunkSize, 2);
      header.writeUInt8(EapTypes.TLS, 4);
      header.writeUInt8(flags, 5);
      if (isFirst) header.writeUInt32BE(totalLength, 6);

      fragments.push(Buffer.concat([header, data.slice(offset, offset + chunkSize)]));
      offset += chunkSize;
    }
    return fragments;
  }

// 修正: 2025-02-28 - reassembleFragments関数全体を修正
reassembleFragments(packet: RadiusPacket, eapMessage: Buffer): Buffer {
  const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
  // バッファ長が5未満の場合（フラグ参照不可）は即時返却
  if (eapMessage.length < 5) {
    logger.debug({
      challengeKey,
      eapMessageLength: eapMessage.length,
      msg: 'Received short EAP message, assuming final response',
    });
    return eapMessage; // EAP-Successなど短いメッセージをそのまま返す
  }

  const flags = eapMessage.readUInt8(5);
  const isLengthIncluded = (flags & 0x80) !== 0;
  const moreFragments = (flags & 0x40) !== 0;
  const dataOffset = isLengthIncluded ? 10 : 6;
  const fragment = eapMessage.slice(dataOffset);

  let fragState = this.fragments.get(challengeKey) || {
    totalLength: isLengthIncluded ? eapMessage.readUInt32BE(6) : fragment.length,
    receivedLength: 0,
    data: []
  };
  fragState.data.push(fragment);
  fragState.receivedLength += fragment.length;
  this.fragments.set(challengeKey, fragState);

  logger.debug({
    challengeKey,
    totalLength: fragState.totalLength,
    receivedLength: fragState.receivedLength,
    moreFragments,
    msg: 'Reassembling fragments',
  });

  if (!moreFragments && fragState.receivedLength >= fragState.totalLength) {
    const completeData = Buffer.concat(fragState.data).slice(0, fragState.totalLength);
    this.fragments.delete(challengeKey);
    logger.debug({
      challengeKey,
      completeDataLength: completeData.length,
      msg: 'Fragments fully reassembled',
    });
    return completeData;
  }
  return Buffer.alloc(0);
}

  // completeTlsHandshake(packet: RadiusPacket): Buffer {
  //   const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
  //   this.tlsSessions.delete(challengeKey);
  //   return Buffer.from([EapCodes.Success, packet.identifier, 0, 4]);
  // }

  // 修正: 2025-02-28 - completeTlsHandshakeを修正、Access-Acceptを返す
  completeTlsHandshake(packet: RadiusPacket): Buffer {
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    this.tlsSessions.delete(challengeKey);
    return Buffer.from([EapCodes.Success, packet.identifier, 0, 4]);
  }
}