// Generated from dictionary.rfc4818
import { RadiusPacket } from "../radius-packet.js";

export const rfc4818AttributeTypes = {
  'Delegated_IPv6_Prefix': 123,
} as const;

export type rfc4818AttributeType = typeof rfc4818AttributeTypes[keyof typeof rfc4818AttributeTypes];

export const rfc4818 = {
  getDelegatedIPv6Prefix(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4818AttributeTypes['Delegated_IPv6_Prefix']);
    return avp?.value;
  },

  setDelegatedIPv6Prefix(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4818AttributeTypes['Delegated_IPv6_Prefix'], value: Buffer.from(value) });
  },

  deleteDelegatedIPv6Prefix(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4818AttributeTypes['Delegated_IPv6_Prefix']);
  },

  getAllDelegatedIPv6Prefix(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4818AttributeTypes['Delegated_IPv6_Prefix']).map(avp => avp.value);
  },

  getDelegatedIPv6PrefixString(packet: RadiusPacket): string | undefined {
    const value = this.getDelegatedIPv6Prefix(packet);
    return value?.toString('utf8');
  },

};
