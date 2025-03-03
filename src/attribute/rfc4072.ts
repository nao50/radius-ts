// Generated from dictionary.rfc4072
import { RadiusPacket } from "../radius-packet.js";

export const rfc4072AttributeTypes = {
  'EAP_Key_Name': 102,
} as const;

export type rfc4072AttributeType = typeof rfc4072AttributeTypes[keyof typeof rfc4072AttributeTypes];

export const rfc4072 = {
  getEAPKeyName(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4072AttributeTypes['EAP_Key_Name']);
    return avp?.value;
  },

  setEAPKeyName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4072AttributeTypes['EAP_Key_Name'], value: Buffer.from(value) });
  },

  deleteEAPKeyName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4072AttributeTypes['EAP_Key_Name']);
  },

  getAllEAPKeyName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4072AttributeTypes['EAP_Key_Name']).map(avp => avp.value);
  },

  getEAPKeyNameString(packet: RadiusPacket): string | undefined {
    const value = this.getEAPKeyName(packet);
    return value?.toString('utf8');
  },

};
