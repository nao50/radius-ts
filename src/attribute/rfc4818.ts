// Generated from dictionary.rfc4818
import { RadiusPacket } from "../packet.js";

export const rfc4818AttributeTypes = {
  'Delegated_IPv6_Prefix': 123,
} as const;

export type rfc4818AttributeType = typeof rfc4818AttributeTypes[keyof typeof rfc4818AttributeTypes];

export const rfc4818 = {
  getDelegatedIPv6Prefix(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4818AttributeTypes['Delegated_IPv6_Prefix']);
  },

  setDelegatedIPv6Prefix(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4818AttributeTypes['Delegated_IPv6_Prefix'], value);
  },

  deleteDelegatedIPv6Prefix(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4818AttributeTypes['Delegated_IPv6_Prefix']);
  },

  getAllDelegatedIPv6Prefix(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4818AttributeTypes['Delegated_IPv6_Prefix']);
  },

  getDelegatedIPv6PrefixString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4818AttributeTypes['Delegated_IPv6_Prefix']);
    return value?.toString('utf8');
  },

};
