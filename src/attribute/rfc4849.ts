// Generated from dictionary.rfc4849
import { RadiusPacket } from "../radius.js";

export const rfc4849AttributeTypes = {
  'NAS_Filter_Rule': 92,
} as const;

export type rfc4849AttributeType = typeof rfc4849AttributeTypes[keyof typeof rfc4849AttributeTypes];

export const rfc4849 = {
  getNASFilterRule(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4849AttributeTypes['NAS_Filter_Rule']);
    return avp?.value;
  },

  setNASFilterRule(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4849AttributeTypes['NAS_Filter_Rule'], value: Buffer.from(value) });
  },

  deleteNASFilterRule(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4849AttributeTypes['NAS_Filter_Rule']);
  },

  getAllNASFilterRule(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4849AttributeTypes['NAS_Filter_Rule']).map(avp => avp.value);
  },

  getNASFilterRuleString(packet: RadiusPacket): string | undefined {
    const value = this.getNASFilterRule(packet);
    return value?.toString('utf8');
  },

};
