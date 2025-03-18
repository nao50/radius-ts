// Generated from dictionary.rfc7268
import { RadiusPacket } from "../radius.js";

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
    const avp = packet.getAttribute(rfc7268AttributeTypes['Allowed_Called_Station_Id']);
    return avp?.value;
  },

  setAllowedCalledStationId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['Allowed_Called_Station_Id'], value: Buffer.from(value) });
  },

  deleteAllowedCalledStationId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['Allowed_Called_Station_Id']);
  },

  getAllAllowedCalledStationId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['Allowed_Called_Station_Id']).map(avp => avp.value);
  },

  getAllowedCalledStationIdString(packet: RadiusPacket): string | undefined {
    const value = this.getAllowedCalledStationId(packet);
    return value?.toString('utf8');
  },

  getEAPPeerId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['EAP_Peer_Id']);
    return avp?.value;
  },

  setEAPPeerId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['EAP_Peer_Id'], value: Buffer.from(value) });
  },

  deleteEAPPeerId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['EAP_Peer_Id']);
  },

  getAllEAPPeerId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['EAP_Peer_Id']).map(avp => avp.value);
  },

  getEAPPeerIdString(packet: RadiusPacket): string | undefined {
    const value = this.getEAPPeerId(packet);
    return value?.toString('utf8');
  },

  getEAPServerId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['EAP_Server_Id']);
    return avp?.value;
  },

  setEAPServerId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['EAP_Server_Id'], value: Buffer.from(value) });
  },

  deleteEAPServerId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['EAP_Server_Id']);
  },

  getAllEAPServerId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['EAP_Server_Id']).map(avp => avp.value);
  },

  getEAPServerIdString(packet: RadiusPacket): string | undefined {
    const value = this.getEAPServerId(packet);
    return value?.toString('utf8');
  },

  getMobilityDomainId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['Mobility_Domain_Id']);
    return avp?.value;
  },

  setMobilityDomainId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['Mobility_Domain_Id'], value: Buffer.from(value) });
  },

  deleteMobilityDomainId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['Mobility_Domain_Id']);
  },

  getAllMobilityDomainId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['Mobility_Domain_Id']).map(avp => avp.value);
  },

  getMobilityDomainIdString(packet: RadiusPacket): string | undefined {
    const value = this.getMobilityDomainId(packet);
    return value?.toString('utf8');
  },

  getPreauthTimeout(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['Preauth_Timeout']);
    return avp?.value;
  },

  setPreauthTimeout(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['Preauth_Timeout'], value: Buffer.from(value) });
  },

  deletePreauthTimeout(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['Preauth_Timeout']);
  },

  getAllPreauthTimeout(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['Preauth_Timeout']).map(avp => avp.value);
  },

  getPreauthTimeoutString(packet: RadiusPacket): string | undefined {
    const value = this.getPreauthTimeout(packet);
    return value?.toString('utf8');
  },

  getNetworkIdName(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['Network_Id_Name']);
    return avp?.value;
  },

  setNetworkIdName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['Network_Id_Name'], value: Buffer.from(value) });
  },

  deleteNetworkIdName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['Network_Id_Name']);
  },

  getAllNetworkIdName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['Network_Id_Name']).map(avp => avp.value);
  },

  getNetworkIdNameString(packet: RadiusPacket): string | undefined {
    const value = this.getNetworkIdName(packet);
    return value?.toString('utf8');
  },

  getEAPoLAnnouncement(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['EAPoL_Announcement']);
    return avp?.value;
  },

  setEAPoLAnnouncement(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['EAPoL_Announcement'], value: Buffer.from(value) });
  },

  deleteEAPoLAnnouncement(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['EAPoL_Announcement']);
  },

  getAllEAPoLAnnouncement(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['EAPoL_Announcement']).map(avp => avp.value);
  },

  getEAPoLAnnouncementString(packet: RadiusPacket): string | undefined {
    const value = this.getEAPoLAnnouncement(packet);
    return value?.toString('utf8');
  },

  getWLANHESSID(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['WLAN_HESSID']);
    return avp?.value;
  },

  setWLANHESSID(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['WLAN_HESSID'], value: Buffer.from(value) });
  },

  deleteWLANHESSID(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_HESSID']);
  },

  getAllWLANHESSID(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_HESSID']).map(avp => avp.value);
  },

  getWLANHESSIDString(packet: RadiusPacket): string | undefined {
    const value = this.getWLANHESSID(packet);
    return value?.toString('utf8');
  },

  getWLANVenueInfo(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['WLAN_Venue_Info']);
    return avp?.value;
  },

  setWLANVenueInfo(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['WLAN_Venue_Info'], value: Buffer.from(value) });
  },

  deleteWLANVenueInfo(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_Venue_Info']);
  },

  getAllWLANVenueInfo(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_Venue_Info']).map(avp => avp.value);
  },

  getWLANVenueInfoString(packet: RadiusPacket): string | undefined {
    const value = this.getWLANVenueInfo(packet);
    return value?.toString('utf8');
  },

  getWLANVenueLanguage(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['WLAN_Venue_Language']);
    return avp?.value;
  },

  setWLANVenueLanguage(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['WLAN_Venue_Language'], value: Buffer.from(value) });
  },

  deleteWLANVenueLanguage(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_Venue_Language']);
  },

  getAllWLANVenueLanguage(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_Venue_Language']).map(avp => avp.value);
  },

  getWLANVenueLanguageString(packet: RadiusPacket): string | undefined {
    const value = this.getWLANVenueLanguage(packet);
    return value?.toString('utf8');
  },

  getWLANVenueName(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['WLAN_Venue_Name']);
    return avp?.value;
  },

  setWLANVenueName(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['WLAN_Venue_Name'], value: Buffer.from(value) });
  },

  deleteWLANVenueName(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_Venue_Name']);
  },

  getAllWLANVenueName(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_Venue_Name']).map(avp => avp.value);
  },

  getWLANVenueNameString(packet: RadiusPacket): string | undefined {
    const value = this.getWLANVenueName(packet);
    return value?.toString('utf8');
  },

  getWLANReasonCode(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['WLAN_Reason_Code']);
    return avp?.value;
  },

  setWLANReasonCode(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['WLAN_Reason_Code'], value: Buffer.from(value) });
  },

  deleteWLANReasonCode(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_Reason_Code']);
  },

  getAllWLANReasonCode(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_Reason_Code']).map(avp => avp.value);
  },

  getWLANReasonCodeString(packet: RadiusPacket): string | undefined {
    const value = this.getWLANReasonCode(packet);
    return value?.toString('utf8');
  },

  getWLANPairwiseCipher(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['WLAN_Pairwise_Cipher']);
    return avp?.value;
  },

  setWLANPairwiseCipher(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['WLAN_Pairwise_Cipher'], value: Buffer.from(value) });
  },

  deleteWLANPairwiseCipher(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_Pairwise_Cipher']);
  },

  getAllWLANPairwiseCipher(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_Pairwise_Cipher']).map(avp => avp.value);
  },

  getWLANPairwiseCipherString(packet: RadiusPacket): string | undefined {
    const value = this.getWLANPairwiseCipher(packet);
    return value?.toString('utf8');
  },

  getWLANGroupCipher(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['WLAN_Group_Cipher']);
    return avp?.value;
  },

  setWLANGroupCipher(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['WLAN_Group_Cipher'], value: Buffer.from(value) });
  },

  deleteWLANGroupCipher(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_Group_Cipher']);
  },

  getAllWLANGroupCipher(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_Group_Cipher']).map(avp => avp.value);
  },

  getWLANGroupCipherString(packet: RadiusPacket): string | undefined {
    const value = this.getWLANGroupCipher(packet);
    return value?.toString('utf8');
  },

  getWLANAKMSuite(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['WLAN_AKM_Suite']);
    return avp?.value;
  },

  setWLANAKMSuite(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['WLAN_AKM_Suite'], value: Buffer.from(value) });
  },

  deleteWLANAKMSuite(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_AKM_Suite']);
  },

  getAllWLANAKMSuite(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_AKM_Suite']).map(avp => avp.value);
  },

  getWLANAKMSuiteString(packet: RadiusPacket): string | undefined {
    const value = this.getWLANAKMSuite(packet);
    return value?.toString('utf8');
  },

  getWLANGroupMgmtCipher(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['WLAN_Group_Mgmt_Cipher']);
    return avp?.value;
  },

  setWLANGroupMgmtCipher(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['WLAN_Group_Mgmt_Cipher'], value: Buffer.from(value) });
  },

  deleteWLANGroupMgmtCipher(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_Group_Mgmt_Cipher']);
  },

  getAllWLANGroupMgmtCipher(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_Group_Mgmt_Cipher']).map(avp => avp.value);
  },

  getWLANGroupMgmtCipherString(packet: RadiusPacket): string | undefined {
    const value = this.getWLANGroupMgmtCipher(packet);
    return value?.toString('utf8');
  },

  getWLANRFBand(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc7268AttributeTypes['WLAN_RF_Band']);
    return avp?.value;
  },

  setWLANRFBand(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc7268AttributeTypes['WLAN_RF_Band'], value: Buffer.from(value) });
  },

  deleteWLANRFBand(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc7268AttributeTypes['WLAN_RF_Band']);
  },

  getAllWLANRFBand(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc7268AttributeTypes['WLAN_RF_Band']).map(avp => avp.value);
  },

  getWLANRFBandString(packet: RadiusPacket): string | undefined {
    const value = this.getWLANRFBand(packet);
    return value?.toString('utf8');
  },

};
