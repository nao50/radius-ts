// Generated from dictionary.rfc2865
import { RadiusPacket } from "../packet.js";

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
    return packet.getAttribute(rfc2865AttributeTypes['User_Name']);
  },

  setUserName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['User_Name'], value);
  },

  deleteUserName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['User_Name']);
  },

  getAllUserName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['User_Name']);
  },

  getUserNameString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['User_Name']);
    return value?.toString('utf8');
  },

  getUserPassword(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['User_Password']);
  },

  setUserPassword(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['User_Password'], value);
  },

  deleteUserPassword(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['User_Password']);
  },

  getAllUserPassword(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['User_Password']);
  },

  getUserPasswordString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['User_Password']);
    return value?.toString('utf8');
  },

  getCHAPPassword(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['CHAP_Password']);
  },

  setCHAPPassword(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['CHAP_Password'], value);
  },

  deleteCHAPPassword(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['CHAP_Password']);
  },

  getAllCHAPPassword(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['CHAP_Password']);
  },

  getCHAPPasswordString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['CHAP_Password']);
    return value?.toString('utf8');
  },

  getNASIPAddress(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['NAS_IP_Address']);
  },

  setNASIPAddress(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['NAS_IP_Address'], value);
  },

  deleteNASIPAddress(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['NAS_IP_Address']);
  },

  getAllNASIPAddress(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['NAS_IP_Address']);
  },

  getNASIPAddressString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['NAS_IP_Address']);
    return value?.toString('utf8');
  },

  getNASPort(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['NAS_Port']);
  },

  setNASPort(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['NAS_Port'], value);
  },

  deleteNASPort(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['NAS_Port']);
  },

  getAllNASPort(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['NAS_Port']);
  },

  getNASPortString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['NAS_Port']);
    return value?.toString('utf8');
  },

  getServiceType(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Service_Type']);
  },

  setServiceType(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Service_Type'], value);
  },

  deleteServiceType(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Service_Type']);
  },

  getAllServiceType(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Service_Type']);
  },

  getServiceTypeString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Service_Type']);
    return value?.toString('utf8');
  },

  getFramedProtocol(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Framed_Protocol']);
  },

  setFramedProtocol(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Framed_Protocol'], value);
  },

  deleteFramedProtocol(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_Protocol']);
  },

  getAllFramedProtocol(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_Protocol']);
  },

  getFramedProtocolString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Framed_Protocol']);
    return value?.toString('utf8');
  },

  getFramedIPAddress(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Framed_IP_Address']);
  },

  setFramedIPAddress(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Framed_IP_Address'], value);
  },

  deleteFramedIPAddress(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_IP_Address']);
  },

  getAllFramedIPAddress(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_IP_Address']);
  },

  getFramedIPAddressString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Framed_IP_Address']);
    return value?.toString('utf8');
  },

  getFramedIPNetmask(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Framed_IP_Netmask']);
  },

  setFramedIPNetmask(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Framed_IP_Netmask'], value);
  },

  deleteFramedIPNetmask(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_IP_Netmask']);
  },

  getAllFramedIPNetmask(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_IP_Netmask']);
  },

  getFramedIPNetmaskString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Framed_IP_Netmask']);
    return value?.toString('utf8');
  },

  getFramedRouting(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Framed_Routing']);
  },

  setFramedRouting(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Framed_Routing'], value);
  },

  deleteFramedRouting(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_Routing']);
  },

  getAllFramedRouting(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_Routing']);
  },

  getFramedRoutingString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Framed_Routing']);
    return value?.toString('utf8');
  },

  getFilterId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Filter_Id']);
  },

  setFilterId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Filter_Id'], value);
  },

  deleteFilterId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Filter_Id']);
  },

  getAllFilterId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Filter_Id']);
  },

  getFilterIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Filter_Id']);
    return value?.toString('utf8');
  },

  getFramedMTU(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Framed_MTU']);
  },

  setFramedMTU(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Framed_MTU'], value);
  },

  deleteFramedMTU(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_MTU']);
  },

  getAllFramedMTU(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_MTU']);
  },

  getFramedMTUString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Framed_MTU']);
    return value?.toString('utf8');
  },

  getFramedCompression(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Framed_Compression']);
  },

  setFramedCompression(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Framed_Compression'], value);
  },

  deleteFramedCompression(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_Compression']);
  },

  getAllFramedCompression(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_Compression']);
  },

  getFramedCompressionString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Framed_Compression']);
    return value?.toString('utf8');
  },

  getLoginIPHost(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Login_IP_Host']);
  },

  setLoginIPHost(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Login_IP_Host'], value);
  },

  deleteLoginIPHost(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Login_IP_Host']);
  },

  getAllLoginIPHost(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Login_IP_Host']);
  },

  getLoginIPHostString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Login_IP_Host']);
    return value?.toString('utf8');
  },

  getLoginService(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Login_Service']);
  },

  setLoginService(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Login_Service'], value);
  },

  deleteLoginService(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Login_Service']);
  },

  getAllLoginService(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Login_Service']);
  },

  getLoginServiceString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Login_Service']);
    return value?.toString('utf8');
  },

  getLoginTCPPort(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Login_TCP_Port']);
  },

  setLoginTCPPort(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Login_TCP_Port'], value);
  },

  deleteLoginTCPPort(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Login_TCP_Port']);
  },

  getAllLoginTCPPort(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Login_TCP_Port']);
  },

  getLoginTCPPortString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Login_TCP_Port']);
    return value?.toString('utf8');
  },

  getReplyMessage(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Reply_Message']);
  },

  setReplyMessage(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Reply_Message'], value);
  },

  deleteReplyMessage(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Reply_Message']);
  },

  getAllReplyMessage(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Reply_Message']);
  },

  getReplyMessageString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Reply_Message']);
    return value?.toString('utf8');
  },

  getCallbackNumber(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Callback_Number']);
  },

  setCallbackNumber(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Callback_Number'], value);
  },

  deleteCallbackNumber(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Callback_Number']);
  },

  getAllCallbackNumber(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Callback_Number']);
  },

  getCallbackNumberString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Callback_Number']);
    return value?.toString('utf8');
  },

  getCallbackId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Callback_Id']);
  },

  setCallbackId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Callback_Id'], value);
  },

  deleteCallbackId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Callback_Id']);
  },

  getAllCallbackId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Callback_Id']);
  },

  getCallbackIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Callback_Id']);
    return value?.toString('utf8');
  },

  getFramedRoute(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Framed_Route']);
  },

  setFramedRoute(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Framed_Route'], value);
  },

  deleteFramedRoute(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_Route']);
  },

  getAllFramedRoute(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_Route']);
  },

  getFramedRouteString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Framed_Route']);
    return value?.toString('utf8');
  },

  getFramedIPXNetwork(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Framed_IPX_Network']);
  },

  setFramedIPXNetwork(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Framed_IPX_Network'], value);
  },

  deleteFramedIPXNetwork(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_IPX_Network']);
  },

  getAllFramedIPXNetwork(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_IPX_Network']);
  },

  getFramedIPXNetworkString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Framed_IPX_Network']);
    return value?.toString('utf8');
  },

  getState(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['State']);
  },

  setState(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['State'], value);
  },

  deleteState(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['State']);
  },

  getAllState(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['State']);
  },

  getStateString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['State']);
    return value?.toString('utf8');
  },

  getClass(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Class']);
  },

  setClass(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Class'], value);
  },

  deleteClass(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Class']);
  },

  getAllClass(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Class']);
  },

  getClassString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Class']);
    return value?.toString('utf8');
  },

  getVendorSpecific(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Vendor_Specific']);
  },

  setVendorSpecific(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Vendor_Specific'], value);
  },

  deleteVendorSpecific(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Vendor_Specific']);
  },

  getAllVendorSpecific(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Vendor_Specific']);
  },

  getVendorSpecificString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Vendor_Specific']);
    return value?.toString('utf8');
  },

  getSessionTimeout(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Session_Timeout']);
  },

  setSessionTimeout(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Session_Timeout'], value);
  },

  deleteSessionTimeout(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Session_Timeout']);
  },

  getAllSessionTimeout(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Session_Timeout']);
  },

  getSessionTimeoutString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Session_Timeout']);
    return value?.toString('utf8');
  },

  getIdleTimeout(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Idle_Timeout']);
  },

  setIdleTimeout(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Idle_Timeout'], value);
  },

  deleteIdleTimeout(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Idle_Timeout']);
  },

  getAllIdleTimeout(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Idle_Timeout']);
  },

  getIdleTimeoutString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Idle_Timeout']);
    return value?.toString('utf8');
  },

  getTerminationAction(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Termination_Action']);
  },

  setTerminationAction(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Termination_Action'], value);
  },

  deleteTerminationAction(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Termination_Action']);
  },

  getAllTerminationAction(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Termination_Action']);
  },

  getTerminationActionString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Termination_Action']);
    return value?.toString('utf8');
  },

  getCalledStationId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Called_Station_Id']);
  },

  setCalledStationId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Called_Station_Id'], value);
  },

  deleteCalledStationId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Called_Station_Id']);
  },

  getAllCalledStationId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Called_Station_Id']);
  },

  getCalledStationIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Called_Station_Id']);
    return value?.toString('utf8');
  },

  getCallingStationId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Calling_Station_Id']);
  },

  setCallingStationId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Calling_Station_Id'], value);
  },

  deleteCallingStationId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Calling_Station_Id']);
  },

  getAllCallingStationId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Calling_Station_Id']);
  },

  getCallingStationIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Calling_Station_Id']);
    return value?.toString('utf8');
  },

  getNASIdentifier(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['NAS_Identifier']);
  },

  setNASIdentifier(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['NAS_Identifier'], value);
  },

  deleteNASIdentifier(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['NAS_Identifier']);
  },

  getAllNASIdentifier(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['NAS_Identifier']);
  },

  getNASIdentifierString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['NAS_Identifier']);
    return value?.toString('utf8');
  },

  getProxyState(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Proxy_State']);
  },

  setProxyState(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Proxy_State'], value);
  },

  deleteProxyState(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Proxy_State']);
  },

  getAllProxyState(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Proxy_State']);
  },

  getProxyStateString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Proxy_State']);
    return value?.toString('utf8');
  },

  getLoginLATService(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Login_LAT_Service']);
  },

  setLoginLATService(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Login_LAT_Service'], value);
  },

  deleteLoginLATService(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Login_LAT_Service']);
  },

  getAllLoginLATService(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Login_LAT_Service']);
  },

  getLoginLATServiceString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Login_LAT_Service']);
    return value?.toString('utf8');
  },

  getLoginLATNode(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Login_LAT_Node']);
  },

  setLoginLATNode(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Login_LAT_Node'], value);
  },

  deleteLoginLATNode(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Login_LAT_Node']);
  },

  getAllLoginLATNode(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Login_LAT_Node']);
  },

  getLoginLATNodeString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Login_LAT_Node']);
    return value?.toString('utf8');
  },

  getLoginLATGroup(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Login_LAT_Group']);
  },

  setLoginLATGroup(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Login_LAT_Group'], value);
  },

  deleteLoginLATGroup(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Login_LAT_Group']);
  },

  getAllLoginLATGroup(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Login_LAT_Group']);
  },

  getLoginLATGroupString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Login_LAT_Group']);
    return value?.toString('utf8');
  },

  getFramedAppleTalkLink(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Link']);
  },

  setFramedAppleTalkLink(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Link'], value);
  },

  deleteFramedAppleTalkLink(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Link']);
  },

  getAllFramedAppleTalkLink(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_AppleTalk_Link']);
  },

  getFramedAppleTalkLinkString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Link']);
    return value?.toString('utf8');
  },

  getFramedAppleTalkNetwork(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Network']);
  },

  setFramedAppleTalkNetwork(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Network'], value);
  },

  deleteFramedAppleTalkNetwork(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Network']);
  },

  getAllFramedAppleTalkNetwork(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_AppleTalk_Network']);
  },

  getFramedAppleTalkNetworkString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Network']);
    return value?.toString('utf8');
  },

  getFramedAppleTalkZone(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Zone']);
  },

  setFramedAppleTalkZone(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Zone'], value);
  },

  deleteFramedAppleTalkZone(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Zone']);
  },

  getAllFramedAppleTalkZone(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Framed_AppleTalk_Zone']);
  },

  getFramedAppleTalkZoneString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Framed_AppleTalk_Zone']);
    return value?.toString('utf8');
  },

  getCHAPChallenge(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['CHAP_Challenge']);
  },

  setCHAPChallenge(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['CHAP_Challenge'], value);
  },

  deleteCHAPChallenge(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['CHAP_Challenge']);
  },

  getAllCHAPChallenge(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['CHAP_Challenge']);
  },

  getCHAPChallengeString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['CHAP_Challenge']);
    return value?.toString('utf8');
  },

  getNASPortType(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['NAS_Port_Type']);
  },

  setNASPortType(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['NAS_Port_Type'], value);
  },

  deleteNASPortType(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['NAS_Port_Type']);
  },

  getAllNASPortType(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['NAS_Port_Type']);
  },

  getNASPortTypeString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['NAS_Port_Type']);
    return value?.toString('utf8');
  },

  getPortLimit(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Port_Limit']);
  },

  setPortLimit(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Port_Limit'], value);
  },

  deletePortLimit(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Port_Limit']);
  },

  getAllPortLimit(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Port_Limit']);
  },

  getPortLimitString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Port_Limit']);
    return value?.toString('utf8');
  },

  getLoginLATPort(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc2865AttributeTypes['Login_LAT_Port']);
  },

  setLoginLATPort(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc2865AttributeTypes['Login_LAT_Port'], value);
  },

  deleteLoginLATPort(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc2865AttributeTypes['Login_LAT_Port']);
  },

  getAllLoginLATPort(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc2865AttributeTypes['Login_LAT_Port']);
  },

  getLoginLATPortString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc2865AttributeTypes['Login_LAT_Port']);
    return value?.toString('utf8');
  },

};
