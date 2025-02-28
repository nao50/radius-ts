// Generated from dictionary.rfc5904
import { RadiusPacket } from "../packet.js";

export const rfc5904AttributeTypes = {
  'PKM_SS_Cert': 137,
  'PKM_CA_Cert': 138,
  'PKM_Config_Settings': 139,
  'PKM_Cryptosuite_List': 140,
  'PKM_SAID': 141,
  'PKM_SA_Descriptor': 142,
  'PKM_Auth_Key': 143,
} as const;

export type rfc5904AttributeType = typeof rfc5904AttributeTypes[keyof typeof rfc5904AttributeTypes];

export const rfc5904 = {
  getPKMSSCert(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5904AttributeTypes['PKM_SS_Cert']);
  },

  setPKMSSCert(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5904AttributeTypes['PKM_SS_Cert'], value);
  },

  deletePKMSSCert(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5904AttributeTypes['PKM_SS_Cert']);
  },

  getAllPKMSSCert(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5904AttributeTypes['PKM_SS_Cert']);
  },

  getPKMSSCertString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5904AttributeTypes['PKM_SS_Cert']);
    return value?.toString('utf8');
  },

  getPKMCACert(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5904AttributeTypes['PKM_CA_Cert']);
  },

  setPKMCACert(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5904AttributeTypes['PKM_CA_Cert'], value);
  },

  deletePKMCACert(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5904AttributeTypes['PKM_CA_Cert']);
  },

  getAllPKMCACert(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5904AttributeTypes['PKM_CA_Cert']);
  },

  getPKMCACertString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5904AttributeTypes['PKM_CA_Cert']);
    return value?.toString('utf8');
  },

  getPKMConfigSettings(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5904AttributeTypes['PKM_Config_Settings']);
  },

  setPKMConfigSettings(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5904AttributeTypes['PKM_Config_Settings'], value);
  },

  deletePKMConfigSettings(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5904AttributeTypes['PKM_Config_Settings']);
  },

  getAllPKMConfigSettings(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5904AttributeTypes['PKM_Config_Settings']);
  },

  getPKMConfigSettingsString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5904AttributeTypes['PKM_Config_Settings']);
    return value?.toString('utf8');
  },

  getPKMCryptosuiteList(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5904AttributeTypes['PKM_Cryptosuite_List']);
  },

  setPKMCryptosuiteList(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5904AttributeTypes['PKM_Cryptosuite_List'], value);
  },

  deletePKMCryptosuiteList(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5904AttributeTypes['PKM_Cryptosuite_List']);
  },

  getAllPKMCryptosuiteList(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5904AttributeTypes['PKM_Cryptosuite_List']);
  },

  getPKMCryptosuiteListString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5904AttributeTypes['PKM_Cryptosuite_List']);
    return value?.toString('utf8');
  },

  getPKMSAID(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5904AttributeTypes['PKM_SAID']);
  },

  setPKMSAID(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5904AttributeTypes['PKM_SAID'], value);
  },

  deletePKMSAID(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5904AttributeTypes['PKM_SAID']);
  },

  getAllPKMSAID(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5904AttributeTypes['PKM_SAID']);
  },

  getPKMSAIDString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5904AttributeTypes['PKM_SAID']);
    return value?.toString('utf8');
  },

  getPKMSADescriptor(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5904AttributeTypes['PKM_SA_Descriptor']);
  },

  setPKMSADescriptor(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5904AttributeTypes['PKM_SA_Descriptor'], value);
  },

  deletePKMSADescriptor(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5904AttributeTypes['PKM_SA_Descriptor']);
  },

  getAllPKMSADescriptor(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5904AttributeTypes['PKM_SA_Descriptor']);
  },

  getPKMSADescriptorString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5904AttributeTypes['PKM_SA_Descriptor']);
    return value?.toString('utf8');
  },

  getPKMAuthKey(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5904AttributeTypes['PKM_Auth_Key']);
  },

  setPKMAuthKey(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5904AttributeTypes['PKM_Auth_Key'], value);
  },

  deletePKMAuthKey(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5904AttributeTypes['PKM_Auth_Key']);
  },

  getAllPKMAuthKey(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5904AttributeTypes['PKM_Auth_Key']);
  },

  getPKMAuthKeyString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5904AttributeTypes['PKM_Auth_Key']);
    return value?.toString('utf8');
  },

};
