// Generated from dictionary.rfc2869
import { RadiusPacket } from "../radius-packet.js";

export const rfc2869AttributeTypes = {
  'Acct_Input_Gigawords': 52,
  'Acct_Output_Gigawords': 53,
  'Event_Timestamp': 55,
  'ARAP_Password': 70,
  'ARAP_Features': 71,
  'ARAP_Zone_Access': 72,
  'ARAP_Security': 73,
  'ARAP_Security_Data': 74,
  'Password_Retry': 75,
  'Prompt': 76,
  'Connect_Info': 77,
  'Configuration_Token': 78,
  'EAP_Message': 79,
  'Message_Authenticator': 80,
  'ARAP_Challenge_Response': 84,
  'Acct_Interim_Interval': 85,
  'NAS_Port_Id': 87,
  'Framed_Pool': 88,
} as const;

export type rfc2869AttributeType = typeof rfc2869AttributeTypes[keyof typeof rfc2869AttributeTypes];

export const rfc2869 = {
  getAcctInputGigawords(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['Acct_Input_Gigawords']);
    return avp?.value;
  },

  setAcctInputGigawords(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['Acct_Input_Gigawords'], value: Buffer.from(value) });
  },

  deleteAcctInputGigawords(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Acct_Input_Gigawords']);
  },

  getAllAcctInputGigawords(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Acct_Input_Gigawords']).map(avp => avp.value);
  },

  getAcctInputGigawordsString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctInputGigawords(packet);
    return value?.toString('utf8');
  },

  getAcctOutputGigawords(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['Acct_Output_Gigawords']);
    return avp?.value;
  },

  setAcctOutputGigawords(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['Acct_Output_Gigawords'], value: Buffer.from(value) });
  },

  deleteAcctOutputGigawords(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Acct_Output_Gigawords']);
  },

  getAllAcctOutputGigawords(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Acct_Output_Gigawords']).map(avp => avp.value);
  },

  getAcctOutputGigawordsString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctOutputGigawords(packet);
    return value?.toString('utf8');
  },

  getEventTimestamp(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['Event_Timestamp']);
    return avp?.value;
  },

  setEventTimestamp(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['Event_Timestamp'], value: Buffer.from(value) });
  },

  deleteEventTimestamp(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Event_Timestamp']);
  },

  getAllEventTimestamp(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Event_Timestamp']).map(avp => avp.value);
  },

  getEventTimestampString(packet: RadiusPacket): string | undefined {
    const value = this.getEventTimestamp(packet);
    return value?.toString('utf8');
  },

  getARAPPassword(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['ARAP_Password']);
    return avp?.value;
  },

  setARAPPassword(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['ARAP_Password'], value: Buffer.from(value) });
  },

  deleteARAPPassword(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['ARAP_Password']);
  },

  getAllARAPPassword(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['ARAP_Password']).map(avp => avp.value);
  },

  getARAPPasswordString(packet: RadiusPacket): string | undefined {
    const value = this.getARAPPassword(packet);
    return value?.toString('utf8');
  },

  getARAPFeatures(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['ARAP_Features']);
    return avp?.value;
  },

  setARAPFeatures(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['ARAP_Features'], value: Buffer.from(value) });
  },

  deleteARAPFeatures(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['ARAP_Features']);
  },

  getAllARAPFeatures(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['ARAP_Features']).map(avp => avp.value);
  },

  getARAPFeaturesString(packet: RadiusPacket): string | undefined {
    const value = this.getARAPFeatures(packet);
    return value?.toString('utf8');
  },

  getARAPZoneAccess(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['ARAP_Zone_Access']);
    return avp?.value;
  },

  setARAPZoneAccess(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['ARAP_Zone_Access'], value: Buffer.from(value) });
  },

  deleteARAPZoneAccess(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['ARAP_Zone_Access']);
  },

  getAllARAPZoneAccess(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['ARAP_Zone_Access']).map(avp => avp.value);
  },

  getARAPZoneAccessString(packet: RadiusPacket): string | undefined {
    const value = this.getARAPZoneAccess(packet);
    return value?.toString('utf8');
  },

  getARAPSecurity(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['ARAP_Security']);
    return avp?.value;
  },

  setARAPSecurity(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['ARAP_Security'], value: Buffer.from(value) });
  },

  deleteARAPSecurity(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['ARAP_Security']);
  },

  getAllARAPSecurity(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['ARAP_Security']).map(avp => avp.value);
  },

  getARAPSecurityString(packet: RadiusPacket): string | undefined {
    const value = this.getARAPSecurity(packet);
    return value?.toString('utf8');
  },

  getARAPSecurityData(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['ARAP_Security_Data']);
    return avp?.value;
  },

  setARAPSecurityData(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['ARAP_Security_Data'], value: Buffer.from(value) });
  },

  deleteARAPSecurityData(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['ARAP_Security_Data']);
  },

  getAllARAPSecurityData(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['ARAP_Security_Data']).map(avp => avp.value);
  },

  getARAPSecurityDataString(packet: RadiusPacket): string | undefined {
    const value = this.getARAPSecurityData(packet);
    return value?.toString('utf8');
  },

  getPasswordRetry(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['Password_Retry']);
    return avp?.value;
  },

  setPasswordRetry(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['Password_Retry'], value: Buffer.from(value) });
  },

  deletePasswordRetry(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Password_Retry']);
  },

  getAllPasswordRetry(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Password_Retry']).map(avp => avp.value);
  },

  getPasswordRetryString(packet: RadiusPacket): string | undefined {
    const value = this.getPasswordRetry(packet);
    return value?.toString('utf8');
  },

  getPrompt(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['Prompt']);
    return avp?.value;
  },

  setPrompt(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['Prompt'], value: Buffer.from(value) });
  },

  deletePrompt(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Prompt']);
  },

  getAllPrompt(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Prompt']).map(avp => avp.value);
  },

  getPromptString(packet: RadiusPacket): string | undefined {
    const value = this.getPrompt(packet);
    return value?.toString('utf8');
  },

  getConnectInfo(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['Connect_Info']);
    return avp?.value;
  },

  setConnectInfo(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['Connect_Info'], value: Buffer.from(value) });
  },

  deleteConnectInfo(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Connect_Info']);
  },

  getAllConnectInfo(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Connect_Info']).map(avp => avp.value);
  },

  getConnectInfoString(packet: RadiusPacket): string | undefined {
    const value = this.getConnectInfo(packet);
    return value?.toString('utf8');
  },

  getConfigurationToken(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['Configuration_Token']);
    return avp?.value;
  },

  setConfigurationToken(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['Configuration_Token'], value: Buffer.from(value) });
  },

  deleteConfigurationToken(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Configuration_Token']);
  },

  getAllConfigurationToken(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Configuration_Token']).map(avp => avp.value);
  },

  getConfigurationTokenString(packet: RadiusPacket): string | undefined {
    const value = this.getConfigurationToken(packet);
    return value?.toString('utf8');
  },

  getEAPMessage(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['EAP_Message']);
    return avp?.value;
  },

  setEAPMessage(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: Buffer.from(value) });
  },

  deleteEAPMessage(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
  },

  getAllEAPMessage(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['EAP_Message']).map(avp => avp.value);
  },

  getEAPMessageString(packet: RadiusPacket): string | undefined {
    const value = this.getEAPMessage(packet);
    return value?.toString('utf8');
  },

  getMessageAuthenticator(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['Message_Authenticator']);
    return avp?.value;
  },

  setMessageAuthenticator(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['Message_Authenticator'], value: Buffer.from(value) });
  },

  deleteMessageAuthenticator(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Message_Authenticator']);
  },

  getAllMessageAuthenticator(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Message_Authenticator']).map(avp => avp.value);
  },

  getMessageAuthenticatorString(packet: RadiusPacket): string | undefined {
    const value = this.getMessageAuthenticator(packet);
    return value?.toString('utf8');
  },

  getARAPChallengeResponse(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['ARAP_Challenge_Response']);
    return avp?.value;
  },

  setARAPChallengeResponse(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['ARAP_Challenge_Response'], value: Buffer.from(value) });
  },

  deleteARAPChallengeResponse(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['ARAP_Challenge_Response']);
  },

  getAllARAPChallengeResponse(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['ARAP_Challenge_Response']).map(avp => avp.value);
  },

  getARAPChallengeResponseString(packet: RadiusPacket): string | undefined {
    const value = this.getARAPChallengeResponse(packet);
    return value?.toString('utf8');
  },

  getAcctInterimInterval(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['Acct_Interim_Interval']);
    return avp?.value;
  },

  setAcctInterimInterval(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['Acct_Interim_Interval'], value: Buffer.from(value) });
  },

  deleteAcctInterimInterval(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Acct_Interim_Interval']);
  },

  getAllAcctInterimInterval(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Acct_Interim_Interval']).map(avp => avp.value);
  },

  getAcctInterimIntervalString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctInterimInterval(packet);
    return value?.toString('utf8');
  },

  getNASPortId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['NAS_Port_Id']);
    return avp?.value;
  },

  setNASPortId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['NAS_Port_Id'], value: Buffer.from(value) });
  },

  deleteNASPortId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['NAS_Port_Id']);
  },

  getAllNASPortId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['NAS_Port_Id']).map(avp => avp.value);
  },

  getNASPortIdString(packet: RadiusPacket): string | undefined {
    const value = this.getNASPortId(packet);
    return value?.toString('utf8');
  },

  getFramedPool(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2869AttributeTypes['Framed_Pool']);
    return avp?.value;
  },

  setFramedPool(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2869AttributeTypes['Framed_Pool'], value: Buffer.from(value) });
  },

  deleteFramedPool(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Framed_Pool']);
  },

  getAllFramedPool(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Framed_Pool']).map(avp => avp.value);
  },

  getFramedPoolString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedPool(packet);
    return value?.toString('utf8');
  },

};
