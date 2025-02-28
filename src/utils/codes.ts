// src/utils/codes.ts
import { RadiusCodes, EapCodes } from '../codes';

export const RadiusCodeMap: { [key: number]: string } = {
  [RadiusCodes.AccessRequest]: 'AccessRequest',
  [RadiusCodes.AccessAccept]: 'AccessAccept',
  [RadiusCodes.AccessReject]: 'AccessReject',
  [RadiusCodes.AccessChallenge]: 'AccessChallenge',
};

export const EapCodeMap: { [key: number]: string } = {
  [EapCodes.Request]: 'Request',
  [EapCodes.Response]: 'Response',
  [EapCodes.Success]: 'Success',
  [EapCodes.Failure]: 'Failure',
};