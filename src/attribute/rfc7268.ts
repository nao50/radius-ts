// Generated from dictionary.rfc7268
import { RadiusPacket } from "../packet.js";

export const rfc7268AttributeTypes = {
  'Allowed_Called_Station_Id': 174,
  'EAP_Peer_Id': 175,
  'EAP_Server_Id': 176,
  'Mobility_Domain_Id': 177,
  'Preauth_Timeout': 178,
  'Network_Id_Name': 179,
  'EAPoL_Announcement': 180,
  'WLAN_HESSID': 181,
  'WLAN_Venue_Info': 182,
  'WLAN_Venue_Language': 183,
  'WLAN_Venue_Name': 184,
  'WLAN_Reason_Code': 185,
  'WLAN_Pairwise_Cipher': 186,
  'WLAN_Group_Cipher': 187,
  'WLAN_AKM_Suite': 188,
  'WLAN_Group_Mgmt_Cipher': 189,
  'WLAN_RF_Band': 190,
} as const;

export type rfc7268AttributeType = typeof rfc7268AttributeTypes[keyof typeof rfc7268AttributeTypes];

export const rfc7268 = {
  getAllowedCalledStationId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['Allowed_Called_Station_Id']);
  },

  setAllowedCalledStationId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['Allowed_Called_Station_Id'], value);
  },

  deleteAllowedCalledStationId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['Allowed_Called_Station_Id']);
  },

  getAllAllowedCalledStationId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['Allowed_Called_Station_Id']);
  },

  getAllowedCalledStationIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['Allowed_Called_Station_Id']);
    return value?.toString('utf8');
  },

  getEAPPeerId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['EAP_Peer_Id']);
  },

  setEAPPeerId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['EAP_Peer_Id'], value);
  },

  deleteEAPPeerId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['EAP_Peer_Id']);
  },

  getAllEAPPeerId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['EAP_Peer_Id']);
  },

  getEAPPeerIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['EAP_Peer_Id']);
    return value?.toString('utf8');
  },

  getEAPServerId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['EAP_Server_Id']);
  },

  setEAPServerId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['EAP_Server_Id'], value);
  },

  deleteEAPServerId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['EAP_Server_Id']);
  },

  getAllEAPServerId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['EAP_Server_Id']);
  },

  getEAPServerIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['EAP_Server_Id']);
    return value?.toString('utf8');
  },

  getMobilityDomainId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['Mobility_Domain_Id']);
  },

  setMobilityDomainId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['Mobility_Domain_Id'], value);
  },

  deleteMobilityDomainId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['Mobility_Domain_Id']);
  },

  getAllMobilityDomainId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['Mobility_Domain_Id']);
  },

  getMobilityDomainIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['Mobility_Domain_Id']);
    return value?.toString('utf8');
  },

  getPreauthTimeout(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['Preauth_Timeout']);
  },

  setPreauthTimeout(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['Preauth_Timeout'], value);
  },

  deletePreauthTimeout(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['Preauth_Timeout']);
  },

  getAllPreauthTimeout(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['Preauth_Timeout']);
  },

  getPreauthTimeoutString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['Preauth_Timeout']);
    return value?.toString('utf8');
  },

  getNetworkIdName(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['Network_Id_Name']);
  },

  setNetworkIdName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['Network_Id_Name'], value);
  },

  deleteNetworkIdName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['Network_Id_Name']);
  },

  getAllNetworkIdName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['Network_Id_Name']);
  },

  getNetworkIdNameString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['Network_Id_Name']);
    return value?.toString('utf8');
  },

  getEAPoLAnnouncement(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['EAPoL_Announcement']);
  },

  setEAPoLAnnouncement(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['EAPoL_Announcement'], value);
  },

  deleteEAPoLAnnouncement(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['EAPoL_Announcement']);
  },

  getAllEAPoLAnnouncement(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['EAPoL_Announcement']);
  },

  getEAPoLAnnouncementString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['EAPoL_Announcement']);
    return value?.toString('utf8');
  },

  getWLANHESSID(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['WLAN_HESSID']);
  },

  setWLANHESSID(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['WLAN_HESSID'], value);
  },

  deleteWLANHESSID(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_HESSID']);
  },

  getAllWLANHESSID(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_HESSID']);
  },

  getWLANHESSIDString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['WLAN_HESSID']);
    return value?.toString('utf8');
  },

  getWLANVenueInfo(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['WLAN_Venue_Info']);
  },

  setWLANVenueInfo(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['WLAN_Venue_Info'], value);
  },

  deleteWLANVenueInfo(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_Venue_Info']);
  },

  getAllWLANVenueInfo(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_Venue_Info']);
  },

  getWLANVenueInfoString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['WLAN_Venue_Info']);
    return value?.toString('utf8');
  },

  getWLANVenueLanguage(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['WLAN_Venue_Language']);
  },

  setWLANVenueLanguage(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['WLAN_Venue_Language'], value);
  },

  deleteWLANVenueLanguage(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_Venue_Language']);
  },

  getAllWLANVenueLanguage(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_Venue_Language']);
  },

  getWLANVenueLanguageString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['WLAN_Venue_Language']);
    return value?.toString('utf8');
  },

  getWLANVenueName(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['WLAN_Venue_Name']);
  },

  setWLANVenueName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['WLAN_Venue_Name'], value);
  },

  deleteWLANVenueName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_Venue_Name']);
  },

  getAllWLANVenueName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_Venue_Name']);
  },

  getWLANVenueNameString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['WLAN_Venue_Name']);
    return value?.toString('utf8');
  },

  getWLANReasonCode(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['WLAN_Reason_Code']);
  },

  setWLANReasonCode(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['WLAN_Reason_Code'], value);
  },

  deleteWLANReasonCode(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_Reason_Code']);
  },

  getAllWLANReasonCode(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_Reason_Code']);
  },

  getWLANReasonCodeString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['WLAN_Reason_Code']);
    return value?.toString('utf8');
  },

  getWLANPairwiseCipher(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['WLAN_Pairwise_Cipher']);
  },

  setWLANPairwiseCipher(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['WLAN_Pairwise_Cipher'], value);
  },

  deleteWLANPairwiseCipher(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_Pairwise_Cipher']);
  },

  getAllWLANPairwiseCipher(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_Pairwise_Cipher']);
  },

  getWLANPairwiseCipherString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['WLAN_Pairwise_Cipher']);
    return value?.toString('utf8');
  },

  getWLANGroupCipher(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['WLAN_Group_Cipher']);
  },

  setWLANGroupCipher(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['WLAN_Group_Cipher'], value);
  },

  deleteWLANGroupCipher(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_Group_Cipher']);
  },

  getAllWLANGroupCipher(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_Group_Cipher']);
  },

  getWLANGroupCipherString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['WLAN_Group_Cipher']);
    return value?.toString('utf8');
  },

  getWLANAKMSuite(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['WLAN_AKM_Suite']);
  },

  setWLANAKMSuite(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['WLAN_AKM_Suite'], value);
  },

  deleteWLANAKMSuite(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_AKM_Suite']);
  },

  getAllWLANAKMSuite(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_AKM_Suite']);
  },

  getWLANAKMSuiteString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['WLAN_AKM_Suite']);
    return value?.toString('utf8');
  },

  getWLANGroupMgmtCipher(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['WLAN_Group_Mgmt_Cipher']);
  },

  setWLANGroupMgmtCipher(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['WLAN_Group_Mgmt_Cipher'], value);
  },

  deleteWLANGroupMgmtCipher(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_Group_Mgmt_Cipher']);
  },

  getAllWLANGroupMgmtCipher(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_Group_Mgmt_Cipher']);
  },

  getWLANGroupMgmtCipherString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['WLAN_Group_Mgmt_Cipher']);
    return value?.toString('utf8');
  },

  getWLANRFBand(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc7268AttributeTypes['WLAN_RF_Band']);
  },

  setWLANRFBand(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc7268AttributeTypes['WLAN_RF_Band'], value);
  },

  deleteWLANRFBand(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_RF_Band']);
  },

  getAllWLANRFBand(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_RF_Band']);
  },

  getWLANRFBandString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc7268AttributeTypes['WLAN_RF_Band']);
    return value?.toString('utf8');
  },

};
