// Generated from dictionary.rfc6911
import { RadiusPacket } from "../radius.js";

export const rfc6911AttributeTypes = {
  'Framed_IPv6_Address': 168,
  'DNS_Server_IPv6_Address': 169,
  'Route_IPv6_Information': 170,
  'Delegated_IPv6_Prefix_Pool': 171,
  'Stateful_IPv6_Address_Pool': 172,
} as const;

export type rfc6911AttributeType = typeof rfc6911AttributeTypes[keyof typeof rfc6911AttributeTypes];

export const rfc6911 = {
  getFramedIPv6Address(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6911AttributeTypes['Framed_IPv6_Address']);
    return avp?.value;
  },

  setFramedIPv6Address(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6911AttributeTypes['Framed_IPv6_Address'], value: Buffer.from(value) });
  },

  deleteFramedIPv6Address(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6911AttributeTypes['Framed_IPv6_Address']);
  },

  getAllFramedIPv6Address(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6911AttributeTypes['Framed_IPv6_Address']).map(avp => avp.value);
  },

  getFramedIPv6AddressString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedIPv6Address(packet);
    return value?.toString('utf8');
  },

  getDNSServerIPv6Address(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6911AttributeTypes['DNS_Server_IPv6_Address']);
    return avp?.value;
  },

  setDNSServerIPv6Address(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6911AttributeTypes['DNS_Server_IPv6_Address'], value: Buffer.from(value) });
  },

  deleteDNSServerIPv6Address(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6911AttributeTypes['DNS_Server_IPv6_Address']);
  },

  getAllDNSServerIPv6Address(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6911AttributeTypes['DNS_Server_IPv6_Address']).map(avp => avp.value);
  },

  getDNSServerIPv6AddressString(packet: RadiusPacket): string | undefined {
    const value = this.getDNSServerIPv6Address(packet);
    return value?.toString('utf8');
  },

  getRouteIPv6Information(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6911AttributeTypes['Route_IPv6_Information']);
    return avp?.value;
  },

  setRouteIPv6Information(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6911AttributeTypes['Route_IPv6_Information'], value: Buffer.from(value) });
  },

  deleteRouteIPv6Information(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6911AttributeTypes['Route_IPv6_Information']);
  },

  getAllRouteIPv6Information(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6911AttributeTypes['Route_IPv6_Information']).map(avp => avp.value);
  },

  getRouteIPv6InformationString(packet: RadiusPacket): string | undefined {
    const value = this.getRouteIPv6Information(packet);
    return value?.toString('utf8');
  },

  getDelegatedIPv6PrefixPool(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6911AttributeTypes['Delegated_IPv6_Prefix_Pool']);
    return avp?.value;
  },

  setDelegatedIPv6PrefixPool(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6911AttributeTypes['Delegated_IPv6_Prefix_Pool'], value: Buffer.from(value) });
  },

  deleteDelegatedIPv6PrefixPool(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6911AttributeTypes['Delegated_IPv6_Prefix_Pool']);
  },

  getAllDelegatedIPv6PrefixPool(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6911AttributeTypes['Delegated_IPv6_Prefix_Pool']).map(avp => avp.value);
  },

  getDelegatedIPv6PrefixPoolString(packet: RadiusPacket): string | undefined {
    const value = this.getDelegatedIPv6PrefixPool(packet);
    return value?.toString('utf8');
  },

  getStatefulIPv6AddressPool(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6911AttributeTypes['Stateful_IPv6_Address_Pool']);
    return avp?.value;
  },

  setStatefulIPv6AddressPool(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6911AttributeTypes['Stateful_IPv6_Address_Pool'], value: Buffer.from(value) });
  },

  deleteStatefulIPv6AddressPool(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6911AttributeTypes['Stateful_IPv6_Address_Pool']);
  },

  getAllStatefulIPv6AddressPool(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6911AttributeTypes['Stateful_IPv6_Address_Pool']).map(avp => avp.value);
  },

  getStatefulIPv6AddressPoolString(packet: RadiusPacket): string | undefined {
    const value = this.getStatefulIPv6AddressPool(packet);
    return value?.toString('utf8');
  },

};
