// Generated from dictionary.rfc2865
import { RadiusPacket } from "../radius-packet.js";

export const rfc2865AttributeTypes = {
  'User_Name': 1,
  'User_Password': 2,
  'CHAP_Password': 3,
  'NAS_IP_Address': 4,
  'NAS_Port': 5,
  'Service_Type': 6,
  'Framed_Protocol': 7,
  'Framed_IP_Address': 8,
  'Framed_IP_Netmask': 9,
  'Framed_Routing': 10,
  'Filter_Id': 11,
  'Framed_MTU': 12,
  'Framed_Compression': 13,
  'Login_IP_Host': 14,
  'Login_Service': 15,
  'Login_TCP_Port': 16,
  'Reply_Message': 18,
  'Callback_Number': 19,
  'Callback_Id': 20,
  'Framed_Route': 22,
  'Framed_IPX_Network': 23,
  'State': 24,
  'Class': 25,
  'Vendor_Specific': 26,
  'Session_Timeout': 27,
  'Idle_Timeout': 28,
  'Termination_Action': 29,
  'Called_Station_Id': 30,
  'Calling_Station_Id': 31,
  'NAS_Identifier': 32,
  'Proxy_State': 33,
  'Login_LAT_Service': 34,
  'Login_LAT_Node': 35,
  'Login_LAT_Group': 36,
  'Framed_AppleTalk_Link': 37,
  'Framed_AppleTalk_Network': 38,
  'Framed_AppleTalk_Zone': 39,
  'CHAP_Challenge': 60,
  'NAS_Port_Type': 61,
  'Port_Limit': 62,
  'Login_LAT_Port': 63,
} as const;

export type rfc2865AttributeType = typeof rfc2865AttributeTypes[keyof typeof rfc2865AttributeTypes];

export const rfc2865 = {
  getUserName(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['User_Name']);
    return avp?.value;
  },

  setUserName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['User_Name'], value: Buffer.from(value) });
  },

  deleteUserName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['User_Name']);
  },

  getAllUserName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['User_Name']).map(avp => avp.value);
  },

  getUserNameString(packet: RadiusPacket): string | undefined {
    const value = this.getUserName(packet);
    return value?.toString('utf8');
  },

  getUserPassword(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['User_Password']);
    return avp?.value;
  },

  setUserPassword(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['User_Password'], value: Buffer.from(value) });
  },

  deleteUserPassword(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['User_Password']);
  },

  getAllUserPassword(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['User_Password']).map(avp => avp.value);
  },

  getUserPasswordString(packet: RadiusPacket): string | undefined {
    const value = this.getUserPassword(packet);
    return value?.toString('utf8');
  },

  getCHAPPassword(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['CHAP_Password']);
    return avp?.value;
  },

  setCHAPPassword(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['CHAP_Password'], value: Buffer.from(value) });
  },

  deleteCHAPPassword(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['CHAP_Password']);
  },

  getAllCHAPPassword(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['CHAP_Password']).map(avp => avp.value);
  },

  getCHAPPasswordString(packet: RadiusPacket): string | undefined {
    const value = this.getCHAPPassword(packet);
    return value?.toString('utf8');
  },

  getNASIPAddress(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['NAS_IP_Address']);
    return avp?.value;
  },

  setNASIPAddress(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['NAS_IP_Address'], value: Buffer.from(value) });
  },

  deleteNASIPAddress(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['NAS_IP_Address']);
  },

  getAllNASIPAddress(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['NAS_IP_Address']).map(avp => avp.value);
  },

  getNASIPAddressString(packet: RadiusPacket): string | undefined {
    const value = this.getNASIPAddress(packet);
    return value?.toString('utf8');
  },

  getNASPort(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['NAS_Port']);
    return avp?.value;
  },

  setNASPort(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['NAS_Port'], value: Buffer.from(value) });
  },

  deleteNASPort(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['NAS_Port']);
  },

  getAllNASPort(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['NAS_Port']).map(avp => avp.value);
  },

  getNASPortString(packet: RadiusPacket): string | undefined {
    const value = this.getNASPort(packet);
    return value?.toString('utf8');
  },

  getServiceType(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Service_Type']);
    return avp?.value;
  },

  setServiceType(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Service_Type'], value: Buffer.from(value) });
  },

  deleteServiceType(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Service_Type']);
  },

  getAllServiceType(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Service_Type']).map(avp => avp.value);
  },

  getServiceTypeString(packet: RadiusPacket): string | undefined {
    const value = this.getServiceType(packet);
    return value?.toString('utf8');
  },

  getFramedProtocol(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Framed_Protocol']);
    return avp?.value;
  },

  setFramedProtocol(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Framed_Protocol'], value: Buffer.from(value) });
  },

  deleteFramedProtocol(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_Protocol']);
  },

  getAllFramedProtocol(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_Protocol']).map(avp => avp.value);
  },

  getFramedProtocolString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedProtocol(packet);
    return value?.toString('utf8');
  },

  getFramedIPAddress(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Framed_IP_Address']);
    return avp?.value;
  },

  setFramedIPAddress(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Framed_IP_Address'], value: Buffer.from(value) });
  },

  deleteFramedIPAddress(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_IP_Address']);
  },

  getAllFramedIPAddress(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_IP_Address']).map(avp => avp.value);
  },

  getFramedIPAddressString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedIPAddress(packet);
    return value?.toString('utf8');
  },

  getFramedIPNetmask(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Framed_IP_Netmask']);
    return avp?.value;
  },

  setFramedIPNetmask(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Framed_IP_Netmask'], value: Buffer.from(value) });
  },

  deleteFramedIPNetmask(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_IP_Netmask']);
  },

  getAllFramedIPNetmask(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_IP_Netmask']).map(avp => avp.value);
  },

  getFramedIPNetmaskString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedIPNetmask(packet);
    return value?.toString('utf8');
  },

  getFramedRouting(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Framed_Routing']);
    return avp?.value;
  },

  setFramedRouting(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Framed_Routing'], value: Buffer.from(value) });
  },

  deleteFramedRouting(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_Routing']);
  },

  getAllFramedRouting(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_Routing']).map(avp => avp.value);
  },

  getFramedRoutingString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedRouting(packet);
    return value?.toString('utf8');
  },

  getFilterId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Filter_Id']);
    return avp?.value;
  },

  setFilterId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Filter_Id'], value: Buffer.from(value) });
  },

  deleteFilterId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Filter_Id']);
  },

  getAllFilterId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Filter_Id']).map(avp => avp.value);
  },

  getFilterIdString(packet: RadiusPacket): string | undefined {
    const value = this.getFilterId(packet);
    return value?.toString('utf8');
  },

  getFramedMTU(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Framed_MTU']);
    return avp?.value;
  },

  setFramedMTU(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Framed_MTU'], value: Buffer.from(value) });
  },

  deleteFramedMTU(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_MTU']);
  },

  getAllFramedMTU(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_MTU']).map(avp => avp.value);
  },

  getFramedMTUString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedMTU(packet);
    return value?.toString('utf8');
  },

  getFramedCompression(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Framed_Compression']);
    return avp?.value;
  },

  setFramedCompression(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Framed_Compression'], value: Buffer.from(value) });
  },

  deleteFramedCompression(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_Compression']);
  },

  getAllFramedCompression(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_Compression']).map(avp => avp.value);
  },

  getFramedCompressionString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedCompression(packet);
    return value?.toString('utf8');
  },

  getLoginIPHost(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Login_IP_Host']);
    return avp?.value;
  },

  setLoginIPHost(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Login_IP_Host'], value: Buffer.from(value) });
  },

  deleteLoginIPHost(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Login_IP_Host']);
  },

  getAllLoginIPHost(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Login_IP_Host']).map(avp => avp.value);
  },

  getLoginIPHostString(packet: RadiusPacket): string | undefined {
    const value = this.getLoginIPHost(packet);
    return value?.toString('utf8');
  },

  getLoginService(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Login_Service']);
    return avp?.value;
  },

  setLoginService(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Login_Service'], value: Buffer.from(value) });
  },

  deleteLoginService(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Login_Service']);
  },

  getAllLoginService(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Login_Service']).map(avp => avp.value);
  },

  getLoginServiceString(packet: RadiusPacket): string | undefined {
    const value = this.getLoginService(packet);
    return value?.toString('utf8');
  },

  getLoginTCPPort(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Login_TCP_Port']);
    return avp?.value;
  },

  setLoginTCPPort(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Login_TCP_Port'], value: Buffer.from(value) });
  },

  deleteLoginTCPPort(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Login_TCP_Port']);
  },

  getAllLoginTCPPort(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Login_TCP_Port']).map(avp => avp.value);
  },

  getLoginTCPPortString(packet: RadiusPacket): string | undefined {
    const value = this.getLoginTCPPort(packet);
    return value?.toString('utf8');
  },

  getReplyMessage(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Reply_Message']);
    return avp?.value;
  },

  setReplyMessage(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Reply_Message'], value: Buffer.from(value) });
  },

  deleteReplyMessage(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Reply_Message']);
  },

  getAllReplyMessage(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Reply_Message']).map(avp => avp.value);
  },

  getReplyMessageString(packet: RadiusPacket): string | undefined {
    const value = this.getReplyMessage(packet);
    return value?.toString('utf8');
  },

  getCallbackNumber(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Callback_Number']);
    return avp?.value;
  },

  setCallbackNumber(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Callback_Number'], value: Buffer.from(value) });
  },

  deleteCallbackNumber(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Callback_Number']);
  },

  getAllCallbackNumber(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Callback_Number']).map(avp => avp.value);
  },

  getCallbackNumberString(packet: RadiusPacket): string | undefined {
    const value = this.getCallbackNumber(packet);
    return value?.toString('utf8');
  },

  getCallbackId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Callback_Id']);
    return avp?.value;
  },

  setCallbackId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Callback_Id'], value: Buffer.from(value) });
  },

  deleteCallbackId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Callback_Id']);
  },

  getAllCallbackId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Callback_Id']).map(avp => avp.value);
  },

  getCallbackIdString(packet: RadiusPacket): string | undefined {
    const value = this.getCallbackId(packet);
    return value?.toString('utf8');
  },

  getFramedRoute(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Framed_Route']);
    return avp?.value;
  },

  setFramedRoute(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Framed_Route'], value: Buffer.from(value) });
  },

  deleteFramedRoute(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_Route']);
  },

  getAllFramedRoute(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_Route']).map(avp => avp.value);
  },

  getFramedRouteString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedRoute(packet);
    return value?.toString('utf8');
  },

  getFramedIPXNetwork(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Framed_IPX_Network']);
    return avp?.value;
  },

  setFramedIPXNetwork(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Framed_IPX_Network'], value: Buffer.from(value) });
  },

  deleteFramedIPXNetwork(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_IPX_Network']);
  },

  getAllFramedIPXNetwork(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_IPX_Network']).map(avp => avp.value);
  },

  getFramedIPXNetworkString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedIPXNetwork(packet);
    return value?.toString('utf8');
  },

  getState(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['State']);
    return avp?.value;
  },

  setState(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['State'], value: Buffer.from(value) });
  },

  deleteState(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['State']);
  },

  getAllState(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['State']).map(avp => avp.value);
  },

  getStateString(packet: RadiusPacket): string | undefined {
    const value = this.getState(packet);
    return value?.toString('utf8');
  },

  getClass(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Class']);
    return avp?.value;
  },

  setClass(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Class'], value: Buffer.from(value) });
  },

  deleteClass(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Class']);
  },

  getAllClass(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Class']).map(avp => avp.value);
  },

  getClassString(packet: RadiusPacket): string | undefined {
    const value = this.getClass(packet);
    return value?.toString('utf8');
  },

  getVendorSpecific(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Vendor_Specific']);
    return avp?.value;
  },

  setVendorSpecific(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Vendor_Specific'], value: Buffer.from(value) });
  },

  deleteVendorSpecific(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Vendor_Specific']);
  },

  getAllVendorSpecific(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Vendor_Specific']).map(avp => avp.value);
  },

  getVendorSpecificString(packet: RadiusPacket): string | undefined {
    const value = this.getVendorSpecific(packet);
    return value?.toString('utf8');
  },

  getSessionTimeout(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Session_Timeout']);
    return avp?.value;
  },

  setSessionTimeout(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Session_Timeout'], value: Buffer.from(value) });
  },

  deleteSessionTimeout(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Session_Timeout']);
  },

  getAllSessionTimeout(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Session_Timeout']).map(avp => avp.value);
  },

  getSessionTimeoutString(packet: RadiusPacket): string | undefined {
    const value = this.getSessionTimeout(packet);
    return value?.toString('utf8');
  },

  getIdleTimeout(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Idle_Timeout']);
    return avp?.value;
  },

  setIdleTimeout(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Idle_Timeout'], value: Buffer.from(value) });
  },

  deleteIdleTimeout(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Idle_Timeout']);
  },

  getAllIdleTimeout(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Idle_Timeout']).map(avp => avp.value);
  },

  getIdleTimeoutString(packet: RadiusPacket): string | undefined {
    const value = this.getIdleTimeout(packet);
    return value?.toString('utf8');
  },

  getTerminationAction(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Termination_Action']);
    return avp?.value;
  },

  setTerminationAction(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Termination_Action'], value: Buffer.from(value) });
  },

  deleteTerminationAction(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Termination_Action']);
  },

  getAllTerminationAction(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Termination_Action']).map(avp => avp.value);
  },

  getTerminationActionString(packet: RadiusPacket): string | undefined {
    const value = this.getTerminationAction(packet);
    return value?.toString('utf8');
  },

  getCalledStationId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Called_Station_Id']);
    return avp?.value;
  },

  setCalledStationId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Called_Station_Id'], value: Buffer.from(value) });
  },

  deleteCalledStationId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Called_Station_Id']);
  },

  getAllCalledStationId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Called_Station_Id']).map(avp => avp.value);
  },

  getCalledStationIdString(packet: RadiusPacket): string | undefined {
    const value = this.getCalledStationId(packet);
    return value?.toString('utf8');
  },

  getCallingStationId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Calling_Station_Id']);
    return avp?.value;
  },

  setCallingStationId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Calling_Station_Id'], value: Buffer.from(value) });
  },

  deleteCallingStationId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Calling_Station_Id']);
  },

  getAllCallingStationId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Calling_Station_Id']).map(avp => avp.value);
  },

  getCallingStationIdString(packet: RadiusPacket): string | undefined {
    const value = this.getCallingStationId(packet);
    return value?.toString('utf8');
  },

  getNASIdentifier(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['NAS_Identifier']);
    return avp?.value;
  },

  setNASIdentifier(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['NAS_Identifier'], value: Buffer.from(value) });
  },

  deleteNASIdentifier(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['NAS_Identifier']);
  },

  getAllNASIdentifier(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['NAS_Identifier']).map(avp => avp.value);
  },

  getNASIdentifierString(packet: RadiusPacket): string | undefined {
    const value = this.getNASIdentifier(packet);
    return value?.toString('utf8');
  },

  getProxyState(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Proxy_State']);
    return avp?.value;
  },

  setProxyState(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Proxy_State'], value: Buffer.from(value) });
  },

  deleteProxyState(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Proxy_State']);
  },

  getAllProxyState(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Proxy_State']).map(avp => avp.value);
  },

  getProxyStateString(packet: RadiusPacket): string | undefined {
    const value = this.getProxyState(packet);
    return value?.toString('utf8');
  },

  getLoginLATService(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Login_LAT_Service']);
    return avp?.value;
  },

  setLoginLATService(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Login_LAT_Service'], value: Buffer.from(value) });
  },

  deleteLoginLATService(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Login_LAT_Service']);
  },

  getAllLoginLATService(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Login_LAT_Service']).map(avp => avp.value);
  },

  getLoginLATServiceString(packet: RadiusPacket): string | undefined {
    const value = this.getLoginLATService(packet);
    return value?.toString('utf8');
  },

  getLoginLATNode(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Login_LAT_Node']);
    return avp?.value;
  },

  setLoginLATNode(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Login_LAT_Node'], value: Buffer.from(value) });
  },

  deleteLoginLATNode(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Login_LAT_Node']);
  },

  getAllLoginLATNode(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Login_LAT_Node']).map(avp => avp.value);
  },

  getLoginLATNodeString(packet: RadiusPacket): string | undefined {
    const value = this.getLoginLATNode(packet);
    return value?.toString('utf8');
  },

  getLoginLATGroup(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Login_LAT_Group']);
    return avp?.value;
  },

  setLoginLATGroup(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Login_LAT_Group'], value: Buffer.from(value) });
  },

  deleteLoginLATGroup(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Login_LAT_Group']);
  },

  getAllLoginLATGroup(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Login_LAT_Group']).map(avp => avp.value);
  },

  getLoginLATGroupString(packet: RadiusPacket): string | undefined {
    const value = this.getLoginLATGroup(packet);
    return value?.toString('utf8');
  },

  getFramedAppleTalkLink(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Link']);
    return avp?.value;
  },

  setFramedAppleTalkLink(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Framed_AppleTalk_Link'], value: Buffer.from(value) });
  },

  deleteFramedAppleTalkLink(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Link']);
  },

  getAllFramedAppleTalkLink(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_AppleTalk_Link']).map(avp => avp.value);
  },

  getFramedAppleTalkLinkString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedAppleTalkLink(packet);
    return value?.toString('utf8');
  },

  getFramedAppleTalkNetwork(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Network']);
    return avp?.value;
  },

  setFramedAppleTalkNetwork(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Framed_AppleTalk_Network'], value: Buffer.from(value) });
  },

  deleteFramedAppleTalkNetwork(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Network']);
  },

  getAllFramedAppleTalkNetwork(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_AppleTalk_Network']).map(avp => avp.value);
  },

  getFramedAppleTalkNetworkString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedAppleTalkNetwork(packet);
    return value?.toString('utf8');
  },

  getFramedAppleTalkZone(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Zone']);
    return avp?.value;
  },

  setFramedAppleTalkZone(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Framed_AppleTalk_Zone'], value: Buffer.from(value) });
  },

  deleteFramedAppleTalkZone(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Zone']);
  },

  getAllFramedAppleTalkZone(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_AppleTalk_Zone']).map(avp => avp.value);
  },

  getFramedAppleTalkZoneString(packet: RadiusPacket): string | undefined {
    const value = this.getFramedAppleTalkZone(packet);
    return value?.toString('utf8');
  },

  getCHAPChallenge(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['CHAP_Challenge']);
    return avp?.value;
  },

  setCHAPChallenge(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['CHAP_Challenge'], value: Buffer.from(value) });
  },

  deleteCHAPChallenge(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['CHAP_Challenge']);
  },

  getAllCHAPChallenge(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['CHAP_Challenge']).map(avp => avp.value);
  },

  getCHAPChallengeString(packet: RadiusPacket): string | undefined {
    const value = this.getCHAPChallenge(packet);
    return value?.toString('utf8');
  },

  getNASPortType(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['NAS_Port_Type']);
    return avp?.value;
  },

  setNASPortType(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['NAS_Port_Type'], value: Buffer.from(value) });
  },

  deleteNASPortType(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['NAS_Port_Type']);
  },

  getAllNASPortType(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['NAS_Port_Type']).map(avp => avp.value);
  },

  getNASPortTypeString(packet: RadiusPacket): string | undefined {
    const value = this.getNASPortType(packet);
    return value?.toString('utf8');
  },

  getPortLimit(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Port_Limit']);
    return avp?.value;
  },

  setPortLimit(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Port_Limit'], value: Buffer.from(value) });
  },

  deletePortLimit(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Port_Limit']);
  },

  getAllPortLimit(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Port_Limit']).map(avp => avp.value);
  },

  getPortLimitString(packet: RadiusPacket): string | undefined {
    const value = this.getPortLimit(packet);
    return value?.toString('utf8');
  },

  getLoginLATPort(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc2865AttributeTypes['Login_LAT_Port']);
    return avp?.value;
  },

  setLoginLATPort(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc2865AttributeTypes['Login_LAT_Port'], value: Buffer.from(value) });
  },

  deleteLoginLATPort(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Login_LAT_Port']);
  },

  getAllLoginLATPort(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Login_LAT_Port']).map(avp => avp.value);
  },

  getLoginLATPortString(packet: RadiusPacket): string | undefined {
    const value = this.getLoginLATPort(packet);
    return value?.toString('utf8');
  },

};
