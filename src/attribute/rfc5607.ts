// Generated from dictionary.rfc5607
import { RadiusPacket } from "../packet.js";

export const rfc5607AttributeTypes = {
  'Framed_Management': 133,
  'Management_Transport_Protection': 134,
  'Management_Policy_Id': 135,
  'Management_Privilege_Level': 136,
} as const;

export type rfc5607AttributeType = typeof rfc5607AttributeTypes[keyof typeof rfc5607AttributeTypes];

export const rfc5607 = {
  getFramedManagement(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5607AttributeTypes['Framed_Management']);
  },

  setFramedManagement(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5607AttributeTypes['Framed_Management'], value);
  },

  deleteFramedManagement(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5607AttributeTypes['Framed_Management']);
  },

  getAllFramedManagement(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5607AttributeTypes['Framed_Management']);
  },

  getFramedManagementString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5607AttributeTypes['Framed_Management']);
    return value?.toString('utf8');
  },

  getManagementTransportProtection(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5607AttributeTypes['Management_Transport_Protection']);
  },

  setManagementTransportProtection(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5607AttributeTypes['Management_Transport_Protection'], value);
  },

  deleteManagementTransportProtection(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5607AttributeTypes['Management_Transport_Protection']);
  },

  getAllManagementTransportProtection(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5607AttributeTypes['Management_Transport_Protection']);
  },

  getManagementTransportProtectionString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5607AttributeTypes['Management_Transport_Protection']);
    return value?.toString('utf8');
  },

  getManagementPolicyId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5607AttributeTypes['Management_Policy_Id']);
  },

  setManagementPolicyId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5607AttributeTypes['Management_Policy_Id'], value);
  },

  deleteManagementPolicyId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5607AttributeTypes['Management_Policy_Id']);
  },

  getAllManagementPolicyId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5607AttributeTypes['Management_Policy_Id']);
  },

  getManagementPolicyIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5607AttributeTypes['Management_Policy_Id']);
    return value?.toString('utf8');
  },

  getManagementPrivilegeLevel(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5607AttributeTypes['Management_Privilege_Level']);
  },

  setManagementPrivilegeLevel(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5607AttributeTypes['Management_Privilege_Level'], value);
  },

  deleteManagementPrivilegeLevel(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5607AttributeTypes['Management_Privilege_Level']);
  },

  getAllManagementPrivilegeLevel(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5607AttributeTypes['Management_Privilege_Level']);
  },

  getManagementPrivilegeLevelString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5607AttributeTypes['Management_Privilege_Level']);
    return value?.toString('utf8');
  },

};
