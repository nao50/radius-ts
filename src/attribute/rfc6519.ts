// Generated from dictionary.rfc6519
import { RadiusPacket } from "../radius-packet.js";

export const rfc6519AttributeTypes = {
  'DS_Lite_Tunnel_Name': 144,
} as const;

export type rfc6519AttributeType = typeof rfc6519AttributeTypes[keyof typeof rfc6519AttributeTypes];

export const rfc6519 = {
  getDSLiteTunnelName(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc6519AttributeTypes['DS_Lite_Tunnel_Name']);
    return avp?.value;
  },

  setDSLiteTunnelName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc6519AttributeTypes['DS_Lite_Tunnel_Name'], value: Buffer.from(value) });
  },

  deleteDSLiteTunnelName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6519AttributeTypes['DS_Lite_Tunnel_Name']);
  },

  getAllDSLiteTunnelName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6519AttributeTypes['DS_Lite_Tunnel_Name']).map(avp => avp.value);
  },

  getDSLiteTunnelNameString(packet: RadiusPacket): string | undefined {
    const value = this.getDSLiteTunnelName(packet);
    return value?.toString('utf8');
  },

};
