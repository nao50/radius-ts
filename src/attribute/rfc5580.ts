// Generated from dictionary.rfc5580
import { RadiusPacket } from "../packet.js";

export const rfc5580AttributeTypes = {
  'Operator_Name': 126,
  'Location_Information': 127,
  'Location_Data': 128,
  'Basic_Location_Policy_Rules': 129,
  'Extended_Location_Policy_Rules': 130,
  'Location_Capable': 131,
  'Requested_Location_Info': 132,
} as const;

export type rfc5580AttributeType = typeof rfc5580AttributeTypes[keyof typeof rfc5580AttributeTypes];

export const rfc5580 = {
  getOperatorName(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5580AttributeTypes['Operator_Name']);
  },

  setOperatorName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5580AttributeTypes['Operator_Name'], value);
  },

  deleteOperatorName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5580AttributeTypes['Operator_Name']);
  },

  getAllOperatorName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5580AttributeTypes['Operator_Name']);
  },

  getOperatorNameString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5580AttributeTypes['Operator_Name']);
    return value?.toString('utf8');
  },

  getLocationInformation(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5580AttributeTypes['Location_Information']);
  },

  setLocationInformation(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5580AttributeTypes['Location_Information'], value);
  },

  deleteLocationInformation(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5580AttributeTypes['Location_Information']);
  },

  getAllLocationInformation(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5580AttributeTypes['Location_Information']);
  },

  getLocationInformationString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5580AttributeTypes['Location_Information']);
    return value?.toString('utf8');
  },

  getLocationData(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5580AttributeTypes['Location_Data']);
  },

  setLocationData(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5580AttributeTypes['Location_Data'], value);
  },

  deleteLocationData(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5580AttributeTypes['Location_Data']);
  },

  getAllLocationData(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5580AttributeTypes['Location_Data']);
  },

  getLocationDataString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5580AttributeTypes['Location_Data']);
    return value?.toString('utf8');
  },

  getBasicLocationPolicyRules(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5580AttributeTypes['Basic_Location_Policy_Rules']);
  },

  setBasicLocationPolicyRules(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5580AttributeTypes['Basic_Location_Policy_Rules'], value);
  },

  deleteBasicLocationPolicyRules(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5580AttributeTypes['Basic_Location_Policy_Rules']);
  },

  getAllBasicLocationPolicyRules(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5580AttributeTypes['Basic_Location_Policy_Rules']);
  },

  getBasicLocationPolicyRulesString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5580AttributeTypes['Basic_Location_Policy_Rules']);
    return value?.toString('utf8');
  },

  getExtendedLocationPolicyRules(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5580AttributeTypes['Extended_Location_Policy_Rules']);
  },

  setExtendedLocationPolicyRules(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5580AttributeTypes['Extended_Location_Policy_Rules'], value);
  },

  deleteExtendedLocationPolicyRules(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5580AttributeTypes['Extended_Location_Policy_Rules']);
  },

  getAllExtendedLocationPolicyRules(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5580AttributeTypes['Extended_Location_Policy_Rules']);
  },

  getExtendedLocationPolicyRulesString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5580AttributeTypes['Extended_Location_Policy_Rules']);
    return value?.toString('utf8');
  },

  getLocationCapable(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5580AttributeTypes['Location_Capable']);
  },

  setLocationCapable(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5580AttributeTypes['Location_Capable'], value);
  },

  deleteLocationCapable(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5580AttributeTypes['Location_Capable']);
  },

  getAllLocationCapable(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5580AttributeTypes['Location_Capable']);
  },

  getLocationCapableString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5580AttributeTypes['Location_Capable']);
    return value?.toString('utf8');
  },

  getRequestedLocationInfo(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5580AttributeTypes['Requested_Location_Info']);
  },

  setRequestedLocationInfo(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5580AttributeTypes['Requested_Location_Info'], value);
  },

  deleteRequestedLocationInfo(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5580AttributeTypes['Requested_Location_Info']);
  },

  getAllRequestedLocationInfo(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5580AttributeTypes['Requested_Location_Info']);
  },

  getRequestedLocationInfoString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5580AttributeTypes['Requested_Location_Info']);
    return value?.toString('utf8');
  },

};
