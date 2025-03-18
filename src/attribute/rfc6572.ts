// Generated from dictionary.rfc6572
import { RadiusPacket } from "../radius.js";

export const rfc6572AttributeTypes = {
  'Mobile_Node_Identifier': 145,
  'Service_Selection': 146,
  'PMIP6_Home_LMA_IPv6_Address': 147,
  'PMIP6_Visited_LMA_IPv6_Address': 148,
  'PMIP6_Home_LMA_IPv4_Address': 149,
  'PMIP6_Visited_LMA_IPv4_Address': 150,
  'PMIP6_Home_HN_Prefix': 151,
  'PMIP6_Visited_HN_Prefix': 152,
  'PMIP6_Home_Interface_ID': 153,
  'PMIP6_Visited_Interface_ID': 154,
  'PMIP6_Home_IPv4_HoA': 155,
  'PMIP6_Visited_IPv4_HoA': 156,
  'PMIP6_Home_DHCP4_Server_Address': 157,
  'PMIP6_Visited_DHCP4_Server_Address': 158,
  'PMIP6_Home_DHCP6_Server_Address': 159,
  'PMIP6_Visited_DHCP6_Server_Address': 160,
  'PMIP6_Home_IPv4_Gateway': 161,
  'PMIP6_Visited_IPv4_Gateway': 162,
} as const;

export type rfc6572AttributeType = typeof rfc6572AttributeTypes[keyof typeof rfc6572AttributeTypes];

export const rfc6572 = {
  getMobileNodeIdentifier(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['Mobile_Node_Identifier']);
    return avp?.value;
  },

  setMobileNodeIdentifier(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['Mobile_Node_Identifier'], value: Buffer.from(value) });
  },

  deleteMobileNodeIdentifier(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['Mobile_Node_Identifier']);
  },

  getAllMobileNodeIdentifier(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['Mobile_Node_Identifier']).map(avp => avp.value);
  },

  getMobileNodeIdentifierString(packet: RadiusPacket): string | undefined {
    const value = this.getMobileNodeIdentifier(packet);
    return value?.toString('utf8');
  },

  getServiceSelection(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['Service_Selection']);
    return avp?.value;
  },

  setServiceSelection(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['Service_Selection'], value: Buffer.from(value) });
  },

  deleteServiceSelection(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['Service_Selection']);
  },

  getAllServiceSelection(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['Service_Selection']).map(avp => avp.value);
  },

  getServiceSelectionString(packet: RadiusPacket): string | undefined {
    const value = this.getServiceSelection(packet);
    return value?.toString('utf8');
  },

  getPMIP6HomeLMAIPv6Address(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Home_LMA_IPv6_Address']);
    return avp?.value;
  },

  setPMIP6HomeLMAIPv6Address(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Home_LMA_IPv6_Address'], value: Buffer.from(value) });
  },

  deletePMIP6HomeLMAIPv6Address(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Home_LMA_IPv6_Address']);
  },

  getAllPMIP6HomeLMAIPv6Address(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Home_LMA_IPv6_Address']).map(avp => avp.value);
  },

  getPMIP6HomeLMAIPv6AddressString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6HomeLMAIPv6Address(packet);
    return value?.toString('utf8');
  },

  getPMIP6VisitedLMAIPv6Address(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Visited_LMA_IPv6_Address']);
    return avp?.value;
  },

  setPMIP6VisitedLMAIPv6Address(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Visited_LMA_IPv6_Address'], value: Buffer.from(value) });
  },

  deletePMIP6VisitedLMAIPv6Address(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Visited_LMA_IPv6_Address']);
  },

  getAllPMIP6VisitedLMAIPv6Address(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Visited_LMA_IPv6_Address']).map(avp => avp.value);
  },

  getPMIP6VisitedLMAIPv6AddressString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6VisitedLMAIPv6Address(packet);
    return value?.toString('utf8');
  },

  getPMIP6HomeLMAIPv4Address(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Home_LMA_IPv4_Address']);
    return avp?.value;
  },

  setPMIP6HomeLMAIPv4Address(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Home_LMA_IPv4_Address'], value: Buffer.from(value) });
  },

  deletePMIP6HomeLMAIPv4Address(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Home_LMA_IPv4_Address']);
  },

  getAllPMIP6HomeLMAIPv4Address(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Home_LMA_IPv4_Address']).map(avp => avp.value);
  },

  getPMIP6HomeLMAIPv4AddressString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6HomeLMAIPv4Address(packet);
    return value?.toString('utf8');
  },

  getPMIP6VisitedLMAIPv4Address(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Visited_LMA_IPv4_Address']);
    return avp?.value;
  },

  setPMIP6VisitedLMAIPv4Address(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Visited_LMA_IPv4_Address'], value: Buffer.from(value) });
  },

  deletePMIP6VisitedLMAIPv4Address(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Visited_LMA_IPv4_Address']);
  },

  getAllPMIP6VisitedLMAIPv4Address(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Visited_LMA_IPv4_Address']).map(avp => avp.value);
  },

  getPMIP6VisitedLMAIPv4AddressString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6VisitedLMAIPv4Address(packet);
    return value?.toString('utf8');
  },

  getPMIP6HomeHNPrefix(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Home_HN_Prefix']);
    return avp?.value;
  },

  setPMIP6HomeHNPrefix(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Home_HN_Prefix'], value: Buffer.from(value) });
  },

  deletePMIP6HomeHNPrefix(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Home_HN_Prefix']);
  },

  getAllPMIP6HomeHNPrefix(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Home_HN_Prefix']).map(avp => avp.value);
  },

  getPMIP6HomeHNPrefixString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6HomeHNPrefix(packet);
    return value?.toString('utf8');
  },

  getPMIP6VisitedHNPrefix(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Visited_HN_Prefix']);
    return avp?.value;
  },

  setPMIP6VisitedHNPrefix(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Visited_HN_Prefix'], value: Buffer.from(value) });
  },

  deletePMIP6VisitedHNPrefix(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Visited_HN_Prefix']);
  },

  getAllPMIP6VisitedHNPrefix(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Visited_HN_Prefix']).map(avp => avp.value);
  },

  getPMIP6VisitedHNPrefixString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6VisitedHNPrefix(packet);
    return value?.toString('utf8');
  },

  getPMIP6HomeInterfaceID(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Home_Interface_ID']);
    return avp?.value;
  },

  setPMIP6HomeInterfaceID(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Home_Interface_ID'], value: Buffer.from(value) });
  },

  deletePMIP6HomeInterfaceID(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Home_Interface_ID']);
  },

  getAllPMIP6HomeInterfaceID(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Home_Interface_ID']).map(avp => avp.value);
  },

  getPMIP6HomeInterfaceIDString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6HomeInterfaceID(packet);
    return value?.toString('utf8');
  },

  getPMIP6VisitedInterfaceID(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Visited_Interface_ID']);
    return avp?.value;
  },

  setPMIP6VisitedInterfaceID(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Visited_Interface_ID'], value: Buffer.from(value) });
  },

  deletePMIP6VisitedInterfaceID(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Visited_Interface_ID']);
  },

  getAllPMIP6VisitedInterfaceID(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Visited_Interface_ID']).map(avp => avp.value);
  },

  getPMIP6VisitedInterfaceIDString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6VisitedInterfaceID(packet);
    return value?.toString('utf8');
  },

  getPMIP6HomeIPv4HoA(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Home_IPv4_HoA']);
    return avp?.value;
  },

  setPMIP6HomeIPv4HoA(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Home_IPv4_HoA'], value: Buffer.from(value) });
  },

  deletePMIP6HomeIPv4HoA(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Home_IPv4_HoA']);
  },

  getAllPMIP6HomeIPv4HoA(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Home_IPv4_HoA']).map(avp => avp.value);
  },

  getPMIP6HomeIPv4HoAString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6HomeIPv4HoA(packet);
    return value?.toString('utf8');
  },

  getPMIP6VisitedIPv4HoA(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Visited_IPv4_HoA']);
    return avp?.value;
  },

  setPMIP6VisitedIPv4HoA(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Visited_IPv4_HoA'], value: Buffer.from(value) });
  },

  deletePMIP6VisitedIPv4HoA(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Visited_IPv4_HoA']);
  },

  getAllPMIP6VisitedIPv4HoA(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Visited_IPv4_HoA']).map(avp => avp.value);
  },

  getPMIP6VisitedIPv4HoAString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6VisitedIPv4HoA(packet);
    return value?.toString('utf8');
  },

  getPMIP6HomeDHCP4ServerAddress(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Home_DHCP4_Server_Address']);
    return avp?.value;
  },

  setPMIP6HomeDHCP4ServerAddress(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Home_DHCP4_Server_Address'], value: Buffer.from(value) });
  },

  deletePMIP6HomeDHCP4ServerAddress(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Home_DHCP4_Server_Address']);
  },

  getAllPMIP6HomeDHCP4ServerAddress(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Home_DHCP4_Server_Address']).map(avp => avp.value);
  },

  getPMIP6HomeDHCP4ServerAddressString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6HomeDHCP4ServerAddress(packet);
    return value?.toString('utf8');
  },

  getPMIP6VisitedDHCP4ServerAddress(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Visited_DHCP4_Server_Address']);
    return avp?.value;
  },

  setPMIP6VisitedDHCP4ServerAddress(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Visited_DHCP4_Server_Address'], value: Buffer.from(value) });
  },

  deletePMIP6VisitedDHCP4ServerAddress(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Visited_DHCP4_Server_Address']);
  },

  getAllPMIP6VisitedDHCP4ServerAddress(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Visited_DHCP4_Server_Address']).map(avp => avp.value);
  },

  getPMIP6VisitedDHCP4ServerAddressString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6VisitedDHCP4ServerAddress(packet);
    return value?.toString('utf8');
  },

  getPMIP6HomeDHCP6ServerAddress(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Home_DHCP6_Server_Address']);
    return avp?.value;
  },

  setPMIP6HomeDHCP6ServerAddress(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Home_DHCP6_Server_Address'], value: Buffer.from(value) });
  },

  deletePMIP6HomeDHCP6ServerAddress(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Home_DHCP6_Server_Address']);
  },

  getAllPMIP6HomeDHCP6ServerAddress(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Home_DHCP6_Server_Address']).map(avp => avp.value);
  },

  getPMIP6HomeDHCP6ServerAddressString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6HomeDHCP6ServerAddress(packet);
    return value?.toString('utf8');
  },

  getPMIP6VisitedDHCP6ServerAddress(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Visited_DHCP6_Server_Address']);
    return avp?.value;
  },

  setPMIP6VisitedDHCP6ServerAddress(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Visited_DHCP6_Server_Address'], value: Buffer.from(value) });
  },

  deletePMIP6VisitedDHCP6ServerAddress(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Visited_DHCP6_Server_Address']);
  },

  getAllPMIP6VisitedDHCP6ServerAddress(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Visited_DHCP6_Server_Address']).map(avp => avp.value);
  },

  getPMIP6VisitedDHCP6ServerAddressString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6VisitedDHCP6ServerAddress(packet);
    return value?.toString('utf8');
  },

  getPMIP6HomeIPv4Gateway(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Home_IPv4_Gateway']);
    return avp?.value;
  },

  setPMIP6HomeIPv4Gateway(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Home_IPv4_Gateway'], value: Buffer.from(value) });
  },

  deletePMIP6HomeIPv4Gateway(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Home_IPv4_Gateway']);
  },

  getAllPMIP6HomeIPv4Gateway(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Home_IPv4_Gateway']).map(avp => avp.value);
  },

  getPMIP6HomeIPv4GatewayString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6HomeIPv4Gateway(packet);
    return value?.toString('utf8');
  },

  getPMIP6VisitedIPv4Gateway(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6572AttributeTypes['PMIP6_Visited_IPv4_Gateway']);
    return avp?.value;
  },

  setPMIP6VisitedIPv4Gateway(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6572AttributeTypes['PMIP6_Visited_IPv4_Gateway'], value: Buffer.from(value) });
  },

  deletePMIP6VisitedIPv4Gateway(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6572AttributeTypes['PMIP6_Visited_IPv4_Gateway']);
  },

  getAllPMIP6VisitedIPv4Gateway(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6572AttributeTypes['PMIP6_Visited_IPv4_Gateway']).map(avp => avp.value);
  },

  getPMIP6VisitedIPv4GatewayString(packet: RadiusPacket): string | undefined {
    const value = this.getPMIP6VisitedIPv4Gateway(packet);
    return value?.toString('utf8');
  },

};
