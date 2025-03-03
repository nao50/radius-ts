// src/eap-packet.ts

import { Buffer } from 'buffer';
import { EapCode, EapCodeType, EapCodes, EapType, EapTypeType, EapTypes, FLAG_LENGTH_INCLUDED, FLAG_MORE_FRAGMENTS, FLAG_TLS_START, EAP_HEADER_LENGTH, EAP_TYPE_LENGTH, EAP_FLAGS_LENGTH, MAX_EAP_MESSAGE_SIZE } from './codes';
import { RadiusPacket } from './radius-packet';
import { rfc2865 } from './attribute/rfc2865';
import { logger } from '../src/logger';

/**
 * EAPパケット構造（RFC 3748）
 * ```
 *  0                   1                   2                   3
 *  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * |     Code      |  Identifier   |            Length             |
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * |     Type      |  Type-Data ...
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * - Code (1 byte): EAPメッセージの種類 (1=Request, 2=Response, 3=Success, 4=Failure)
 * - Identifier (1 byte): リクエストとレスポンスを紐付ける識別子
 * - Length (2 bytes): 全体の長さ
 * - Type (1 byte): EAPメソッドの種類（例: 1=Identity, 13=TLS）
 * - Type-Data: 可変長のデータ（Typeに応じて）
 * ```
 */

/**
 * EAP-TLSフラグメント構造（RFC 5216）
 * ```
 *  0                   1                   2                   3
 *  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * |     Code      |  Identifier   |            Length             |
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * |     Type      |     Flags     |  TLS Data (Fragment) ...
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * - Flags: 0x80 (L: Length included) + 0x40 (M: More fragments)
 * - TLS Data: フラグメント化されたTLSデータ（最大253バイト/RADIUS属性）
 * ```
 */

export class EapPacket {
  code: EapCodeType;
  identifier: number;
  length: number;
  type: EapTypeType;
  flags: number;
  data: Buffer;

  constructor(code: EapCodeType, identifier: number, type: EapTypeType, data: Buffer = Buffer.alloc(0), flags: number = 0) {
    this.code = code;
    this.identifier = identifier;
    this.type = type;
    this.data = data;
    this.flags = flags;
    this.length = EAP_HEADER_LENGTH + EAP_TYPE_LENGTH + (flags & FLAG_LENGTH_INCLUDED ? 4 : 0) + data.length + (type === EapTypes.TLS ? EAP_FLAGS_LENGTH : 0);
  }

  // EAPパケットのエンコード
  encode(): Buffer {
    const totalLength = this.length;
    const buffer = Buffer.alloc(totalLength);
    buffer.writeUInt8(this.code, 0);
    buffer.writeUInt8(this.identifier, 1);
    buffer.writeUInt16BE(totalLength, 2);
    buffer.writeUInt8(this.type, 4);
    if (this.type === EapTypes.TLS) {
      buffer.writeUInt8(this.flags, 5);
      if (this.flags & FLAG_LENGTH_INCLUDED) {
        buffer.writeUInt32BE(this.data.length, 6);
        this.data.copy(buffer, 10);
      } else {
        this.data.copy(buffer, 6);
      }
    } else {
      this.data.copy(buffer, 5);
    }
    return buffer;
  }

  // EAPパケットのデコード
  static decode(buffer: Buffer): EapPacket {
    if (buffer.length < EAP_HEADER_LENGTH + EAP_TYPE_LENGTH) throw new Error('Invalid EAP packet length');
    const code = buffer.readUInt8(0) as EapCodeType;
    const identifier = buffer.readUInt8(1);
    const length = buffer.readUInt16BE(2);
    const type = buffer.readUInt8(4) as EapTypeType;
    let flags = 0;
    let data: Buffer;

    if (type === EapTypes.TLS) {
      flags = buffer.readUInt8(5);
      const dataOffset = (flags & FLAG_LENGTH_INCLUDED) ? 10 : 6;
      const dataLength = length - dataOffset;
      data = buffer.slice(dataOffset, dataOffset + dataLength);
    } else {
      data = buffer.slice(5, length);
    }

    return new EapPacket(code, identifier, type, data, flags);
  }

  // フラグメントの分割
  fragment(data: Buffer, identifier: number): EapPacket[] {
    const fragments: EapPacket[] = [];
    let offset = 0;
    const totalLength = data.length;

    while (offset < totalLength) {
      const chunkSize = Math.min(MAX_EAP_MESSAGE_SIZE - 10, totalLength - offset); // RADIUS属性値の最大サイズ - ヘッダー
      const isFirst = offset === 0;
      const moreFragments = offset + chunkSize < totalLength;
      const flags = (isFirst ? FLAG_LENGTH_INCLUDED : 0) | (moreFragments ? FLAG_MORE_FRAGMENTS : 0);
      const fragmentData = data.slice(offset, offset + chunkSize);
      fragments.push(new EapPacket(EapCodes.Request, identifier, EapTypes.TLS, fragmentData, flags));
      offset += chunkSize;
    }
    return fragments;
  }

  // フラグメントの再組み立て
  static reassemble(packet: RadiusPacket, fragments: Buffer[]): EapPacket {
    const challengeKey = `${packet.identifier}-${rfc2865.getUserNameString(packet) || 'unknown'}`;
    let fragState = new Map<string, { totalLength: number; receivedLength: number; data: Buffer[] }>().get(challengeKey) || { totalLength: 0, receivedLength: 0, data: [] as Buffer[] };
    fragments.forEach(fragment => {
      const eapPacket = EapPacket.decode(fragment);
      fragState.data.push(eapPacket.data);
      if (eapPacket.flags & FLAG_LENGTH_INCLUDED) {
        fragState.totalLength = eapPacket.data.readUInt32BE(0) || fragment.length - 6;
      }
      fragState.receivedLength += eapPacket.data.length;
    });

    if (!(fragments[fragments.length - 1].readUInt8(5) & FLAG_MORE_FRAGMENTS) && fragState.receivedLength >= fragState.totalLength) {
      const completeData = Buffer.concat(fragState.data).slice(0, fragState.totalLength);
      logger.debug({
        challengeKey,
        totalLength: fragState.totalLength,
        receivedLength: fragState.receivedLength,
        msg: 'Fragments fully reassembled',
      });
      return new EapPacket(EapCodes.Response, packet.identifier, EapTypes.TLS, completeData, 0);
    }
    return new EapPacket(EapCodes.Request, packet.identifier, EapTypes.TLS, Buffer.alloc(0), FLAG_MORE_FRAGMENTS); // ACK
  }
}