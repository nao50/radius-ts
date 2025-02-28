// Generated from dictionary.rfc2868
import { RadiusPacket } from "../packet.js";

export const rfc2868AttributeTypes = {
  'Tunnel_Type': 64,
  'Tunnel_Medium_Type': 65,
  'Tunnel_Client_Endpoint': 66,
  'Tunnel_Server_Endpoint': 67,
  'Tunnel_Password': 69,
  'Tunnel_Private_Group_Id': 81,
  'Tunnel_Assignment_Id': 82,
  'Tunnel_Preference': 83,
  'Tunnel_Client_Auth_Id': 90,
  'Tunnel_Server_Auth_Id': 91,
} as const;

export type rfc2868AttributeType = typeof rfc2868AttributeTypes[keyof typeof rfc2868AttributeTypes];

export const rfc2868 = {
  getTunnelType(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2868AttributeTypes['Tunnel_Type']);
  },

  setTunnelType(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2868AttributeTypes['Tunnel_Type'], value);
  },

  deleteTunnelType(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Type']);
  },

  getAllTunnelType(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Type']);
  },

  getTunnelTypeString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Type']);
    return value?.toString('utf8');
  },

  getTunnelMediumType(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2868AttributeTypes['Tunnel_Medium_Type']);
  },

  setTunnelMediumType(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2868AttributeTypes['Tunnel_Medium_Type'], value);
  },

  deleteTunnelMediumType(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Medium_Type']);
  },

  getAllTunnelMediumType(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Medium_Type']);
  },

  getTunnelMediumTypeString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Medium_Type']);
    return value?.toString('utf8');
  },

  getTunnelClientEndpoint(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2868AttributeTypes['Tunnel_Client_Endpoint']);
  },

  setTunnelClientEndpoint(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2868AttributeTypes['Tunnel_Client_Endpoint'], value);
  },

  deleteTunnelClientEndpoint(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Client_Endpoint']);
  },

  getAllTunnelClientEndpoint(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Client_Endpoint']);
  },

  getTunnelClientEndpointString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Client_Endpoint']);
    return value?.toString('utf8');
  },

  getTunnelServerEndpoint(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2868AttributeTypes['Tunnel_Server_Endpoint']);
  },

  setTunnelServerEndpoint(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2868AttributeTypes['Tunnel_Server_Endpoint'], value);
  },

  deleteTunnelServerEndpoint(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Server_Endpoint']);
  },

  getAllTunnelServerEndpoint(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Server_Endpoint']);
  },

  getTunnelServerEndpointString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Server_Endpoint']);
    return value?.toString('utf8');
  },

  getTunnelPassword(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2868AttributeTypes['Tunnel_Password']);
  },

  setTunnelPassword(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2868AttributeTypes['Tunnel_Password'], value);
  },

  deleteTunnelPassword(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Password']);
  },

  getAllTunnelPassword(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Password']);
  },

  getTunnelPasswordString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Password']);
    return value?.toString('utf8');
  },

  getTunnelPrivateGroupId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2868AttributeTypes['Tunnel_Private_Group_Id']);
  },

  setTunnelPrivateGroupId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2868AttributeTypes['Tunnel_Private_Group_Id'], value);
  },

  deleteTunnelPrivateGroupId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Private_Group_Id']);
  },

  getAllTunnelPrivateGroupId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Private_Group_Id']);
  },

  getTunnelPrivateGroupIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Private_Group_Id']);
    return value?.toString('utf8');
  },

  getTunnelAssignmentId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2868AttributeTypes['Tunnel_Assignment_Id']);
  },

  setTunnelAssignmentId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2868AttributeTypes['Tunnel_Assignment_Id'], value);
  },

  deleteTunnelAssignmentId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Assignment_Id']);
  },

  getAllTunnelAssignmentId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Assignment_Id']);
  },

  getTunnelAssignmentIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Assignment_Id']);
    return value?.toString('utf8');
  },

  getTunnelPreference(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2868AttributeTypes['Tunnel_Preference']);
  },

  setTunnelPreference(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2868AttributeTypes['Tunnel_Preference'], value);
  },

  deleteTunnelPreference(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Preference']);
  },

  getAllTunnelPreference(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Preference']);
  },

  getTunnelPreferenceString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Preference']);
    return value?.toString('utf8');
  },

  getTunnelClientAuthId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2868AttributeTypes['Tunnel_Client_Auth_Id']);
  },

  setTunnelClientAuthId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2868AttributeTypes['Tunnel_Client_Auth_Id'], value);
  },

  deleteTunnelClientAuthId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Client_Auth_Id']);
  },

  getAllTunnelClientAuthId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Client_Auth_Id']);
  },

  getTunnelClientAuthIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Client_Auth_Id']);
    return value?.toString('utf8');
  },

  getTunnelServerAuthId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2868AttributeTypes['Tunnel_Server_Auth_Id']);
  },

  setTunnelServerAuthId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2868AttributeTypes['Tunnel_Server_Auth_Id'], value);
  },

  deleteTunnelServerAuthId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Server_Auth_Id']);
  },

  getAllTunnelServerAuthId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Server_Auth_Id']);
  },

  getTunnelServerAuthIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Server_Auth_Id']);
    return value?.toString('utf8');
  },

};
