// // src/eap.ts
// import { Buffer } from 'buffer';
// import { createHash, randomBytes } from 'crypto';
// import { RadiusPacket } from './radius-packet';
// import { rfc2865 } from './attribute/rfc2865';
// import fs from 'fs';
// import { EapCodes, EapTypes } from './codes';
// import { logger } from '../src/logger';

import { RadiusPacket } from './radius-packet';
import { EapPacket } from './eap-packet';
import { rfc2865 } from './attribute/rfc2865';
import { logger } from '../src/logger';
import { EapCodes, EapTypes, TlsConstants, FLAG_TLS_START, FLAG_MORE_FRAGMENTS } from './codes';
import { randomBytes, createHash } from 'crypto';

/*
 * EAP-TLS Authentication Sequence (RFC 2865, RFC 3748, RFC 5216):
 * このシーケンス図は、RADIUSプロトコルを使用したEAP-TLS認証の標準的なフローを示します。
 * 各ステップに番号（①～⑩）を割り当て、処理箇所をコード内でコメントとして明示します。
 * 分岐（成功、失敗、再送、フラグメント処理）も含めて記述します。
 *
 * Client (NAS)                             RADIUS Server
 *   |                                          |
 *   | ① Access-Request                         |
 *   |    - EAP-Response/Identity               |
 *   |------------------------------------------>|
 *   |                                          |
 *   | ② Access-Challenge                       |
 *   |    - EAP-Request/Identity                |
 *   |<------------------------------------------|
 *   |                                          |
 *   | ③ Access-Request                         |
 *   |    - EAP-Response/Identity (User ID)     |
 *   |------------------------------------------>|
 *   |                                          |
 *   | ④ Access-Challenge                       |
 *   |    - EAP-Request/TLS Start              |
 *   |<------------------------------------------|
 *   |                                          |
 *   | ⑤ Access-Request                         |
 *   |    - EAP-Response/TLS Client Hello       |
 *   |------------------------------------------>|
 *   |                                          |
 *   | ⑥ Access-Challenge                       |
 *   |    - EAP-Request/TLS Server Hello, Cert  |
 *   |<------------------------------------------|
 *   |                                          |
 *   | ⑦ Access-Request                         |
 *   |    - EAP-Response/TLS Client Response    |
 *   |------------------------------------------>|
 *   |                                          |
 *   | ⑧ Access-Challenge (Optional)            |
 *   |    - EAP-Request/TLS Fragmented Data     |
 *   |<------------------------------------------|
 *   | ⑨ Access-Request (Optional)              |
 *   |    - EAP-Response/TLS Fragmented Data    |
 *   |------------------------------------------>|
 *   |                                          |
 *   | ⑩ Access-Accept                          |
 *   |    - EAP-Success                         |
 *   |<------------------------------------------|
 *
 * 分岐:
 * - 認証失敗時: RADIUSサーバーはAccess-Reject (EAP-Failure) を送信。
 *   - 例: EAP-TLSハンドシェイク中にクライアント証明書が無効な場合（⑪ Access-Reject）。
 * - ネットワーク遅延やパケットロス時: Duplicate Request/Responseが発生。
 *   - 例: Access-Requestがタイムアウトし再送される（⑫ Duplicate Access-Request）。
 * - フラグメント処理時: 大きなTLSデータが分割され、⑧～⑨で複数回やり取り（M=1）。
 * - クライアントが不正なデータを送信した場合: Access-Rejectを送信。
 *   - 例: EAP-TLSのフラグが不正な場合（⑪ Access-Reject）。
 */

/**
 * EAPメッセージ構造（RFC 3748）
 * ```
 *  0                   1                   2                   3
 *  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * |     Code      |  Identifier   |            Length             |
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * |     Type      |  Type-Data ...
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * - Code (1 byte): EAPメッセージの種類 (1=Request, 2=Response, etc.)
 * - Identifier (1 byte): リクエストとレスポンスを紐付ける識別子
 * - Length (2 bytes): 全体の長さ
 * - Type (1 byte): EAPメソッドの種類（例: 1=Identity, 13=TLS）
 * - Type-Data: 可変長のデータ（Typeに応じて）
 * ```
 */

export class EapHandler {
  private challenges: Map<string, Buffer> = new Map();
  private fragments: Map<string, { totalLength: number; receivedLength: number; data: Buffer[] }> = new Map();
  // private tlsSessions: Map<string, { step: 'start' | 'serverHello' | 'clientResponse' | 'finished' }> = new Map();
  // private tlsSessions: Map<string, { step: 'start' | 'serverHello' | 'clientResponse' | 'finished'; serverFragments?: Buffer[]; clientFragments?: Buffer[] }> = new Map();
  // EapHandler クラス内
  private tlsSessions: Map<string, {
    step: 'start' | 'serverHello' | 'clientResponse' | 'finished'; // EAP-TLS ハンドシェイクの現在のステップ
    serverFragments?: Buffer[]; // サーバー側で送信中の TLS フラグメント
    clientFragments?: Buffer[]; // クライアントから受信した TLS フラグメント
    initialized?: boolean; // EAP-TLS の開始フラグが送信されたかどうか
    tlsHandshakeData?: Buffer; // TLS ハンドシェイクデータの蓄積用
    tlsHandshakeComplete?: boolean; // TLS ハンドシェイクが完了したかどうか
  }> = new Map();
  private eapIdCounter: number = 0;

  constructor() {
    // mkcertで生成した証明書と鍵を読み込み（MacOS前提）
    // this.serverCert = fs.readFileSync('certs/localhost.pem'); // mkcertで生成した証明書
    // this.serverKey = fs.readFileSync('certs/localhost-key.pem'); // mkcertで生成した鍵
    // this.clientCert = fs.readFileSync('certs/client.pem');
    // this.clientKey = fs.readFileSync('certs/client-key.pem');
  }

  extractDesiredEapTypes(eapMessage: Buffer): number[] {
    if (eapMessage.length < 6 || eapMessage.readUInt8(4) !== 3 /* EapTypes.Nak */) {
        return [];
    }
    const desiredTypes: number[] = [];
    // データセクションから Desired Auth Type を順次読み取る
    for (let i = 5; i < eapMessage.length; i++) {
        desiredTypes.push(eapMessage.readUInt8(i));
    }
    return desiredTypes;
  }

  startEapTls(packet: RadiusPacket): EapPacket {
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    const FLAG_TLS_START = 0x20; // TLS Start フラグ

    // EAP-Request/TLS Start パケットを生成
    const eapPacket = new EapPacket(
        1, // EapCodes.Request
        this.eapIdCounter++,
        13, // EapTypes.TLS
        Buffer.alloc(0), // データなし
        FLAG_TLS_START
    );

    // TLS セッションを初期化
    this.tlsSessions.set(challengeKey, {
        step: 'serverHello',
        serverFragments: [],
        clientFragments: [],
        initialized: true,
        tlsHandshakeData: Buffer.alloc(0),
        tlsHandshakeComplete: false
    });

    console.log(`Starting EAP-TLS session with Start flag (id=${eapPacket.identifier})`);
    return eapPacket;
  }

  // ① Access-Requestを受けて ② Access-Challengeを生成（EAP-Request/Identity）
  createIdentityRequest(packet: RadiusPacket): EapPacket {
    const identifier = packet.identifier;
    const eapPacket = new EapPacket(EapCodes.Request, identifier, EapTypes.Identity);
    logger.info(`② Access-Challenge generated with EAP-Request/Identity (id=${identifier})`);
    return eapPacket;
  }

  // ③ Access-Requestを受けて ④ Access-Challengeを生成（EAP-Request/TLS Start）
  processIdentityResponse(packet: RadiusPacket, eapMessage: Buffer): EapPacket {
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    const challenge = randomBytes(16);
    this.challenges.set(challengeKey, challenge);
    const eapPacket = new EapPacket(EapCodes.Request, packet.identifier, EapTypes.TLS, Buffer.alloc(0), FLAG_TLS_START);
    logger.info(`④ Access-Challenge generated with EAP-Request/TLS Start (id=${packet.identifier})`);
    return eapPacket;
  }

  isEapTypeSupported(eapType: number): boolean {
    // この例では EAP-TLS のみをサポートすると仮定
    return eapType === EapTypes.TLS;
  }

  getTlsSession(packet: RadiusPacket): { 
    step: string; 
    serverFragments?: Buffer[]; 
    clientFragments?: Buffer[]; 
    initialized?: boolean 
  } {
      // RADIUS パケットの識別子とユーザー名をキーとして使用
      const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
      let tlsSession = this.tlsSessions.get(challengeKey);
      if (!tlsSession) {
          // セッションが存在しない場合は初期化
          tlsSession = { step: 'start', initialized: false };
          this.tlsSessions.set(challengeKey, tlsSession);
      }
      return tlsSession;
  }

  // processTlsHandshake(packet: RadiusPacket, eapMessage: Buffer): Buffer {
  //   const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
  //   const flags = eapMessage.readUInt8(5);
  //   const isLengthIncluded = (flags & 0x80) !== 0;
  //   const moreFragments = (flags & 0x40) !== 0;
  //   let dataOffset = isLengthIncluded ? 10 : 6;
  //   const fragment = eapMessage.slice(dataOffset);

  //   let fragState = this.fragments.get(challengeKey) || {
  //     totalLength: isLengthIncluded ? eapMessage.readUInt32BE(6) : fragment.length,
  //     receivedLength: 0,
  //     data: []
  //   };
  //   fragState.data.push(fragment);
  //   fragState.receivedLength += fragment.length;
  //   this.fragments.set(challengeKey, fragState);

  //   let tlsSession = this.tlsSessions.get(challengeKey) || { clientHello: null, serverFragments: [], clientFragments: [], step: 'start' };

  //   logger.debug({
  //     challengeKey,
  //     flags,
  //     totalLength: fragState.totalLength,
  //     receivedLength: fragState.receivedLength,
  //     moreFragments,
  //     msg: 'Processing TLS handshake fragment',
  //   });

  //   if (!moreFragments && fragState.receivedLength >= fragState.totalLength) {
  //     const completeData = Buffer.concat(fragState.data).slice(0, fragState.totalLength);
  //     this.fragments.delete(challengeKey);

  //     logger.debug({
  //       challengeKey,
  //       completeDataLength: completeData.length,
  //       msg: 'TLS handshake data reassembled',
  //     });

  //     if (tlsSession.step === 'start') {
  //       // ClientHello受信
  //       tlsSession.clientHello = completeData;
  //       const serverHello = Buffer.concat([
  //         Buffer.from([0x16, 0x03, 0x01]), // TLS 1.0 Handshake
  //         Buffer.from([0x00, 0x2f]), // Length
  //         Buffer.from([0x02]), // Server Hello
  //         Buffer.from([0x00, 0x00, 0x2b]), // Message Length
  //         Buffer.from([0x03, 0x03]), // Version TLS 1.2
  //         randomBytes(32), // Random
  //         Buffer.from([0x00]), // Session ID Length
  //         Buffer.from([0xc0, 0x2f]), // Cipher Suite
  //         Buffer.from([0x00]) // Compression
  //       ]);
  //       const certificate = Buffer.concat([
  //         Buffer.from([0x16, 0x03, 0x01]), // TLS 1.0 Handshake
  //         Buffer.from([0x01, 0x00]), // Length (仮)
  //         Buffer.from([0x0b]), // Certificate
  //         Buffer.from([0x00, 0x00, this.serverCert.length + 3]),
  //         Buffer.from([0x00, 0x00, this.serverCert.length]),
  //         this.serverCert
  //       ]);
  //       const certRequest = Buffer.from([0x16, 0x03, 0x01, 0x00, 0x04, 0x0d, 0x00, 0x00, 0x00]);
  //       const serverHelloDone = Buffer.from([0x16, 0x03, 0x01, 0x00, 0x04, 0x0e, 0x00, 0x00, 0x00]);
  //       const responseData = Buffer.concat([serverHello, certificate, certRequest, serverHelloDone]);
  //       const responseFragments = this.fragmentData(responseData, packet.identifier, 247); // 253バイト未満に調整
  //       tlsSession.serverFragments = responseFragments.slice(1); // 最初のフラグメント以外を保持
  //       tlsSession.step = 'serverHello';
  //       this.tlsSessions.set(challengeKey, tlsSession);
  //       logger.debug({
  //         challengeKey,
  //         fragmentCount: responseFragments.length,
  //         msg: 'Sending first Server Hello fragment',
  //       });
  //       return responseFragments[0];
  //     } else if (tlsSession.step === 'serverHello') {
  //       // Client Response (Certificate, ClientKeyExchange, Finished)
  //       const clientKeyExchange = Buffer.from([0x16, 0x03, 0x01, 0x00, 0x10, 0x10, 0x00, 0x00, 0x0c, ...Buffer.from('ClientKey')]);
  //       const finished = Buffer.from([0x16, 0x03, 0x01, 0x00, 0x14, 0x14, 0x00, 0x00, 0x10, ...randomBytes(16)]);
  //       const responseData = Buffer.concat([this.clientCert, clientKeyExchange, finished]);
  //       const responseFragments = this.fragmentData(responseData, packet.identifier, 247);
  //       tlsSession.clientFragments = responseFragments.slice(1);
  //       tlsSession.step = 'clientResponse';
  //       this.tlsSessions.set(challengeKey, tlsSession);
  //       logger.debug({
  //         challengeKey,
  //         fragmentCount: responseFragments.length,
  //         msg: 'Sending first Client Response fragment',
  //       });
  //       return responseFragments[0];
  //     } else if (tlsSession.step === 'clientResponse') {
  //       const finalResponse = Buffer.from([EapCodes.Success, packet.identifier, 0, 4]);
  //       this.tlsSessions.delete(challengeKey);
  //       logger.debug({
  //         challengeKey,
  //         msg: 'Sending EAP Success',
  //       });
  //       return finalResponse;
  //     }
  //   } else if (tlsSession.step === 'serverHello' && tlsSession.serverFragments.length > 0) {
  //     const nextFragment = tlsSession.serverFragments.shift();
  //     this.tlsSessions.set(challengeKey, tlsSession);
  //     logger.debug({
  //       challengeKey,
  //       remainingFragments: tlsSession.serverFragments.length,
  //       msg: 'Sending next Server Hello fragment',
  //     });
  //     return nextFragment!;
  //   } else if (tlsSession.step === 'clientResponse' && tlsSession.clientFragments.length > 0) {
  //     const nextFragment = tlsSession.clientFragments.shift();
  //     this.tlsSessions.set(challengeKey, tlsSession);
  //     logger.debug({
  //       challengeKey,
  //       remainingFragments: tlsSession.clientFragments.length,
  //       msg: 'Sending next Client Response fragment',
  //     });
  //     return nextFragment!;
  //   }

  //   logger.debug({
  //     challengeKey,
  //     msg: 'Sending ACK for more fragments',
  //   });
  //   return Buffer.from([EapCodes.Request, packet.identifier, 0, 6, EapTypes.TLS, moreFragments ? 0x40 : 0]);
  // }
  //

  // ⑤ Access-Requestを受けて ⑥ Access-Challengeを生成（EAP-Request/TLS Server Hello, Cert）
  // ⑦ Access-Requestを受けて ⑧ Access-Challengeを生成（EAP-Request/TLS Fragmented Data, オプション）
  processTlsClientHello(packet: RadiusPacket, eapMessage: Buffer): EapPacket {
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    let tlsSession = this.tlsSessions.get(challengeKey) || { step: 'start' };
    tlsSession.step = 'serverHello';
    this.tlsSessions.set(challengeKey, tlsSession);

    const serverHello = Buffer.concat([
      TlsConstants.TLS_HANDSHAKE,
      TlsConstants.TLS_VERSION_1_0,
      Buffer.from([0x00, 0x2f]), // Length (47 bytes)
      TlsConstants.TLS_SERVER_HELLO,
      Buffer.from([0x00, 0x00, 0x2b]), // Message Length (43 bytes)
      TlsConstants.TLS_VERSION_1_2,
      randomBytes(32), // Random
      TlsConstants.TLS_SESSION_ID_ZERO,
      TlsConstants.TLS_CIPHER_SUITE,
      TlsConstants.TLS_COMPRESSION,
    ]);
    const certificate = Buffer.concat([
      TlsConstants.TLS_HANDSHAKE,
      TlsConstants.TLS_VERSION_1_0,
      Buffer.from([0x01, 0x00]), // Length (仮)
      TlsConstants.TLS_CERTIFICATE,
      Buffer.from([0x00, 0x00, 0 + 3]), // 証明書長 + 3
      Buffer.from([0x00, 0x00, 0]), // 証明書長（仮）
      Buffer.alloc(0), // 証明書データ（実際はCertificateManagerから取得）
    ]);
    const certRequest = Buffer.concat([
      TlsConstants.TLS_HANDSHAKE,
      TlsConstants.TLS_VERSION_1_0,
      Buffer.from([0x00, 0x04]), // Length
      TlsConstants.TLS_CERT_REQUEST,
      Buffer.from([0x00, 0x00, 0x00]), // 空のデータ
    ]);
    const serverHelloDone = Buffer.concat([
      TlsConstants.TLS_HANDSHAKE,
      TlsConstants.TLS_VERSION_1_0,
      Buffer.from([0x00, 0x04]), // Length
      TlsConstants.TLS_SERVER_HELLO_DONE,
      Buffer.from([0x00, 0x00, 0x00]), // 空のデータ
    ]);
    const responseData = Buffer.concat([serverHello, certificate, certRequest, serverHelloDone]);

    const eapPackets = new EapPacket(EapCodes.Request, packet.identifier, EapTypes.TLS).fragment(responseData, packet.identifier);
    const firstPacket = eapPackets[0];
    if (eapPackets.length > 1) {
      const tlsSession = this.tlsSessions.get(challengeKey) || { step: 'start' };
      tlsSession.serverFragments = eapPackets.slice(1).map(p => p.encode());
      tlsSession.step = 'serverHello';
      this.tlsSessions.set(challengeKey, tlsSession);
      logger.debug({
        challengeKey,
        fragmentCount: eapPackets.length,
        msg: 'Sending first Server Hello fragment',
      });
    } else {
      logger.debug({
        challengeKey,
        msg: 'Sending Server Hello as single fragment',
      });
    }
    logger.info(`⑥ Access-Challenge generated with EAP-Request/TLS Server Hello, Cert (id=${packet.identifier})`);
    return firstPacket;
  }


  // ⑥ Access-Challengeを受けて⑦ Access-Requestを生成（EAP-Response/TLS Client Response）
  // ⑧ Access-Challengeを受けて⑨ Access-Requestを生成（EAP-Response/TLS Fragmented Data, オプション）
  processTlsServerHello(packet: RadiusPacket, eapMessage: Buffer): EapPacket {
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    const completeData = EapPacket.reassemble(packet, [eapMessage]);
    let tlsSession = this.tlsSessions.get(challengeKey) || { step: 'start' };
    tlsSession.step = 'clientResponse';
    this.tlsSessions.set(challengeKey, tlsSession);

    const clientKeyExchange = Buffer.concat([
      TlsConstants.TLS_HANDSHAKE,
      TlsConstants.TLS_VERSION_1_0,
      Buffer.from([0x00, 0x10]), // Length
      TlsConstants.TLS_CLIENT_KEY_EXCHANGE,
      Buffer.from([0x00, 0x00, 0x0c]), // Message Length
      Buffer.from('ClientKey'), // 仮のクライアントキー
    ]);
    const finished = Buffer.concat([
      TlsConstants.TLS_HANDSHAKE,
      TlsConstants.TLS_VERSION_1_0,
      Buffer.from([0x00, 0x14]), // Length
      TlsConstants.TLS_FINISHED,
      Buffer.from([0x00, 0x00, 0x10]), // Message Length
      randomBytes(16), // 仮のFinishedデータ
    ]);
    const responseData = Buffer.concat([Buffer.alloc(0), clientKeyExchange, finished]); // 証明書は省略（仮）

    const eapPackets = new EapPacket(EapCodes.Response, packet.identifier, EapTypes.TLS).fragment(responseData, packet.identifier);
    const firstPacket = eapPackets[0];
    if (eapPackets.length > 1) {
      const tlsSession = this.tlsSessions.get(challengeKey) || { step: 'start' };
      tlsSession.clientFragments = eapPackets.slice(1).map(p => p.encode());
      tlsSession.step = 'clientResponse';
      this.tlsSessions.set(challengeKey, tlsSession);
      logger.debug({
        challengeKey,
        fragmentCount: eapPackets.length,
        msg: 'Sending first Client Response fragment',
      });
    } else {
      logger.debug({
        challengeKey,
        msg: 'Sending Client Response as single fragment',
      });
    }
    logger.info(`⑦ Access-Request generated with EAP-Response/TLS Client Response (id=${packet.identifier})`);
    return firstPacket;
  }

  // ⑩ ⑦～⑨ Access-Requestを受けて⑩ Access-Acceptを生成（EAP-Success）
  completeTlsHandshake(packet: RadiusPacket): EapPacket {
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    this.tlsSessions.delete(challengeKey);
    logger.debug({
      challengeKey,
      msg: 'Sending EAP Success',
    });
    const eapPacket = new EapPacket(EapCodes.Success, packet.identifier, EapTypes.TLS);
    logger.info(`⑩ Access-Accept generated with EAP-Success (id=${packet.identifier})`);
    return eapPacket;
  }

  // ⑪ Access-Reject: EAP-Failureを生成（分岐: 認証失敗）
  createFailureResponse(packet: RadiusPacket): EapPacket {
    logger.error(`Authentication failed (id=${packet.identifier})`);
    const eapPacket = new EapPacket(EapCodes.Failure, packet.identifier, EapTypes.TLS);
    logger.info(`⑪ Access-Reject generated with EAP-Failure (id=${packet.identifier})`);
    return eapPacket;
  }

  // �� Duplicate Access-Request: 再送を検出（分岐: ネットワーク遅延）
  handleDuplicateRequest(packet: RadiusPacket): EapPacket | null {
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    if (this.challenges.has(challengeKey)) {
      logger.warn(`Duplicate request detected (id=${packet.identifier})`);
      return this.createFailureResponse(packet); // ⑬ Access-Rejectを返す
    }
    return null; // 通常処理へ
  }

  // ⑧ Access-Challenge or ⑨ Access-Request: フラグメント処理
  handleFragmentedResponse(packet: RadiusPacket, eapMessage: Buffer): EapPacket {
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    const completeData = EapPacket.reassemble(packet, [eapMessage]);
    if (completeData.data.length === 0) {
      logger.debug({
        challengeKey,
        msg: 'Awaiting more fragments',
      });
      const ackPacket = new EapPacket(EapCodes.Request, packet.identifier, EapTypes.TLS, Buffer.alloc(0), FLAG_MORE_FRAGMENTS);
      logger.info(`⑧ Access-Challenge generated with EAP-Request/TLS Fragmented ACK (id=${packet.identifier})`);
      return ackPacket;
    }
    logger.info(`⑨ Access-Request generated with EAP-Response/TLS Fragmented Data (id=${packet.identifier})`);
    return completeData;
  }

  isTlsHandshakeComplete(packet: RadiusPacket): boolean {
    // TLS ハンドシェイクが完了したかどうかを判断するロジック
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    const tlsSession = this.tlsSessions.get(challengeKey);
    return tlsSession?.step === 'finished'; // ハンドシェイク完了を判定
  }

  // processMD5Challenge(packet: RadiusPacket): Buffer {
  //   const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
  //   const challenge = randomBytes(16);
  //   this.challenges.set(challengeKey, challenge);
  //   return Buffer.concat([
  //     Buffer.from([EapCodes.Request, packet.identifier, 0, 22, EapTypes.MD5Challenge]),
  //     Buffer.from([16]),
  //     challenge,
  //   ]);
  // }

  // MD5 Challengeを生成（EapPacketを返す）
  processMD5Challenge(packet: RadiusPacket): EapPacket {
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    const challenge = randomBytes(16);
    this.challenges.set(challengeKey, challenge);
    const eapPacket = new EapPacket(
      EapCodes.Request,
      this.eapIdCounter++,
      EapTypes.MD5Challenge,
      Buffer.concat([Buffer.from([16]), challenge]) // Value-Size (1 byte) + Challenge
    );
    logger.info(`MD5-Challenge generated as EapPacket (id=${eapPacket.identifier})`);
    return eapPacket;
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
}