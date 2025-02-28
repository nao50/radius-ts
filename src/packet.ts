// src/packet.ts
import { Buffer } from "buffer";
import { createHash, randomInt, randomBytes } from "crypto";
import { logger } from './logger';

export class RadiusPacket {
	private attributes: Map<number, Buffer[]>;

	constructor(
		public code: number,
		public identifier: number = randomInt(0, 256),
		public authenticator: Buffer,
		public secret?: string,
	) {
		this.attributes = new Map();
	}

	addAttribute(type: number, value: string | Buffer): void {
		const valBuffer = Buffer.isBuffer(value) ? value : Buffer.from(value);
		if (valBuffer.length > 253)
			throw new Error("Attribute value too long (max 253 bytes)");
		const existing = this.attributes.get(type) || [];
		existing.push(valBuffer);
		this.attributes.set(type, existing);
	}

	getAttribute(type: number): Buffer | undefined {
		const values = this.attributes.get(type);
		return values?.[0];
	}

	getAllAttributes(type: number): Buffer[] {
		return this.attributes.get(type) || [];
	}

	deleteAttribute(type: number): void {
		this.attributes.delete(type);
	}

	encode(): Buffer {
		if (!this.secret) throw new Error("Secret is required for encoding");
		const attrBuffers: Buffer[] = [];
		let attrLength = 0;
		for (const [type, values] of this.attributes) {
			for (const value of values) {
				const valBuffer =
					type === 2 // User-Password
						? this.encryptUserPassword(value, this.secret, this.authenticator)
						: value;
				const len = 2 + valBuffer.length;
				const attrBuffer = Buffer.alloc(len);
				attrBuffer.writeUInt8(type, 0);
				attrBuffer.writeUInt8(len, 1);
				valBuffer.copy(attrBuffer, 2);
				attrBuffers.push(attrBuffer);
				attrLength += len;
			}
		}

		const totalLength = 20 + attrLength;
		if (totalLength > 4096)
			throw new Error("Packet too large (max 4096 bytes)");
		const packet = Buffer.alloc(totalLength);
		packet.writeUInt8(this.code, 0);
		packet.writeUInt8(this.identifier, 1);
		packet.writeUInt16BE(totalLength, 2);
		this.authenticator.copy(packet, 4);

		let offset = 20;
		for (const attrBuffer of attrBuffers) {
			attrBuffer.copy(packet, offset);
			offset += attrBuffer.length;
		}

    logger.debug({
      code: this.code,
      identifier: this.identifier,
      authenticator: this.authenticator.toString('hex'),
      attributes: Array.from(this.attributes.entries()).map(([type, values]) => ({
        type,
        values: values.map(v => v.toString('utf8')),
      })),
      msg: 'Packet encoded',
    });

		return packet;
	}

	static decode(buffer: Buffer): RadiusPacket {
		if (buffer.length < 20 || buffer.length > 4096) {
			console.error(`Invalid packet length: ${buffer.length}`);
			throw new Error("Invalid packet length");
		}
		const code = buffer.readUInt8(0);
		const identifier = buffer.readUInt8(1);
		const length = buffer.readUInt16BE(2);
		if (length !== buffer.length) {
			console.error(
				`Length mismatch: header=${length}, actual=${buffer.length}`,
			);
			throw new Error("Length mismatch");
		}
		const authenticator = buffer.slice(4, 20);

		const packet = new RadiusPacket(code, identifier, authenticator);
		let offset = 20;
		while (offset < length) {
			if (offset + 2 > length) {
				console.error(`Incomplete attribute at offset ${offset}`);
				break;
			}
			const type = buffer.readUInt8(offset);
			const attrLength = buffer.readUInt8(offset + 1);
			if (attrLength < 2 || offset + attrLength > length) {
				console.error(
					`Invalid attribute: type=${type}, attrLength=${attrLength}, offset=${offset}, length=${length}`,
				);
				break;
			}
			const value = buffer.slice(offset + 2, offset + attrLength);
			packet.addAttribute(type, value);
			offset += attrLength;
		}

    logger.debug({
      code,
      identifier,
      authenticator: authenticator.toString('hex'),
      attributes: Array.from(packet.attributes.entries()).map(([type, values]) => ({
        type,
        values: values.map(v => v.toString('utf8')),
      })),
      msg: 'Packet decoded',
    });


		return packet;
	}

	private encryptUserPassword(
		password: Buffer,
		secret: string,
		authenticator: Buffer,
	): Buffer {
		const padded = Buffer.alloc(Math.ceil(password.length / 16) * 16);
		password.copy(padded);
		const result = Buffer.alloc(padded.length);
		let prev = authenticator;
		for (let i = 0; i < padded.length; i += 16) {
			const hash = createHash("md5").update(secret).update(prev).digest();
			for (let j = 0; j < 16; j++) {
				result[i + j] = padded[i + j] ^ hash[j];
			}
			prev = result.slice(i, i + 16);
		}
		return result;
	}

	decryptUserPassword(encrypted: Buffer, secret: string): Buffer {
		const result = Buffer.alloc(encrypted.length);
		let prev = this.authenticator;
		for (let i = 0; i < encrypted.length; i += 16) {
			const hash = createHash("md5").update(secret).update(prev).digest();
			for (let j = 0; j < 16; j++) {
				result[i + j] = encrypted[i + j] ^ hash[j];
			}
			prev = encrypted.slice(i, i + 16);
		}
		return result.slice(
			0,
			result.indexOf(0) !== -1 ? result.indexOf(0) : result.length,
		);
	}

    // CHAP用: チャレンジ生成
    generateChapChallenge(): Buffer {
      const challenge = randomBytes(16); // 16バイトのランダムチャレンジ
      return challenge;
    }
  
    // CHAP用: CHAPレスポンス生成
    generateChapResponse(password: string, chapIdent: number, challenge: Buffer): Buffer {
      const hash = createHash('md5')
        .update(Buffer.from([chapIdent]))
        .update(Buffer.from(password))
        .update(challenge)
        .digest();
      return Buffer.concat([Buffer.from([chapIdent]), hash]); // CHAP Ident + Response
    }
  
    // CHAP用: CHAPレスポンス検証
    verifyChapResponse(chapPassword: Buffer, password: string, challenge: Buffer): boolean {
      if (chapPassword.length < 2) return false; // CHAP Ident (1) + Response (16)が必要
      const chapIdent = chapPassword.readUInt8(0);
      const response = chapPassword.slice(1);
      const expected = this.generateChapResponse(password, chapIdent, challenge).slice(1); // Identを除く
      return response.equals(expected);
    }
}

