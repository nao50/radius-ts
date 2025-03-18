// Generated from dictionary.rfc5447
import { RadiusPacket } from "../radius.js";

export const rfc5447AttributeTypes = {
  'MIP6_Feature_Vector': 124,
  'MIP6_Home_Link_Prefix': 125,
} as const;

export type rfc5447AttributeType = typeof rfc5447AttributeTypes[keyof typeof rfc5447AttributeTypes];

export const rfc5447 = {
  getMIP6FeatureVector(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5447AttributeTypes['MIP6_Feature_Vector']);
    return avp?.value;
  },

  setMIP6FeatureVector(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5447AttributeTypes['MIP6_Feature_Vector'], value: Buffer.from(value) });
  },

  deleteMIP6FeatureVector(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5447AttributeTypes['MIP6_Feature_Vector']);
  },

  getAllMIP6FeatureVector(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5447AttributeTypes['MIP6_Feature_Vector']).map(avp => avp.value);
  },

  getMIP6FeatureVectorString(packet: RadiusPacket): string | undefined {
    const value = this.getMIP6FeatureVector(packet);
    return value?.toString('utf8');
  },

  getMIP6HomeLinkPrefix(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5447AttributeTypes['MIP6_Home_Link_Prefix']);
    return avp?.value;
  },

  setMIP6HomeLinkPrefix(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5447AttributeTypes['MIP6_Home_Link_Prefix'], value: Buffer.from(value) });
  },

  deleteMIP6HomeLinkPrefix(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5447AttributeTypes['MIP6_Home_Link_Prefix']);
  },

  getAllMIP6HomeLinkPrefix(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5447AttributeTypes['MIP6_Home_Link_Prefix']).map(avp => avp.value);
  },

  getMIP6HomeLinkPrefixString(packet: RadiusPacket): string | undefined {
    const value = this.getMIP6HomeLinkPrefix(packet);
    return value?.toString('utf8');
  },

};
