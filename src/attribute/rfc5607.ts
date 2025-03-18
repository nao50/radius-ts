// Generated from dictionary.rfc5607
import { RadiusPacket } from "../radius.js";

export const rfc5607AttributeTypes = {
  'Framed_Management': 133,
  'Management_Transport_Protection': 134,
  'Management_Policy_Id': 135,
  'Management_Privilege_Level': 136,
} as const;

export type rfc5607AttributeType = typeof rfc5607AttributeTypes[keyof typeof rfc5607AttributeTypes];

export const rfc5607 = {
  getFramedManagement(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5607AttributeTypes['Framed_Management']);
    return avp?.value;
  },

  setFramedManagement(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5607AttributeTypes['Framed_Management'], value: Buffer.from(value) });
  },

  deleteFramedManagement(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5607AttributeTypes['Framed_Management']);
  },

  getAllFramedManagement(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5607AttributeTypes['Framed_Management']).map(avp => avp.value);
  },

  getFramedManagementString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedManagement(packet);
    return value?.toString('utf8');
  },

  getManagementTransportProtection(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5607AttributeTypes['Management_Transport_Protection']);
    return avp?.value;
  },

  setManagementTransportProtection(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5607AttributeTypes['Management_Transport_Protection'], value: Buffer.from(value) });
  },

  deleteManagementTransportProtection(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5607AttributeTypes['Management_Transport_Protection']);
  },

  getAllManagementTransportProtection(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5607AttributeTypes['Management_Transport_Protection']).map(avp => avp.value);
  },

  getManagementTransportProtectionString(packet: RadiusPacket): string | undefined {
    const value = this.getManagementTransportProtection(packet);
    return value?.toString('utf8');
  },

  getManagementPolicyId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5607AttributeTypes['Management_Policy_Id']);
    return avp?.value;
  },

  setManagementPolicyId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5607AttributeTypes['Management_Policy_Id'], value: Buffer.from(value) });
  },

  deleteManagementPolicyId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5607AttributeTypes['Management_Policy_Id']);
  },

  getAllManagementPolicyId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5607AttributeTypes['Management_Policy_Id']).map(avp => avp.value);
  },

  getManagementPolicyIdString(packet: RadiusPacket): string | undefined {
    const value = this.getManagementPolicyId(packet);
    return value?.toString('utf8');
  },

  getManagementPrivilegeLevel(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5607AttributeTypes['Management_Privilege_Level']);
    return avp?.value;
  },

  setManagementPrivilegeLevel(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5607AttributeTypes['Management_Privilege_Level'], value: Buffer.from(value) });
  },

  deleteManagementPrivilegeLevel(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5607AttributeTypes['Management_Privilege_Level']);
  },

  getAllManagementPrivilegeLevel(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5607AttributeTypes['Management_Privilege_Level']).map(avp => avp.value);
  },

  getManagementPrivilegeLevelString(packet: RadiusPacket): string | undefined {
    const value = this.getManagementPrivilegeLevel(packet);
    return value?.toString('utf8');
  },

};
