// Generated from dictionary.rfc4675
import { RadiusPacket } from "../radius-packet.js";

export const rfc4675AttributeTypes = {
  'Egress_VLANID': 56,
  'Ingress_Filters': 57,
  'Egress_VLAN_Name': 58,
  'User_Priority_Table': 59,
} as const;

export type rfc4675AttributeType = typeof rfc4675AttributeTypes[keyof typeof rfc4675AttributeTypes];

export const rfc4675 = {
  getEgressVLANID(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4675AttributeTypes['Egress_VLANID']);
    return avp?.value;
  },

  setEgressVLANID(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4675AttributeTypes['Egress_VLANID'], value: Buffer.from(value) });
  },

  deleteEgressVLANID(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4675AttributeTypes['Egress_VLANID']);
  },

  getAllEgressVLANID(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4675AttributeTypes['Egress_VLANID']).map(avp => avp.value);
  },

  getEgressVLANIDString(packet: RadiusPacket): string | undefined {
    const value = this.getEgressVLANID(packet);
    return value?.toString('utf8');
  },

  getIngressFilters(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4675AttributeTypes['Ingress_Filters']);
    return avp?.value;
  },

  setIngressFilters(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4675AttributeTypes['Ingress_Filters'], value: Buffer.from(value) });
  },

  deleteIngressFilters(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4675AttributeTypes['Ingress_Filters']);
  },

  getAllIngressFilters(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4675AttributeTypes['Ingress_Filters']).map(avp => avp.value);
  },

  getIngressFiltersString(packet: RadiusPacket): string | undefined {
    const value = this.getIngressFilters(packet);
    return value?.toString('utf8');
  },

  getEgressVLANName(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4675AttributeTypes['Egress_VLAN_Name']);
    return avp?.value;
  },

  setEgressVLANName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4675AttributeTypes['Egress_VLAN_Name'], value: Buffer.from(value) });
  },

  deleteEgressVLANName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4675AttributeTypes['Egress_VLAN_Name']);
  },

  getAllEgressVLANName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4675AttributeTypes['Egress_VLAN_Name']).map(avp => avp.value);
  },

  getEgressVLANNameString(packet: RadiusPacket): string | undefined {
    const value = this.getEgressVLANName(packet);
    return value?.toString('utf8');
  },

  getUserPriorityTable(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4675AttributeTypes['User_Priority_Table']);
    return avp?.value;
  },

  setUserPriorityTable(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4675AttributeTypes['User_Priority_Table'], value: Buffer.from(value) });
  },

  deleteUserPriorityTable(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4675AttributeTypes['User_Priority_Table']);
  },

  getAllUserPriorityTable(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4675AttributeTypes['User_Priority_Table']).map(avp => avp.value);
  },

  getUserPriorityTableString(packet: RadiusPacket): string | undefined {
    const value = this.getUserPriorityTable(packet);
    return value?.toString('utf8');
  },

};
