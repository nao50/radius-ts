// Generated from dictionary.rfc3162
import { RadiusPacket } from "../packet.js";

export const rfc3162AttributeTypes = {
  'NAS_IPv6_Address': 95,
  'Framed_Interface_Id': 96,
  'Framed_IPv6_Prefix': 97,
  'Login_IPv6_Host': 98,
  'Framed_IPv6_Route': 99,
  'Framed_IPv6_Pool': 100,
} as const;

export type rfc3162AttributeType = typeof rfc3162AttributeTypes[keyof typeof rfc3162AttributeTypes];

export const rfc3162 = {
  getNASIPv6Address(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc3162AttributeTypes['NAS_IPv6_Address']);
  },

  setNASIPv6Address(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc3162AttributeTypes['NAS_IPv6_Address'], value);
  },

  deleteNASIPv6Address(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc3162AttributeTypes['NAS_IPv6_Address']);
  },

  getAllNASIPv6Address(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc3162AttributeTypes['NAS_IPv6_Address']);
  },

  getNASIPv6AddressString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc3162AttributeTypes['NAS_IPv6_Address']);
    return value?.toString('utf8');
  },

  getFramedInterfaceId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc3162AttributeTypes['Framed_Interface_Id']);
  },

  setFramedInterfaceId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc3162AttributeTypes['Framed_Interface_Id'], value);
  },

  deleteFramedInterfaceId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc3162AttributeTypes['Framed_Interface_Id']);
  },

  getAllFramedInterfaceId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc3162AttributeTypes['Framed_Interface_Id']);
  },

  getFramedInterfaceIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc3162AttributeTypes['Framed_Interface_Id']);
    return value?.toString('utf8');
  },

  getFramedIPv6Prefix(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc3162AttributeTypes['Framed_IPv6_Prefix']);
  },

  setFramedIPv6Prefix(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc3162AttributeTypes['Framed_IPv6_Prefix'], value);
  },

  deleteFramedIPv6Prefix(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc3162AttributeTypes['Framed_IPv6_Prefix']);
  },

  getAllFramedIPv6Prefix(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc3162AttributeTypes['Framed_IPv6_Prefix']);
  },

  getFramedIPv6PrefixString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc3162AttributeTypes['Framed_IPv6_Prefix']);
    return value?.toString('utf8');
  },

  getLoginIPv6Host(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc3162AttributeTypes['Login_IPv6_Host']);
  },

  setLoginIPv6Host(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc3162AttributeTypes['Login_IPv6_Host'], value);
  },

  deleteLoginIPv6Host(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc3162AttributeTypes['Login_IPv6_Host']);
  },

  getAllLoginIPv6Host(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc3162AttributeTypes['Login_IPv6_Host']);
  },

  getLoginIPv6HostString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc3162AttributeTypes['Login_IPv6_Host']);
    return value?.toString('utf8');
  },

  getFramedIPv6Route(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc3162AttributeTypes['Framed_IPv6_Route']);
  },

  setFramedIPv6Route(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc3162AttributeTypes['Framed_IPv6_Route'], value);
  },

  deleteFramedIPv6Route(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc3162AttributeTypes['Framed_IPv6_Route']);
  },

  getAllFramedIPv6Route(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc3162AttributeTypes['Framed_IPv6_Route']);
  },

  getFramedIPv6RouteString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc3162AttributeTypes['Framed_IPv6_Route']);
    return value?.toString('utf8');
  },

  getFramedIPv6Pool(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc3162AttributeTypes['Framed_IPv6_Pool']);
  },

  setFramedIPv6Pool(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc3162AttributeTypes['Framed_IPv6_Pool'], value);
  },

  deleteFramedIPv6Pool(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc3162AttributeTypes['Framed_IPv6_Pool']);
  },

  getAllFramedIPv6Pool(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc3162AttributeTypes['Framed_IPv6_Pool']);
  },

  getFramedIPv6PoolString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc3162AttributeTypes['Framed_IPv6_Pool']);
    return value?.toString('utf8');
  },

};
