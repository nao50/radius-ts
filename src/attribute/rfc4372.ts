// Generated from dictionary.rfc4372
import { RadiusPacket } from "../packet.js";

export const rfc4372AttributeTypes = {
  'Chargeable_User_Identity': 89,
} as const;

export type rfc4372AttributeType = typeof rfc4372AttributeTypes[keyof typeof rfc4372AttributeTypes];

export const rfc4372 = {
  getChargeableUserIdentity(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4372AttributeTypes['Chargeable_User_Identity']);
  },

  setChargeableUserIdentity(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4372AttributeTypes['Chargeable_User_Identity'], value);
  },

  deleteChargeableUserIdentity(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4372AttributeTypes['Chargeable_User_Identity']);
  },

  getAllChargeableUserIdentity(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4372AttributeTypes['Chargeable_User_Identity']);
  },

  getChargeableUserIdentityString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4372AttributeTypes['Chargeable_User_Identity']);
    return value?.toString('utf8');
  },

};
