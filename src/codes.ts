// src/codes.ts
export const RADIUS_ACCESS_REQUEST = 1;       // RFC 2865: Access-Requestコード
export const RADIUS_ACCESS_ACCEPT = 2;        // RFC 2865: Access-Acceptコード
export const RADIUS_ACCESS_REJECT = 3;        // RFC 2865: Access-Rejectコード
export const RADIUS_ACCESS_CHALLENGE = 11;    // RFC 2865: Access-Challengeコード

export const RadiusCodes = {
	AccessRequest: 1,
	AccessAccept: 2,
	AccessReject: 3,
	AccountingRequest: 4,
	AccountingResponse: 5,
	AccessChallenge: 11,
	StatusServer: 12,
	StatusClient: 13,
} as const;

export type RadiusCode = (typeof RadiusCodes)[keyof typeof RadiusCodes];

export const EapCodes = {
  Request: 1,
  Response: 2,
  Success: 3,
  Failure: 4,
} as const;

export type EapCode = typeof EapCodes[keyof typeof EapCodes];
export type EapCodeType = (typeof EapCodes)[keyof typeof EapCodes];

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
export type EapTypeType = (typeof EapTypes)[keyof typeof EapTypes];

export const FLAGS_ACK = 0;
export const FLAG_LENGTH_INCLUDED = 0x80;     // RFC 5216: EAP-TLS Lフラグ
export const FLAG_MORE_FRAGMENTS = 0x40;      // RFC 5216: EAP-TLS Mフラグ
export const FLAG_TLS_START = 0x20;           // RFC 5216: EAP-TLS Sフラグ

export const EAP_HEADER_LENGTH = 4;           // Code(1) + Identifier(1) + Length(2)
export const EAP_TYPE_LENGTH = 1;             // Type(1)
export const EAP_FLAGS_LENGTH = 1;            // Flags(1)
export const RADIUS_AUTH_PORT = 1812;         // RFC 2865: RADIUS認証ポート
export const MAX_EAP_MESSAGE_SIZE = 247;      // RADIUS属性値の最大サイズ（ヘッダー10バイト考慮）

// TLS関連定数（EAP-TLS用）
export const TLS_HANDSHAKE = Buffer.from([0x16]);               // TLS Handshake (0x16)
export const TLS_VERSION_1_0 = Buffer.from([0x03, 0x01]);       // TLS Version 1.0
export const TLS_VERSION_1_2 = Buffer.from([0x03, 0x03]);       // TLS Version 1.2
export const TLS_SERVER_HELLO = Buffer.from([0x02]);            // Server Hello
export const TLS_CERTIFICATE = Buffer.from([0x0b]);             // Certificate
export const TLS_CERT_REQUEST = Buffer.from([0x0d]);            // Certificate Request
export const TLS_SERVER_HELLO_DONE = Buffer.from([0x0e]);       // Server Hello Done
export const TLS_CLIENT_KEY_EXCHANGE = Buffer.from([0x10]);     // Client Key Exchange
export const TLS_FINISHED = Buffer.from([0x14]);                // Finished
export const TLS_SESSION_ID_ZERO = Buffer.from([0x00]);         // Session ID Length (0)
export const TLS_CIPHER_SUITE = Buffer.from([0xc0, 0x2f]);      // Cipher Suite (TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384)
export const TLS_COMPRESSION = Buffer.from([0x00]);             // Compression Method (none)

// TLS関連定数
export const TlsConstants = {
  TLS_HANDSHAKE: Buffer.from([0x16]),               // TLS Handshake (0x16)
  TLS_VERSION_1_0: Buffer.from([0x03, 0x01]),       // TLS Version 1.0
  TLS_VERSION_1_2: Buffer.from([0x03, 0x03]),       // TLS Version 1.2
  TLS_SERVER_HELLO: Buffer.from([0x02]),            // Server Hello
  TLS_CERTIFICATE: Buffer.from([0x0b]),             // Certificate
  TLS_CERT_REQUEST: Buffer.from([0x0d]),            // Certificate Request
  TLS_SERVER_HELLO_DONE: Buffer.from([0x0e]),       // Server Hello Done
  TLS_CLIENT_KEY_EXCHANGE: Buffer.from([0x10]),     // Client Key Exchange
  TLS_FINISHED: Buffer.from([0x14]),                // Finished
  TLS_SESSION_ID_ZERO: Buffer.from([0x00]),         // Session ID Length (0)
  TLS_CIPHER_SUITE: Buffer.from([0xc0, 0x2f]),      // Cipher Suite (TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384)
  TLS_COMPRESSION: Buffer.from([0x00]),             // Compression Method (none)
};