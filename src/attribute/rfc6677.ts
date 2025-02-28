// Generated from dictionary.rfc6677
import { RadiusPacket } from "../packet.js";

export const rfc6677AttributeTypes = {
  'EAP_Lower_Layer': 163,
} as const;

export type rfc6677AttributeType = typeof rfc6677AttributeTypes[keyof typeof rfc6677AttributeTypes];

export const rfc6677 = {
  getEAPLowerLayer(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc6677AttributeTypes['EAP_Lower_Layer']);
  },

  setEAPLowerLayer(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc6677AttributeTypes['EAP_Lower_Layer'], value);
  },

  deleteEAPLowerLayer(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc6677AttributeTypes['EAP_Lower_Layer']);
  },

  getAllEAPLowerLayer(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc6677AttributeTypes['EAP_Lower_Layer']);
  },

  getEAPLowerLayerString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc6677AttributeTypes['EAP_Lower_Layer']);
    return value?.toString('utf8');
  },

};
