// Generated from dictionary.rfc2868
import { RadiusPacket } from "../radius-packet.js";

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
    const avp = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Type']);
    return avp?.value;
  },

  setTunnelType(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2868AttributeTypes['Tunnel_Type'], value: Buffer.from(value) });
  },

  deleteTunnelType(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Type']);
  },

  getAllTunnelType(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Type']).map(avp => avp.value);
  },

  getTunnelTypeString(packet: RadiusPacket): string | undefined {
    const value = this.getTunnelType(packet);
    return value?.toString('utf8');
  },

  getTunnelMediumType(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Medium_Type']);
    return avp?.value;
  },

  setTunnelMediumType(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2868AttributeTypes['Tunnel_Medium_Type'], value: Buffer.from(value) });
  },

  deleteTunnelMediumType(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Medium_Type']);
  },

  getAllTunnelMediumType(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Medium_Type']).map(avp => avp.value);
  },

  getTunnelMediumTypeString(packet: RadiusPacket): string | undefined {
    const value = this.getTunnelMediumType(packet);
    return value?.toString('utf8');
  },

  getTunnelClientEndpoint(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Client_Endpoint']);
    return avp?.value;
  },

  setTunnelClientEndpoint(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2868AttributeTypes['Tunnel_Client_Endpoint'], value: Buffer.from(value) });
  },

  deleteTunnelClientEndpoint(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Client_Endpoint']);
  },

  getAllTunnelClientEndpoint(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Client_Endpoint']).map(avp => avp.value);
  },

  getTunnelClientEndpointString(packet: RadiusPacket): string | undefined {
    const value = this.getTunnelClientEndpoint(packet);
    return value?.toString('utf8');
  },

  getTunnelServerEndpoint(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Server_Endpoint']);
    return avp?.value;
  },

  setTunnelServerEndpoint(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2868AttributeTypes['Tunnel_Server_Endpoint'], value: Buffer.from(value) });
  },

  deleteTunnelServerEndpoint(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Server_Endpoint']);
  },

  getAllTunnelServerEndpoint(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Server_Endpoint']).map(avp => avp.value);
  },

  getTunnelServerEndpointString(packet: RadiusPacket): string | undefined {
    const value = this.getTunnelServerEndpoint(packet);
    return value?.toString('utf8');
  },

  getTunnelPassword(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Password']);
    return avp?.value;
  },

  setTunnelPassword(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2868AttributeTypes['Tunnel_Password'], value: Buffer.from(value) });
  },

  deleteTunnelPassword(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Password']);
  },

  getAllTunnelPassword(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Password']).map(avp => avp.value);
  },

  getTunnelPasswordString(packet: RadiusPacket): string | undefined {
    const value = this.getTunnelPassword(packet);
    return value?.toString('utf8');
  },

  getTunnelPrivateGroupId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Private_Group_Id']);
    return avp?.value;
  },

  setTunnelPrivateGroupId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2868AttributeTypes['Tunnel_Private_Group_Id'], value: Buffer.from(value) });
  },

  deleteTunnelPrivateGroupId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Private_Group_Id']);
  },

  getAllTunnelPrivateGroupId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Private_Group_Id']).map(avp => avp.value);
  },

  getTunnelPrivateGroupIdString(packet: RadiusPacket): string | undefined {
    const value = this.getTunnelPrivateGroupId(packet);
    return value?.toString('utf8');
  },

  getTunnelAssignmentId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Assignment_Id']);
    return avp?.value;
  },

  setTunnelAssignmentId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2868AttributeTypes['Tunnel_Assignment_Id'], value: Buffer.from(value) });
  },

  deleteTunnelAssignmentId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Assignment_Id']);
  },

  getAllTunnelAssignmentId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Assignment_Id']).map(avp => avp.value);
  },

  getTunnelAssignmentIdString(packet: RadiusPacket): string | undefined {
    const value = this.getTunnelAssignmentId(packet);
    return value?.toString('utf8');
  },

  getTunnelPreference(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Preference']);
    return avp?.value;
  },

  setTunnelPreference(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2868AttributeTypes['Tunnel_Preference'], value: Buffer.from(value) });
  },

  deleteTunnelPreference(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Preference']);
  },

  getAllTunnelPreference(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Preference']).map(avp => avp.value);
  },

  getTunnelPreferenceString(packet: RadiusPacket): string | undefined {
    const value = this.getTunnelPreference(packet);
    return value?.toString('utf8');
  },

  getTunnelClientAuthId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Client_Auth_Id']);
    return avp?.value;
  },

  setTunnelClientAuthId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2868AttributeTypes['Tunnel_Client_Auth_Id'], value: Buffer.from(value) });
  },

  deleteTunnelClientAuthId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Client_Auth_Id']);
  },

  getAllTunnelClientAuthId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Client_Auth_Id']).map(avp => avp.value);
  },

  getTunnelClientAuthIdString(packet: RadiusPacket): string | undefined {
    const value = this.getTunnelClientAuthId(packet);
    return value?.toString('utf8');
  },

  getTunnelServerAuthId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2868AttributeTypes['Tunnel_Server_Auth_Id']);
    return avp?.value;
  },

  setTunnelServerAuthId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2868AttributeTypes['Tunnel_Server_Auth_Id'], value: Buffer.from(value) });
  },

  deleteTunnelServerAuthId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2868AttributeTypes['Tunnel_Server_Auth_Id']);
  },

  getAllTunnelServerAuthId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2868AttributeTypes['Tunnel_Server_Auth_Id']).map(avp => avp.value);
  },

  getTunnelServerAuthIdString(packet: RadiusPacket): string | undefined {
    const value = this.getTunnelServerAuthId(packet);
    return value?.toString('utf8');
  },

};
