// Generated from dictionary.rfc2869
import { RadiusPacket } from "../packet.js";

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
    return packet.getAttribute(rfc2869AttributeTypes['Acct_Input_Gigawords']);
  },

  setAcctInputGigawords(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['Acct_Input_Gigawords'], value);
  },

  deleteAcctInputGigawords(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Acct_Input_Gigawords']);
  },

  getAllAcctInputGigawords(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Acct_Input_Gigawords']);
  },

  getAcctInputGigawordsString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['Acct_Input_Gigawords']);
    return value?.toString('utf8');
  },

  getAcctOutputGigawords(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['Acct_Output_Gigawords']);
  },

  setAcctOutputGigawords(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['Acct_Output_Gigawords'], value);
  },

  deleteAcctOutputGigawords(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Acct_Output_Gigawords']);
  },

  getAllAcctOutputGigawords(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Acct_Output_Gigawords']);
  },

  getAcctOutputGigawordsString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['Acct_Output_Gigawords']);
    return value?.toString('utf8');
  },

  getEventTimestamp(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['Event_Timestamp']);
  },

  setEventTimestamp(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['Event_Timestamp'], value);
  },

  deleteEventTimestamp(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Event_Timestamp']);
  },

  getAllEventTimestamp(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Event_Timestamp']);
  },

  getEventTimestampString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['Event_Timestamp']);
    return value?.toString('utf8');
  },

  getARAPPassword(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['ARAP_Password']);
  },

  setARAPPassword(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['ARAP_Password'], value);
  },

  deleteARAPPassword(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['ARAP_Password']);
  },

  getAllARAPPassword(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['ARAP_Password']);
  },

  getARAPPasswordString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['ARAP_Password']);
    return value?.toString('utf8');
  },

  getARAPFeatures(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['ARAP_Features']);
  },

  setARAPFeatures(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['ARAP_Features'], value);
  },

  deleteARAPFeatures(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['ARAP_Features']);
  },

  getAllARAPFeatures(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['ARAP_Features']);
  },

  getARAPFeaturesString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['ARAP_Features']);
    return value?.toString('utf8');
  },

  getARAPZoneAccess(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['ARAP_Zone_Access']);
  },

  setARAPZoneAccess(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['ARAP_Zone_Access'], value);
  },

  deleteARAPZoneAccess(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['ARAP_Zone_Access']);
  },

  getAllARAPZoneAccess(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['ARAP_Zone_Access']);
  },

  getARAPZoneAccessString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['ARAP_Zone_Access']);
    return value?.toString('utf8');
  },

  getARAPSecurity(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['ARAP_Security']);
  },

  setARAPSecurity(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['ARAP_Security'], value);
  },

  deleteARAPSecurity(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['ARAP_Security']);
  },

  getAllARAPSecurity(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['ARAP_Security']);
  },

  getARAPSecurityString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['ARAP_Security']);
    return value?.toString('utf8');
  },

  getARAPSecurityData(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['ARAP_Security_Data']);
  },

  setARAPSecurityData(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['ARAP_Security_Data'], value);
  },

  deleteARAPSecurityData(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['ARAP_Security_Data']);
  },

  getAllARAPSecurityData(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['ARAP_Security_Data']);
  },

  getARAPSecurityDataString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['ARAP_Security_Data']);
    return value?.toString('utf8');
  },

  getPasswordRetry(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['Password_Retry']);
  },

  setPasswordRetry(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['Password_Retry'], value);
  },

  deletePasswordRetry(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Password_Retry']);
  },

  getAllPasswordRetry(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Password_Retry']);
  },

  getPasswordRetryString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['Password_Retry']);
    return value?.toString('utf8');
  },

  getPrompt(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['Prompt']);
  },

  setPrompt(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['Prompt'], value);
  },

  deletePrompt(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Prompt']);
  },

  getAllPrompt(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Prompt']);
  },

  getPromptString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['Prompt']);
    return value?.toString('utf8');
  },

  getConnectInfo(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['Connect_Info']);
  },

  setConnectInfo(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['Connect_Info'], value);
  },

  deleteConnectInfo(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Connect_Info']);
  },

  getAllConnectInfo(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Connect_Info']);
  },

  getConnectInfoString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['Connect_Info']);
    return value?.toString('utf8');
  },

  getConfigurationToken(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['Configuration_Token']);
  },

  setConfigurationToken(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['Configuration_Token'], value);
  },

  deleteConfigurationToken(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Configuration_Token']);
  },

  getAllConfigurationToken(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Configuration_Token']);
  },

  getConfigurationTokenString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['Configuration_Token']);
    return value?.toString('utf8');
  },

  getEAPMessage(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['EAP_Message']);
  },

  setEAPMessage(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['EAP_Message'], value);
  },

  deleteEAPMessage(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
  },

  getAllEAPMessage(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['EAP_Message']);
  },

  getEAPMessageString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['EAP_Message']);
    return value?.toString('utf8');
  },

  getMessageAuthenticator(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['Message_Authenticator']);
  },

  setMessageAuthenticator(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['Message_Authenticator'], value);
  },

  deleteMessageAuthenticator(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Message_Authenticator']);
  },

  getAllMessageAuthenticator(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Message_Authenticator']);
  },

  getMessageAuthenticatorString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['Message_Authenticator']);
    return value?.toString('utf8');
  },

  getARAPChallengeResponse(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['ARAP_Challenge_Response']);
  },

  setARAPChallengeResponse(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['ARAP_Challenge_Response'], value);
  },

  deleteARAPChallengeResponse(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['ARAP_Challenge_Response']);
  },

  getAllARAPChallengeResponse(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['ARAP_Challenge_Response']);
  },

  getARAPChallengeResponseString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['ARAP_Challenge_Response']);
    return value?.toString('utf8');
  },

  getAcctInterimInterval(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['Acct_Interim_Interval']);
  },

  setAcctInterimInterval(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['Acct_Interim_Interval'], value);
  },

  deleteAcctInterimInterval(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Acct_Interim_Interval']);
  },

  getAllAcctInterimInterval(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Acct_Interim_Interval']);
  },

  getAcctInterimIntervalString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['Acct_Interim_Interval']);
    return value?.toString('utf8');
  },

  getNASPortId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['NAS_Port_Id']);
  },

  setNASPortId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['NAS_Port_Id'], value);
  },

  deleteNASPortId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['NAS_Port_Id']);
  },

  getAllNASPortId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['NAS_Port_Id']);
  },

  getNASPortIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['NAS_Port_Id']);
    return value?.toString('utf8');
  },

  getFramedPool(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2869AttributeTypes['Framed_Pool']);
  },

  setFramedPool(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2869AttributeTypes['Framed_Pool'], value);
  },

  deleteFramedPool(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2869AttributeTypes['Framed_Pool']);
  },

  getAllFramedPool(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2869AttributeTypes['Framed_Pool']);
  },

  getFramedPoolString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2869AttributeTypes['Framed_Pool']);
    return value?.toString('utf8');
  },

};
