// Generated from dictionary.rfc3162
import { RadiusPacket } from "../radius-packet.js";

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
    const avp = packet.getAttribute(rfc3162AttributeTypes['NAS_IPv6_Address']);
    return avp?.value;
  },

  setNASIPv6Address(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc3162AttributeTypes['NAS_IPv6_Address'], value: Buffer.from(value) });
  },

  deleteNASIPv6Address(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc3162AttributeTypes['NAS_IPv6_Address']);
  },

  getAllNASIPv6Address(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc3162AttributeTypes['NAS_IPv6_Address']).map(avp => avp.value);
  },

  getNASIPv6AddressString(packet: RadiusPacket): string | undefined {
    const value = this.getNASIPv6Address(packet);
    return value?.toString('utf8');
  },

  getFramedInterfaceId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc3162AttributeTypes['Framed_Interface_Id']);
    return avp?.value;
  },

  setFramedInterfaceId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc3162AttributeTypes['Framed_Interface_Id'], value: Buffer.from(value) });
  },

  deleteFramedInterfaceId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc3162AttributeTypes['Framed_Interface_Id']);
  },

  getAllFramedInterfaceId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc3162AttributeTypes['Framed_Interface_Id']).map(avp => avp.value);
  },

  getFramedInterfaceIdString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedInterfaceId(packet);
    return value?.toString('utf8');
  },

  getFramedIPv6Prefix(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc3162AttributeTypes['Framed_IPv6_Prefix']);
    return avp?.value;
  },

  setFramedIPv6Prefix(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc3162AttributeTypes['Framed_IPv6_Prefix'], value: Buffer.from(value) });
  },

  deleteFramedIPv6Prefix(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc3162AttributeTypes['Framed_IPv6_Prefix']);
  },

  getAllFramedIPv6Prefix(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc3162AttributeTypes['Framed_IPv6_Prefix']).map(avp => avp.value);
  },

  getFramedIPv6PrefixString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedIPv6Prefix(packet);
    return value?.toString('utf8');
  },

  getLoginIPv6Host(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc3162AttributeTypes['Login_IPv6_Host']);
    return avp?.value;
  },

  setLoginIPv6Host(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc3162AttributeTypes['Login_IPv6_Host'], value: Buffer.from(value) });
  },

  deleteLoginIPv6Host(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc3162AttributeTypes['Login_IPv6_Host']);
  },

  getAllLoginIPv6Host(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc3162AttributeTypes['Login_IPv6_Host']).map(avp => avp.value);
  },

  getLoginIPv6HostString(packet: RadiusPacket): string | undefined {
    const value = this.getLoginIPv6Host(packet);
    return value?.toString('utf8');
  },

  getFramedIPv6Route(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc3162AttributeTypes['Framed_IPv6_Route']);
    return avp?.value;
  },

  setFramedIPv6Route(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc3162AttributeTypes['Framed_IPv6_Route'], value: Buffer.from(value) });
  },

  deleteFramedIPv6Route(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc3162AttributeTypes['Framed_IPv6_Route']);
  },

  getAllFramedIPv6Route(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc3162AttributeTypes['Framed_IPv6_Route']).map(avp => avp.value);
  },

  getFramedIPv6RouteString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedIPv6Route(packet);
    return value?.toString('utf8');
  },

  getFramedIPv6Pool(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc3162AttributeTypes['Framed_IPv6_Pool']);
    return avp?.value;
  },

  setFramedIPv6Pool(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc3162AttributeTypes['Framed_IPv6_Pool'], value: Buffer.from(value) });
  },

  deleteFramedIPv6Pool(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc3162AttributeTypes['Framed_IPv6_Pool']);
  },

  getAllFramedIPv6Pool(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc3162AttributeTypes['Framed_IPv6_Pool']).map(avp => avp.value);
  },

  getFramedIPv6PoolString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedIPv6Pool(packet);
    return value?.toString('utf8');
  },

};
