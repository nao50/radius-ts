// Generated from dictionary.rfc3576
import { RadiusPacket } from "../radius.js";

export const rfc3576AttributeTypes = {
  'Error_Cause': 101,
} as const;

export type rfc3576AttributeType = typeof rfc3576AttributeTypes[keyof typeof rfc3576AttributeTypes];

export const rfc3576 = {
  getErrorCause(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc3576AttributeTypes['Error_Cause']);
    return avp?.value;
  },

  setErrorCause(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc3576AttributeTypes['Error_Cause'], value: Buffer.from(value) });
  },

  deleteErrorCause(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc3576AttributeTypes['Error_Cause']);
  },

  getAllErrorCause(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc3576AttributeTypes['Error_Cause']).map(avp => avp.value);
  },

  getErrorCauseString(packet: RadiusPacket): string | undefined {
    const value = this.getErrorCause(packet);
    return value?.toString('utf8');
  },

};
