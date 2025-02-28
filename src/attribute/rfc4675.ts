// Generated from dictionary.rfc4675
import { RadiusPacket } from "../packet.js";

export const rfc4675AttributeTypes = {
  'Egress_VLANID': 56,
  'Ingress_Filters': 57,
  'Egress_VLAN_Name': 58,
  'User_Priority_Table': 59,
} as const;

export type rfc4675AttributeType = typeof rfc4675AttributeTypes[keyof typeof rfc4675AttributeTypes];

export const rfc4675 = {
  getEgressVLANID(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4675AttributeTypes['Egress_VLANID']);
  },

  setEgressVLANID(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4675AttributeTypes['Egress_VLANID'], value);
  },

  deleteEgressVLANID(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4675AttributeTypes['Egress_VLANID']);
  },

  getAllEgressVLANID(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4675AttributeTypes['Egress_VLANID']);
  },

  getEgressVLANIDString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4675AttributeTypes['Egress_VLANID']);
    return value?.toString('utf8');
  },

  getIngressFilters(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4675AttributeTypes['Ingress_Filters']);
  },

  setIngressFilters(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4675AttributeTypes['Ingress_Filters'], value);
  },

  deleteIngressFilters(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4675AttributeTypes['Ingress_Filters']);
  },

  getAllIngressFilters(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4675AttributeTypes['Ingress_Filters']);
  },

  getIngressFiltersString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4675AttributeTypes['Ingress_Filters']);
    return value?.toString('utf8');
  },

  getEgressVLANName(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4675AttributeTypes['Egress_VLAN_Name']);
  },

  setEgressVLANName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4675AttributeTypes['Egress_VLAN_Name'], value);
  },

  deleteEgressVLANName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4675AttributeTypes['Egress_VLAN_Name']);
  },

  getAllEgressVLANName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4675AttributeTypes['Egress_VLAN_Name']);
  },

  getEgressVLANNameString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4675AttributeTypes['Egress_VLAN_Name']);
    return value?.toString('utf8');
  },

  getUserPriorityTable(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4675AttributeTypes['User_Priority_Table']);
  },

  setUserPriorityTable(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4675AttributeTypes['User_Priority_Table'], value);
  },

  deleteUserPriorityTable(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4675AttributeTypes['User_Priority_Table']);
  },

  getAllUserPriorityTable(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4675AttributeTypes['User_Priority_Table']);
  },

  getUserPriorityTableString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4675AttributeTypes['User_Priority_Table']);
    return value?.toString('utf8');
  },

};
