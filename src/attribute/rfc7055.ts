// Generated from dictionary.rfc7055
import { RadiusPacket } from "../radius-packet.js";

export const rfc7055AttributeTypes = {
  'GSS_Acceptor_Service_Name': 164,
  'GSS_Acceptor_Host_Name': 165,
  'GSS_Acceptor_Service_Specifics': 166,
  'GSS_Acceptor_Realm_Name': 167,
} as const;

export type rfc7055AttributeType = typeof rfc7055AttributeTypes[keyof typeof rfc7055AttributeTypes];

export const rfc7055 = {
  getGSSAcceptorServiceName(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7055AttributeTypes['GSS_Acceptor_Service_Name']);
    return avp?.value;
  },

  setGSSAcceptorServiceName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7055AttributeTypes['GSS_Acceptor_Service_Name'], value: Buffer.from(value) });
  },

  deleteGSSAcceptorServiceName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7055AttributeTypes['GSS_Acceptor_Service_Name']);
  },

  getAllGSSAcceptorServiceName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7055AttributeTypes['GSS_Acceptor_Service_Name']).map(avp => avp.value);
  },

  getGSSAcceptorServiceNameString(packet: RadiusPacket): string | undefined {
    const value = this.getGSSAcceptorServiceName(packet);
    return value?.toString('utf8');
  },

  getGSSAcceptorHostName(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7055AttributeTypes['GSS_Acceptor_Host_Name']);
    return avp?.value;
  },

  setGSSAcceptorHostName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7055AttributeTypes['GSS_Acceptor_Host_Name'], value: Buffer.from(value) });
  },

  deleteGSSAcceptorHostName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7055AttributeTypes['GSS_Acceptor_Host_Name']);
  },

  getAllGSSAcceptorHostName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7055AttributeTypes['GSS_Acceptor_Host_Name']).map(avp => avp.value);
  },

  getGSSAcceptorHostNameString(packet: RadiusPacket): string | undefined {
    const value = this.getGSSAcceptorHostName(packet);
    return value?.toString('utf8');
  },

  getGSSAcceptorServiceSpecifics(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7055AttributeTypes['GSS_Acceptor_Service_Specifics']);
    return avp?.value;
  },

  setGSSAcceptorServiceSpecifics(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7055AttributeTypes['GSS_Acceptor_Service_Specifics'], value: Buffer.from(value) });
  },

  deleteGSSAcceptorServiceSpecifics(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7055AttributeTypes['GSS_Acceptor_Service_Specifics']);
  },

  getAllGSSAcceptorServiceSpecifics(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7055AttributeTypes['GSS_Acceptor_Service_Specifics']).map(avp => avp.value);
  },

  getGSSAcceptorServiceSpecificsString(packet: RadiusPacket): string | undefined {
    const value = this.getGSSAcceptorServiceSpecifics(packet);
    return value?.toString('utf8');
  },

  getGSSAcceptorRealmName(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7055AttributeTypes['GSS_Acceptor_Realm_Name']);
    return avp?.value;
  },

  setGSSAcceptorRealmName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7055AttributeTypes['GSS_Acceptor_Realm_Name'], value: Buffer.from(value) });
  },

  deleteGSSAcceptorRealmName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7055AttributeTypes['GSS_Acceptor_Realm_Name']);
  },

  getAllGSSAcceptorRealmName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7055AttributeTypes['GSS_Acceptor_Realm_Name']).map(avp => avp.value);
  },

  getGSSAcceptorRealmNameString(packet: RadiusPacket): string | undefined {
    const value = this.getGSSAcceptorRealmName(packet);
    return value?.toString('utf8');
  },

};
