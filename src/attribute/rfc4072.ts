// Generated from dictionary.rfc4072
import { RadiusPacket } from "../packet.js";

export const rfc4072AttributeTypes = {
  'EAP_Key_Name': 102,
} as const;

export type rfc4072AttributeType = typeof rfc4072AttributeTypes[keyof typeof rfc4072AttributeTypes];

export const rfc4072 = {
  getEAPKeyName(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4072AttributeTypes['EAP_Key_Name']);
  },

  setEAPKeyName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4072AttributeTypes['EAP_Key_Name'], value);
  },

  deleteEAPKeyName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4072AttributeTypes['EAP_Key_Name']);
  },

  getAllEAPKeyName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4072AttributeTypes['EAP_Key_Name']);
  },

  getEAPKeyNameString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4072AttributeTypes['EAP_Key_Name']);
    return value?.toString('utf8');
  },

};
