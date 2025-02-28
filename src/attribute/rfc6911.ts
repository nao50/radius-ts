// Generated from dictionary.rfc6911
import { RadiusPacket } from "../packet.js";

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
    return packet.getAttribute(rfc6911AttributeTypes['Framed_IPv6_Address']);
  },

  setFramedIPv6Address(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc6911AttributeTypes['Framed_IPv6_Address'], value);
  },

  deleteFramedIPv6Address(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6911AttributeTypes['Framed_IPv6_Address']);
  },

  getAllFramedIPv6Address(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6911AttributeTypes['Framed_IPv6_Address']);
  },

  getFramedIPv6AddressString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc6911AttributeTypes['Framed_IPv6_Address']);
    return value?.toString('utf8');
  },

  getDNSServerIPv6Address(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc6911AttributeTypes['DNS_Server_IPv6_Address']);
  },

  setDNSServerIPv6Address(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc6911AttributeTypes['DNS_Server_IPv6_Address'], value);
  },

  deleteDNSServerIPv6Address(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6911AttributeTypes['DNS_Server_IPv6_Address']);
  },

  getAllDNSServerIPv6Address(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6911AttributeTypes['DNS_Server_IPv6_Address']);
  },

  getDNSServerIPv6AddressString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc6911AttributeTypes['DNS_Server_IPv6_Address']);
    return value?.toString('utf8');
  },

  getRouteIPv6Information(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc6911AttributeTypes['Route_IPv6_Information']);
  },

  setRouteIPv6Information(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc6911AttributeTypes['Route_IPv6_Information'], value);
  },

  deleteRouteIPv6Information(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6911AttributeTypes['Route_IPv6_Information']);
  },

  getAllRouteIPv6Information(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6911AttributeTypes['Route_IPv6_Information']);
  },

  getRouteIPv6InformationString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc6911AttributeTypes['Route_IPv6_Information']);
    return value?.toString('utf8');
  },

  getDelegatedIPv6PrefixPool(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc6911AttributeTypes['Delegated_IPv6_Prefix_Pool']);
  },

  setDelegatedIPv6PrefixPool(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc6911AttributeTypes['Delegated_IPv6_Prefix_Pool'], value);
  },

  deleteDelegatedIPv6PrefixPool(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6911AttributeTypes['Delegated_IPv6_Prefix_Pool']);
  },

  getAllDelegatedIPv6PrefixPool(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6911AttributeTypes['Delegated_IPv6_Prefix_Pool']);
  },

  getDelegatedIPv6PrefixPoolString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc6911AttributeTypes['Delegated_IPv6_Prefix_Pool']);
    return value?.toString('utf8');
  },

  getStatefulIPv6AddressPool(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc6911AttributeTypes['Stateful_IPv6_Address_Pool']);
  },

  setStatefulIPv6AddressPool(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc6911AttributeTypes['Stateful_IPv6_Address_Pool'], value);
  },

  deleteStatefulIPv6AddressPool(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6911AttributeTypes['Stateful_IPv6_Address_Pool']);
  },

  getAllStatefulIPv6AddressPool(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6911AttributeTypes['Stateful_IPv6_Address_Pool']);
  },

  getStatefulIPv6AddressPoolString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc6911AttributeTypes['Stateful_IPv6_Address_Pool']);
    return value?.toString('utf8');
  },

};
