// Generated from dictionary.rfc2866
import { RadiusPacket } from "../radius.js";

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
    const avp = packet.getAttribute(rfc2866AttributeTypes['Acct_Status_Type']);
    return avp?.value;
  },

  setAcctStatusType(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2866AttributeTypes['Acct_Status_Type'], value: Buffer.from(value) });
  },

  deleteAcctStatusType(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Status_Type']);
  },

  getAllAcctStatusType(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Status_Type']).map(avp => avp.value);
  },

  getAcctStatusTypeString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctStatusType(packet);
    return value?.toString('utf8');
  },

  getAcctDelayTime(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2866AttributeTypes['Acct_Delay_Time']);
    return avp?.value;
  },

  setAcctDelayTime(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2866AttributeTypes['Acct_Delay_Time'], value: Buffer.from(value) });
  },

  deleteAcctDelayTime(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Delay_Time']);
  },

  getAllAcctDelayTime(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Delay_Time']).map(avp => avp.value);
  },

  getAcctDelayTimeString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctDelayTime(packet);
    return value?.toString('utf8');
  },

  getAcctInputOctets(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2866AttributeTypes['Acct_Input_Octets']);
    return avp?.value;
  },

  setAcctInputOctets(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2866AttributeTypes['Acct_Input_Octets'], value: Buffer.from(value) });
  },

  deleteAcctInputOctets(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Input_Octets']);
  },

  getAllAcctInputOctets(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Input_Octets']).map(avp => avp.value);
  },

  getAcctInputOctetsString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctInputOctets(packet);
    return value?.toString('utf8');
  },

  getAcctOutputOctets(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2866AttributeTypes['Acct_Output_Octets']);
    return avp?.value;
  },

  setAcctOutputOctets(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2866AttributeTypes['Acct_Output_Octets'], value: Buffer.from(value) });
  },

  deleteAcctOutputOctets(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Output_Octets']);
  },

  getAllAcctOutputOctets(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Output_Octets']).map(avp => avp.value);
  },

  getAcctOutputOctetsString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctOutputOctets(packet);
    return value?.toString('utf8');
  },

  getAcctSessionId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2866AttributeTypes['Acct_Session_Id']);
    return avp?.value;
  },

  setAcctSessionId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2866AttributeTypes['Acct_Session_Id'], value: Buffer.from(value) });
  },

  deleteAcctSessionId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Session_Id']);
  },

  getAllAcctSessionId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Session_Id']).map(avp => avp.value);
  },

  getAcctSessionIdString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctSessionId(packet);
    return value?.toString('utf8');
  },

  getAcctAuthentic(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2866AttributeTypes['Acct_Authentic']);
    return avp?.value;
  },

  setAcctAuthentic(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2866AttributeTypes['Acct_Authentic'], value: Buffer.from(value) });
  },

  deleteAcctAuthentic(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Authentic']);
  },

  getAllAcctAuthentic(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Authentic']).map(avp => avp.value);
  },

  getAcctAuthenticString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctAuthentic(packet);
    return value?.toString('utf8');
  },

  getAcctSessionTime(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2866AttributeTypes['Acct_Session_Time']);
    return avp?.value;
  },

  setAcctSessionTime(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2866AttributeTypes['Acct_Session_Time'], value: Buffer.from(value) });
  },

  deleteAcctSessionTime(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Session_Time']);
  },

  getAllAcctSessionTime(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Session_Time']).map(avp => avp.value);
  },

  getAcctSessionTimeString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctSessionTime(packet);
    return value?.toString('utf8');
  },

  getAcctInputPackets(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2866AttributeTypes['Acct_Input_Packets']);
    return avp?.value;
  },

  setAcctInputPackets(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2866AttributeTypes['Acct_Input_Packets'], value: Buffer.from(value) });
  },

  deleteAcctInputPackets(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Input_Packets']);
  },

  getAllAcctInputPackets(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Input_Packets']).map(avp => avp.value);
  },

  getAcctInputPacketsString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctInputPackets(packet);
    return value?.toString('utf8');
  },

  getAcctOutputPackets(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2866AttributeTypes['Acct_Output_Packets']);
    return avp?.value;
  },

  setAcctOutputPackets(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2866AttributeTypes['Acct_Output_Packets'], value: Buffer.from(value) });
  },

  deleteAcctOutputPackets(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Output_Packets']);
  },

  getAllAcctOutputPackets(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Output_Packets']).map(avp => avp.value);
  },

  getAcctOutputPacketsString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctOutputPackets(packet);
    return value?.toString('utf8');
  },

  getAcctTerminateCause(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2866AttributeTypes['Acct_Terminate_Cause']);
    return avp?.value;
  },

  setAcctTerminateCause(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2866AttributeTypes['Acct_Terminate_Cause'], value: Buffer.from(value) });
  },

  deleteAcctTerminateCause(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Terminate_Cause']);
  },

  getAllAcctTerminateCause(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Terminate_Cause']).map(avp => avp.value);
  },

  getAcctTerminateCauseString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctTerminateCause(packet);
    return value?.toString('utf8');
  },

  getAcctMultiSessionId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2866AttributeTypes['Acct_Multi_Session_Id']);
    return avp?.value;
  },

  setAcctMultiSessionId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2866AttributeTypes['Acct_Multi_Session_Id'], value: Buffer.from(value) });
  },

  deleteAcctMultiSessionId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Multi_Session_Id']);
  },

  getAllAcctMultiSessionId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Multi_Session_Id']).map(avp => avp.value);
  },

  getAcctMultiSessionIdString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctMultiSessionId(packet);
    return value?.toString('utf8');
  },

  getAcctLinkCount(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2866AttributeTypes['Acct_Link_Count']);
    return avp?.value;
  },

  setAcctLinkCount(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2866AttributeTypes['Acct_Link_Count'], value: Buffer.from(value) });
  },

  deleteAcctLinkCount(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2866AttributeTypes['Acct_Link_Count']);
  },

  getAllAcctLinkCount(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2866AttributeTypes['Acct_Link_Count']).map(avp => avp.value);
  },

  getAcctLinkCountString(packet: RadiusPacket): string | undefined {
    const value = this.getAcctLinkCount(packet);
    return value?.toString('utf8');
  },

};
