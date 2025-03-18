// Generated from dictionary.rfc5580
import { RadiusPacket } from "../radius.js";

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
    const avp = packet.getAttribute(rfc5580AttributeTypes['Operator_Name']);
    return avp?.value;
  },

  setOperatorName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5580AttributeTypes['Operator_Name'], value: Buffer.from(value) });
  },

  deleteOperatorName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5580AttributeTypes['Operator_Name']);
  },

  getAllOperatorName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5580AttributeTypes['Operator_Name']).map(avp => avp.value);
  },

  getOperatorNameString(packet: RadiusPacket): string | undefined {
    const value = this.getOperatorName(packet);
    return value?.toString('utf8');
  },

  getLocationInformation(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5580AttributeTypes['Location_Information']);
    return avp?.value;
  },

  setLocationInformation(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5580AttributeTypes['Location_Information'], value: Buffer.from(value) });
  },

  deleteLocationInformation(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5580AttributeTypes['Location_Information']);
  },

  getAllLocationInformation(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5580AttributeTypes['Location_Information']).map(avp => avp.value);
  },

  getLocationInformationString(packet: RadiusPacket): string | undefined {
    const value = this.getLocationInformation(packet);
    return value?.toString('utf8');
  },

  getLocationData(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5580AttributeTypes['Location_Data']);
    return avp?.value;
  },

  setLocationData(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5580AttributeTypes['Location_Data'], value: Buffer.from(value) });
  },

  deleteLocationData(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5580AttributeTypes['Location_Data']);
  },

  getAllLocationData(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5580AttributeTypes['Location_Data']).map(avp => avp.value);
  },

  getLocationDataString(packet: RadiusPacket): string | undefined {
    const value = this.getLocationData(packet);
    return value?.toString('utf8');
  },

  getBasicLocationPolicyRules(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5580AttributeTypes['Basic_Location_Policy_Rules']);
    return avp?.value;
  },

  setBasicLocationPolicyRules(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5580AttributeTypes['Basic_Location_Policy_Rules'], value: Buffer.from(value) });
  },

  deleteBasicLocationPolicyRules(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5580AttributeTypes['Basic_Location_Policy_Rules']);
  },

  getAllBasicLocationPolicyRules(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5580AttributeTypes['Basic_Location_Policy_Rules']).map(avp => avp.value);
  },

  getBasicLocationPolicyRulesString(packet: RadiusPacket): string | undefined {
    const value = this.getBasicLocationPolicyRules(packet);
    return value?.toString('utf8');
  },

  getExtendedLocationPolicyRules(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5580AttributeTypes['Extended_Location_Policy_Rules']);
    return avp?.value;
  },

  setExtendedLocationPolicyRules(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5580AttributeTypes['Extended_Location_Policy_Rules'], value: Buffer.from(value) });
  },

  deleteExtendedLocationPolicyRules(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5580AttributeTypes['Extended_Location_Policy_Rules']);
  },

  getAllExtendedLocationPolicyRules(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5580AttributeTypes['Extended_Location_Policy_Rules']).map(avp => avp.value);
  },

  getExtendedLocationPolicyRulesString(packet: RadiusPacket): string | undefined {
    const value = this.getExtendedLocationPolicyRules(packet);
    return value?.toString('utf8');
  },

  getLocationCapable(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5580AttributeTypes['Location_Capable']);
    return avp?.value;
  },

  setLocationCapable(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5580AttributeTypes['Location_Capable'], value: Buffer.from(value) });
  },

  deleteLocationCapable(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5580AttributeTypes['Location_Capable']);
  },

  getAllLocationCapable(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5580AttributeTypes['Location_Capable']).map(avp => avp.value);
  },

  getLocationCapableString(packet: RadiusPacket): string | undefined {
    const value = this.getLocationCapable(packet);
    return value?.toString('utf8');
  },

  getRequestedLocationInfo(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5580AttributeTypes['Requested_Location_Info']);
    return avp?.value;
  },

  setRequestedLocationInfo(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5580AttributeTypes['Requested_Location_Info'], value: Buffer.from(value) });
  },

  deleteRequestedLocationInfo(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5580AttributeTypes['Requested_Location_Info']);
  },

  getAllRequestedLocationInfo(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5580AttributeTypes['Requested_Location_Info']).map(avp => avp.value);
  },

  getRequestedLocationInfoString(packet: RadiusPacket): string | undefined {
    const value = this.getRequestedLocationInfo(packet);
    return value?.toString('utf8');
  },

};
