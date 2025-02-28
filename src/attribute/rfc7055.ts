// Generated from dictionary.rfc7055
import { RadiusPacket } from "../packet.js";

export const rfc7055AttributeTypes = {
  'GSS_Acceptor_Service_Name': 164,
  'GSS_Acceptor_Host_Name': 165,
  'GSS_Acceptor_Service_Specifics': 166,
  'GSS_Acceptor_Realm_Name': 167,
} as const;

export type rfc7055AttributeType = typeof rfc7055AttributeTypes[keyof typeof rfc7055AttributeTypes];

export const rfc7055 = {
  getGSSAcceptorServiceName(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7055AttributeTypes['GSS_Acceptor_Service_Name']);
  },

  setGSSAcceptorServiceName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7055AttributeTypes['GSS_Acceptor_Service_Name'], value);
  },

  deleteGSSAcceptorServiceName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7055AttributeTypes['GSS_Acceptor_Service_Name']);
  },

  getAllGSSAcceptorServiceName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7055AttributeTypes['GSS_Acceptor_Service_Name']);
  },

  getGSSAcceptorServiceNameString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7055AttributeTypes['GSS_Acceptor_Service_Name']);
    return value?.toString('utf8');
  },

  getGSSAcceptorHostName(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7055AttributeTypes['GSS_Acceptor_Host_Name']);
  },

  setGSSAcceptorHostName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7055AttributeTypes['GSS_Acceptor_Host_Name'], value);
  },

  deleteGSSAcceptorHostName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7055AttributeTypes['GSS_Acceptor_Host_Name']);
  },

  getAllGSSAcceptorHostName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7055AttributeTypes['GSS_Acceptor_Host_Name']);
  },

  getGSSAcceptorHostNameString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7055AttributeTypes['GSS_Acceptor_Host_Name']);
    return value?.toString('utf8');
  },

  getGSSAcceptorServiceSpecifics(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7055AttributeTypes['GSS_Acceptor_Service_Specifics']);
  },

  setGSSAcceptorServiceSpecifics(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7055AttributeTypes['GSS_Acceptor_Service_Specifics'], value);
  },

  deleteGSSAcceptorServiceSpecifics(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7055AttributeTypes['GSS_Acceptor_Service_Specifics']);
  },

  getAllGSSAcceptorServiceSpecifics(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7055AttributeTypes['GSS_Acceptor_Service_Specifics']);
  },

  getGSSAcceptorServiceSpecificsString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7055AttributeTypes['GSS_Acceptor_Service_Specifics']);
    return value?.toString('utf8');
  },

  getGSSAcceptorRealmName(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7055AttributeTypes['GSS_Acceptor_Realm_Name']);
  },

  setGSSAcceptorRealmName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7055AttributeTypes['GSS_Acceptor_Realm_Name'], value);
  },

  deleteGSSAcceptorRealmName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7055AttributeTypes['GSS_Acceptor_Realm_Name']);
  },

  getAllGSSAcceptorRealmName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7055AttributeTypes['GSS_Acceptor_Realm_Name']);
  },

  getGSSAcceptorRealmNameString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7055AttributeTypes['GSS_Acceptor_Realm_Name']);
    return value?.toString('utf8');
  },

};
