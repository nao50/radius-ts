// src/packet.ts
import { Buffer } from "buffer";
import { createHash, randomInt, randomBytes } from "crypto";
import { logger } from './logger';
import { RadiusCodes, RadiusCode } from './codes';

/**
 * RADIUSパケット構造（RFC 2865）
 * ```
 *  0                   1                   2                   3
 *  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * |     Code      |  Identifier   |            Length             |
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * |                     Authenticator                             |
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * |  Attributes ...
 * +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 * - Code (1 byte): パケットの種類 (1=Access-Request, 2=Access-Accept, 11=Access-Challenge, 3=Access-Reject)
 * - Identifier (1 byte): リクエストとレスポンスを紐付ける識別子
 * - Length (2 bytes): 全体の長さ
 * - Authenticator (16 bytes): 認証情報
 * - Attributes: 可変長の属性（例: User-Name, EAP-Message）
 * ```
 */

// AVP is an Attribute Value Pair.
export interface AVP {
  type: number; // 属性タイプ（例: RFC 2865のUser-Name=1, EAP-Message=79）
  value: Buffer; // 属性値
}

export class RadiusPacket {
  code: number;
  identifier: number;
  authenticator: Buffer;
  attributes: AVP[];
  secret?: string; // 必須ではなく、オプション

  constructor(code: number, identifier: number, authenticator: Buffer, attributes: AVP[] = [], secret?: string) {
    this.code = code;
    this.identifier = identifier;
    this.authenticator = authenticator;
    this.attributes = attributes;
    this.secret = secret;
  }

	// 属性の追加
	addAttribute(attribute: AVP): void {
		this.attributes.push(attribute);
	}

	// 属性の取得（指定タイプの最初の属性）
	getAttribute(type: number): AVP | undefined {
		return this.attributes.find(attr => attr.type === type);
	}

	// すべての属性を取得
	// getAllAttributes(): AVP[] {
	// 	return [...this.attributes];
	// }
	getAllAttributes(type: number): AVP[] {
    return this.attributes.filter(attr => attr.type === type);
  }

	// 指定タイプの属性を削除
	deleteAttribute(type: number): void {
		this.attributes = this.attributes.filter(attr => attr.type !== type);
	}

  // RADIUSパケットのエンコード
  encode(): Buffer {
    if (!this.attributes || this.attributes.length === 0) throw new Error('Attributes are required');
    const attributesBuffer = Buffer.concat(this.attributes.map(attr => {
      const typeBuf = Buffer.from([attr.type]);
      const length = Buffer.from([2 + attr.value.length]); // タイプ(1) + 長さ(1) + 値
      return Buffer.concat([typeBuf, length, attr.value]);
    }));
    const totalLength = 20 + attributesBuffer.length; // ヘッダ（20バイト）+ 属性
    const packet = Buffer.alloc(totalLength);
    packet.writeUInt8(this.code, 0);
    packet.writeUInt8(this.identifier, 1);
    packet.writeUInt16BE(totalLength, 2);
    this.authenticator.copy(packet, 4);
    attributesBuffer.copy(packet, 20);
    return this.encryptAuthenticator(packet);
  }

  // RADIUSパケットのデコード
  static decode(buffer: Buffer, secret?: string): RadiusPacket {
    if (buffer.length < 20) throw new Error('Invalid RADIUS packet length');
    const code = buffer.readUInt8(0);
    const identifier = buffer.readUInt8(1);
    const length = buffer.readUInt16BE(2);
    const authenticator = buffer.slice(4, 20);
    const attributes: AVP[] = [];
    let offset = 20;

    while (offset < length) {
      const type = buffer.readUInt8(offset);
      const attrLength = buffer.readUInt8(offset + 1);
      const value = buffer.slice(offset + 2, offset + attrLength);
      attributes.push({ type, value });
      offset += attrLength;
    }

    const packet = new RadiusPacket(code, identifier, authenticator, attributes, secret);
    return packet.decryptAuthenticator();
  }

  // 認証子の暗号化（MD5ベース）
  private encryptAuthenticator(packet: Buffer): Buffer {
    if (!this.secret) throw new Error('Secret is required for authentication');
    const hash = createHash('md5');
    hash.update(packet.slice(0, 4)); // Code, Identifier, Length
    hash.update(this.authenticator); // 現在の認証子
    hash.update(Buffer.from(this.secret));
    hash.update(Buffer.concat(this.attributes.map(attr => Buffer.concat([Buffer.from([attr.type]), Buffer.from([2 + attr.value.length]), attr.value]))));
    this.authenticator = hash.digest();
    // packet.write(this.authenticator, 4);
		this.authenticator.copy(packet, 4);
    return packet;
  }

  // 認証子の復号化（チェック）
  private decryptAuthenticator(): RadiusPacket {
    if (!this.secret) throw new Error('Secret is required for authentication');
    const expected = this.encryptAuthenticator(this.encode());
    if (!this.authenticator.equals(expected.slice(4, 20))) {
      logger.warn('Authenticator verification failed');
    }
    return this;
  }

}

// export class RadiusPacket {
// 	code: number;
//   identifier: number;
//   authenticator: Buffer;
//   attributes: AVP[];
//   secret?: string; // 必須ではなく、オプション

//   constructor(code: number, identifier: number, authenticator: Buffer, attributes: AVP[] = [], secret?: string) {
//     this.code = code;
//     this.identifier = identifier;
//     this.authenticator = authenticator;
//     this.attributes = attributes;
//     this.secret = secret;
//   }

// 	addAttribute(type: number, value: string | Buffer): void {
// 		const valBuffer = Buffer.isBuffer(value) ? value : Buffer.from(value);
// 		if (valBuffer.length > 253)
// 			throw new Error("Attribute value too long (max 253 bytes)");
// 		const existing = this.attributes.get(type) || [];
// 		existing.push(valBuffer);
// 		this.attributes.set(type, existing);
// 	}

// 	getAttribute(type: number): Buffer | undefined {
// 		const values = this.attributes.get(type);
// 		return values?.[0];
// 	}

// 	getAllAttributes(type: number): Buffer[] {
// 		return this.attributes.get(type) || [];
// 	}

// 	deleteAttribute(type: number): void {
// 		this.attributes.delete(type);
// 	}

// 	encode(): Buffer {
// 		if (!this.secret) throw new Error("Secret is required for encoding");
// 		const attrBuffers: Buffer[] = [];
// 		let attrLength = 0;
// 		for (const [type, values] of this.attributes) {
// 			for (const value of values) {
// 				const valBuffer =
// 					type === 2 // User-Password
// 						? this.encryptUserPassword(value, this.secret, this.authenticator)
// 						: value;
// 				const len = 2 + valBuffer.length;
// 				const attrBuffer = Buffer.alloc(len);
// 				attrBuffer.writeUInt8(type, 0);
// 				attrBuffer.writeUInt8(len, 1);
// 				valBuffer.copy(attrBuffer, 2);
// 				attrBuffers.push(attrBuffer);
// 				attrLength += len;
// 			}
// 		}

// 		const totalLength = 20 + attrLength;
// 		if (totalLength > 4096)
// 			throw new Error("Packet too large (max 4096 bytes)");
// 		const packet = Buffer.alloc(totalLength);
// 		packet.writeUInt8(this.code, 0);
// 		packet.writeUInt8(this.identifier, 1);
// 		packet.writeUInt16BE(totalLength, 2);
// 		this.authenticator.copy(packet, 4);

// 		let offset = 20;
// 		for (const attrBuffer of attrBuffers) {
// 			attrBuffer.copy(packet, offset);
// 			offset += attrBuffer.length;
// 		}

//     logger.debug({
//       code: this.code,
//       identifier: this.identifier,
//       authenticator: this.authenticator.toString('hex'),
//       attributes: Array.from(this.attributes.entries()).map(([type, values]) => ({
//         type,
//         values: values.map(v => v.toString('utf8')),
//       })),
//       msg: 'Packet encoded',
//     });

// 		return packet;
// 	}

// 	static decode(buffer: Buffer): RadiusPacket {
// 		if (buffer.length < 20 || buffer.length > 4096) {
// 			console.error(`Invalid packet length: ${buffer.length}`);
// 			throw new Error("Invalid packet length");
// 		}
// 		const code = buffer.readUInt8(0);
// 		const identifier = buffer.readUInt8(1);
// 		const length = buffer.readUInt16BE(2);
// 		if (length !== buffer.length) {
// 			console.error(
// 				`Length mismatch: header=${length}, actual=${buffer.length}`,
// 			);
// 			throw new Error("Length mismatch");
// 		}
// 		const authenticator = buffer.slice(4, 20);

// 		const packet = new RadiusPacket(code, identifier, authenticator);
// 		let offset = 20;
// 		while (offset < length) {
// 			if (offset + 2 > length) {
// 				console.error(`Incomplete attribute at offset ${offset}`);
// 				break;
// 			}
// 			const type = buffer.readUInt8(offset);
// 			const attrLength = buffer.readUInt8(offset + 1);
// 			if (attrLength < 2 || offset + attrLength > length) {
// 				console.error(
// 					`Invalid attribute: type=${type}, attrLength=${attrLength}, offset=${offset}, length=${length}`,
// 				);
// 				break;
// 			}
// 			const value = buffer.slice(offset + 2, offset + attrLength);
// 			packet.addAttribute(type, value);
// 			offset += attrLength;
// 		}

//     logger.debug({
//       code,
//       identifier,
//       authenticator: authenticator.toString('hex'),
//       attributes: Array.from(packet.attributes.entries()).map(([type, values]) => ({
//         type,
//         values: values.map(v => v.toString('utf8')),
//       })),
//       msg: 'Packet decoded',
//     });


// 		return packet;
// 	}

// 	private encryptUserPassword(
// 		password: Buffer,
// 		secret: string,
// 		authenticator: Buffer,
// 	): Buffer {
// 		const padded = Buffer.alloc(Math.ceil(password.length / 16) * 16);
// 		password.copy(padded);
// 		const result = Buffer.alloc(padded.length);
// 		let prev = authenticator;
// 		for (let i = 0; i < padded.length; i += 16) {
// 			const hash = createHash("md5").update(secret).update(prev).digest();
// 			for (let j = 0; j < 16; j++) {
// 				result[i + j] = padded[i + j] ^ hash[j];
// 			}
// 			prev = result.slice(i, i + 16);
// 		}
// 		return result;
// 	}

// 	decryptUserPassword(encrypted: Buffer, secret: string): Buffer {
// 		const result = Buffer.alloc(encrypted.length);
// 		let prev = this.authenticator;
// 		for (let i = 0; i < encrypted.length; i += 16) {
// 			const hash = createHash("md5").update(secret).update(prev).digest();
// 			for (let j = 0; j < 16; j++) {
// 				result[i + j] = encrypted[i + j] ^ hash[j];
// 			}
// 			prev = encrypted.slice(i, i + 16);
// 		}
// 		return result.slice(
// 			0,
// 			result.indexOf(0) !== -1 ? result.indexOf(0) : result.length,
// 		);
// 	}

//   // CHAP用: チャレンジ生成
//   generateChapChallenge(): Buffer {
//     const challenge = randomBytes(16); // 16バイトのランダムチャレンジ
//     return challenge;
//   }

//   // CHAP用: CHAPレスポンス生成
//   generateChapResponse(password: string, chapIdent: number, challenge: Buffer): Buffer {
//     const hash = createHash('md5')
//       .update(Buffer.from([chapIdent]))
//       .update(Buffer.from(password))
//       .update(challenge)
//       .digest();
//     return Buffer.concat([Buffer.from([chapIdent]), hash]); // CHAP Ident + Response
//   }

//   // CHAP用: CHAPレスポンス検証
//   verifyChapResponse(chapPassword: Buffer, password: string, challenge: Buffer): boolean {
//     if (chapPassword.length < 2) return false; // CHAP Ident (1) + Response (16)が必要
//     const chapIdent = chapPassword.readUInt8(0);
//     const response = chapPassword.slice(1);
//     const expected = this.generateChapResponse(password, chapIdent, challenge).slice(1); // Identを除く
//     return response.equals(expected);
//   }
// }

