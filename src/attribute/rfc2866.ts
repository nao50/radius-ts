// Generated from dictionary.rfc2866
import { RadiusPacket } from "../packet.js";

export const rfc2866AttributeTypes = {
  'Acct_Status_Type': 40,
  'Acct_Delay_Time': 41,
  'Acct_Input_Octets': 42,
  'Acct_Output_Octets': 43,
  'Acct_Session_Id': 44,
  'Acct_Authentic': 45,
  'Acct_Session_Time': 46,
  'Acct_Input_Packets': 47,
  'Acct_Output_Packets': 48,
  'Acct_Terminate_Cause': 49,
  'Acct_Multi_Session_Id': 50,
  'Acct_Link_Count': 51,
} as const;

export type rfc2866AttributeType = typeof rfc2866AttributeTypes[keyof typeof rfc2866AttributeTypes];

export const rfc2866 = {
  getAcctStatusType(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2866AttributeTypes['Acct_Status_Type']);
  },

  setAcctStatusType(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2866AttributeTypes['Acct_Status_Type'], value);
  },

  deleteAcctStatusType(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Status_Type']);
  },

  getAllAcctStatusType(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Status_Type']);
  },

  getAcctStatusTypeString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2866AttributeTypes['Acct_Status_Type']);
    return value?.toString('utf8');
  },

  getAcctDelayTime(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2866AttributeTypes['Acct_Delay_Time']);
  },

  setAcctDelayTime(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2866AttributeTypes['Acct_Delay_Time'], value);
  },

  deleteAcctDelayTime(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Delay_Time']);
  },

  getAllAcctDelayTime(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Delay_Time']);
  },

  getAcctDelayTimeString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2866AttributeTypes['Acct_Delay_Time']);
    return value?.toString('utf8');
  },

  getAcctInputOctets(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2866AttributeTypes['Acct_Input_Octets']);
  },

  setAcctInputOctets(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2866AttributeTypes['Acct_Input_Octets'], value);
  },

  deleteAcctInputOctets(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Input_Octets']);
  },

  getAllAcctInputOctets(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Input_Octets']);
  },

  getAcctInputOctetsString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2866AttributeTypes['Acct_Input_Octets']);
    return value?.toString('utf8');
  },

  getAcctOutputOctets(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2866AttributeTypes['Acct_Output_Octets']);
  },

  setAcctOutputOctets(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2866AttributeTypes['Acct_Output_Octets'], value);
  },

  deleteAcctOutputOctets(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Output_Octets']);
  },

  getAllAcctOutputOctets(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Output_Octets']);
  },

  getAcctOutputOctetsString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2866AttributeTypes['Acct_Output_Octets']);
    return value?.toString('utf8');
  },

  getAcctSessionId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2866AttributeTypes['Acct_Session_Id']);
  },

  setAcctSessionId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2866AttributeTypes['Acct_Session_Id'], value);
  },

  deleteAcctSessionId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Session_Id']);
  },

  getAllAcctSessionId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Session_Id']);
  },

  getAcctSessionIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2866AttributeTypes['Acct_Session_Id']);
    return value?.toString('utf8');
  },

  getAcctAuthentic(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2866AttributeTypes['Acct_Authentic']);
  },

  setAcctAuthentic(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2866AttributeTypes['Acct_Authentic'], value);
  },

  deleteAcctAuthentic(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Authentic']);
  },

  getAllAcctAuthentic(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Authentic']);
  },

  getAcctAuthenticString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2866AttributeTypes['Acct_Authentic']);
    return value?.toString('utf8');
  },

  getAcctSessionTime(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2866AttributeTypes['Acct_Session_Time']);
  },

  setAcctSessionTime(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2866AttributeTypes['Acct_Session_Time'], value);
  },

  deleteAcctSessionTime(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Session_Time']);
  },

  getAllAcctSessionTime(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Session_Time']);
  },

  getAcctSessionTimeString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2866AttributeTypes['Acct_Session_Time']);
    return value?.toString('utf8');
  },

  getAcctInputPackets(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2866AttributeTypes['Acct_Input_Packets']);
  },

  setAcctInputPackets(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2866AttributeTypes['Acct_Input_Packets'], value);
  },

  deleteAcctInputPackets(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Input_Packets']);
  },

  getAllAcctInputPackets(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Input_Packets']);
  },

  getAcctInputPacketsString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2866AttributeTypes['Acct_Input_Packets']);
    return value?.toString('utf8');
  },

  getAcctOutputPackets(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2866AttributeTypes['Acct_Output_Packets']);
  },

  setAcctOutputPackets(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2866AttributeTypes['Acct_Output_Packets'], value);
  },

  deleteAcctOutputPackets(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Output_Packets']);
  },

  getAllAcctOutputPackets(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Output_Packets']);
  },

  getAcctOutputPacketsString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2866AttributeTypes['Acct_Output_Packets']);
    return value?.toString('utf8');
  },

  getAcctTerminateCause(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2866AttributeTypes['Acct_Terminate_Cause']);
  },

  setAcctTerminateCause(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2866AttributeTypes['Acct_Terminate_Cause'], value);
  },

  deleteAcctTerminateCause(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Terminate_Cause']);
  },

  getAllAcctTerminateCause(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Terminate_Cause']);
  },

  getAcctTerminateCauseString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2866AttributeTypes['Acct_Terminate_Cause']);
    return value?.toString('utf8');
  },

  getAcctMultiSessionId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2866AttributeTypes['Acct_Multi_Session_Id']);
  },

  setAcctMultiSessionId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2866AttributeTypes['Acct_Multi_Session_Id'], value);
  },

  deleteAcctMultiSessionId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Multi_Session_Id']);
  },

  getAllAcctMultiSessionId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Multi_Session_Id']);
  },

  getAcctMultiSessionIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2866AttributeTypes['Acct_Multi_Session_Id']);
    return value?.toString('utf8');
  },

  getAcctLinkCount(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2866AttributeTypes['Acct_Link_Count']);
  },

  setAcctLinkCount(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2866AttributeTypes['Acct_Link_Count'], value);
  },

  deleteAcctLinkCount(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Link_Count']);
  },

  getAllAcctLinkCount(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Link_Count']);
  },

  getAcctLinkCountString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2866AttributeTypes['Acct_Link_Count']);
    return value?.toString('utf8');
  },

};
