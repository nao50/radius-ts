// Generated from dictionary.rfc5904
import { RadiusPacket } from "../radius-packet.js";

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
    const avp = packet.getAttribute(rfc5904AttributeTypes['PKM_SS_Cert']);
    return avp?.value;
  },

  setPKMSSCert(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5904AttributeTypes['PKM_SS_Cert'], value: Buffer.from(value) });
  },

  deletePKMSSCert(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5904AttributeTypes['PKM_SS_Cert']);
  },

  getAllPKMSSCert(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5904AttributeTypes['PKM_SS_Cert']).map(avp => avp.value);
  },

  getPKMSSCertString(packet: RadiusPacket): string | undefined {
    const value = this.getPKMSSCert(packet);
    return value?.toString('utf8');
  },

  getPKMCACert(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5904AttributeTypes['PKM_CA_Cert']);
    return avp?.value;
  },

  setPKMCACert(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5904AttributeTypes['PKM_CA_Cert'], value: Buffer.from(value) });
  },

  deletePKMCACert(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5904AttributeTypes['PKM_CA_Cert']);
  },

  getAllPKMCACert(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5904AttributeTypes['PKM_CA_Cert']).map(avp => avp.value);
  },

  getPKMCACertString(packet: RadiusPacket): string | undefined {
    const value = this.getPKMCACert(packet);
    return value?.toString('utf8');
  },

  getPKMConfigSettings(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5904AttributeTypes['PKM_Config_Settings']);
    return avp?.value;
  },

  setPKMConfigSettings(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5904AttributeTypes['PKM_Config_Settings'], value: Buffer.from(value) });
  },

  deletePKMConfigSettings(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5904AttributeTypes['PKM_Config_Settings']);
  },

  getAllPKMConfigSettings(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5904AttributeTypes['PKM_Config_Settings']).map(avp => avp.value);
  },

  getPKMConfigSettingsString(packet: RadiusPacket): string | undefined {
    const value = this.getPKMConfigSettings(packet);
    return value?.toString('utf8');
  },

  getPKMCryptosuiteList(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5904AttributeTypes['PKM_Cryptosuite_List']);
    return avp?.value;
  },

  setPKMCryptosuiteList(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5904AttributeTypes['PKM_Cryptosuite_List'], value: Buffer.from(value) });
  },

  deletePKMCryptosuiteList(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5904AttributeTypes['PKM_Cryptosuite_List']);
  },

  getAllPKMCryptosuiteList(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5904AttributeTypes['PKM_Cryptosuite_List']).map(avp => avp.value);
  },

  getPKMCryptosuiteListString(packet: RadiusPacket): string | undefined {
    const value = this.getPKMCryptosuiteList(packet);
    return value?.toString('utf8');
  },

  getPKMSAID(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5904AttributeTypes['PKM_SAID']);
    return avp?.value;
  },

  setPKMSAID(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5904AttributeTypes['PKM_SAID'], value: Buffer.from(value) });
  },

  deletePKMSAID(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5904AttributeTypes['PKM_SAID']);
  },

  getAllPKMSAID(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5904AttributeTypes['PKM_SAID']).map(avp => avp.value);
  },

  getPKMSAIDString(packet: RadiusPacket): string | undefined {
    const value = this.getPKMSAID(packet);
    return value?.toString('utf8');
  },

  getPKMSADescriptor(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5904AttributeTypes['PKM_SA_Descriptor']);
    return avp?.value;
  },

  setPKMSADescriptor(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5904AttributeTypes['PKM_SA_Descriptor'], value: Buffer.from(value) });
  },

  deletePKMSADescriptor(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5904AttributeTypes['PKM_SA_Descriptor']);
  },

  getAllPKMSADescriptor(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5904AttributeTypes['PKM_SA_Descriptor']).map(avp => avp.value);
  },

  getPKMSADescriptorString(packet: RadiusPacket): string | undefined {
    const value = this.getPKMSADescriptor(packet);
    return value?.toString('utf8');
  },

  getPKMAuthKey(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5904AttributeTypes['PKM_Auth_Key']);
    return avp?.value;
  },

  setPKMAuthKey(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5904AttributeTypes['PKM_Auth_Key'], value: Buffer.from(value) });
  },

  deletePKMAuthKey(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5904AttributeTypes['PKM_Auth_Key']);
  },

  getAllPKMAuthKey(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5904AttributeTypes['PKM_Auth_Key']).map(avp => avp.value);
  },

  getPKMAuthKeyString(packet: RadiusPacket): string | undefined {
    const value = this.getPKMAuthKey(packet);
    return value?.toString('utf8');
  },

};
