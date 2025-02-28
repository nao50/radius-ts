// src/codes.ts
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

export const EapTypes = {
  Identity: 1,
  MD5Challenge: 4,
	TLS: 13,
} as const;

export type EapType = typeof EapTypes[keyof typeof EapTypes];