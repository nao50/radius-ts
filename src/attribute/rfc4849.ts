// Generated from dictionary.rfc4849
import { RadiusPacket } from "../packet.js";

export const rfc4849AttributeTypes = {
  'NAS_Filter_Rule': 92,
} as const;

export type rfc4849AttributeType = typeof rfc4849AttributeTypes[keyof typeof rfc4849AttributeTypes];

export const rfc4849 = {
  getNASFilterRule(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4849AttributeTypes['NAS_Filter_Rule']);
  },

  setNASFilterRule(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4849AttributeTypes['NAS_Filter_Rule'], value);
  },

  deleteNASFilterRule(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4849AttributeTypes['NAS_Filter_Rule']);
  },

  getAllNASFilterRule(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4849AttributeTypes['NAS_Filter_Rule']);
  },

  getNASFilterRuleString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4849AttributeTypes['NAS_Filter_Rule']);
    return value?.toString('utf8');
  },

};
