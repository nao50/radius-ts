// Generated from dictionary.rfc3576
import { RadiusPacket } from "../packet.js";

export const rfc3576AttributeTypes = {
  'Error_Cause': 101,
} as const;

export type rfc3576AttributeType = typeof rfc3576AttributeTypes[keyof typeof rfc3576AttributeTypes];

export const rfc3576 = {
  getErrorCause(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc3576AttributeTypes['Error_Cause']);
  },

  setErrorCause(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc3576AttributeTypes['Error_Cause'], value);
  },

  deleteErrorCause(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc3576AttributeTypes['Error_Cause']);
  },

  getAllErrorCause(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc3576AttributeTypes['Error_Cause']);
  },

  getErrorCauseString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc3576AttributeTypes['Error_Cause']);
    return value?.toString('utf8');
  },

};
