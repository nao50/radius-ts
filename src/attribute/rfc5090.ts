// Generated from dictionary.rfc5090
import { RadiusPacket } from "../packet.js";

export const rfc5090AttributeTypes = {
  'Digest_Response': 103,
  'Digest_Realm': 104,
  'Digest_Nonce': 105,
  'Digest_Response_Auth': 106,
  'Digest_Nextnonce': 107,
  'Digest_Method': 108,
  'Digest_URI': 109,
  'Digest_Qop': 110,
  'Digest_Algorithm': 111,
  'Digest_Entity_Body_Hash': 112,
  'Digest_CNonce': 113,
  'Digest_Nonce_Count': 114,
  'Digest_Username': 115,
  'Digest_Opaque': 116,
  'Digest_Auth_Param': 117,
  'Digest_AKA_Auts': 118,
  'Digest_Domain': 119,
  'Digest_Stale': 120,
  'Digest_HA1': 121,
  'SIP_AOR': 122,
} as const;

export type rfc5090AttributeType = typeof rfc5090AttributeTypes[keyof typeof rfc5090AttributeTypes];

export const rfc5090 = {
  getDigestResponse(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Response']);
  },

  setDigestResponse(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Response'], value);
  },

  deleteDigestResponse(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Response']);
  },

  getAllDigestResponse(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Response']);
  },

  getDigestResponseString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Response']);
    return value?.toString('utf8');
  },

  getDigestRealm(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Realm']);
  },

  setDigestRealm(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Realm'], value);
  },

  deleteDigestRealm(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Realm']);
  },

  getAllDigestRealm(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Realm']);
  },

  getDigestRealmString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Realm']);
    return value?.toString('utf8');
  },

  getDigestNonce(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Nonce']);
  },

  setDigestNonce(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Nonce'], value);
  },

  deleteDigestNonce(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Nonce']);
  },

  getAllDigestNonce(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Nonce']);
  },

  getDigestNonceString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Nonce']);
    return value?.toString('utf8');
  },

  getDigestResponseAuth(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Response_Auth']);
  },

  setDigestResponseAuth(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Response_Auth'], value);
  },

  deleteDigestResponseAuth(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Response_Auth']);
  },

  getAllDigestResponseAuth(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Response_Auth']);
  },

  getDigestResponseAuthString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Response_Auth']);
    return value?.toString('utf8');
  },

  getDigestNextnonce(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Nextnonce']);
  },

  setDigestNextnonce(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Nextnonce'], value);
  },

  deleteDigestNextnonce(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Nextnonce']);
  },

  getAllDigestNextnonce(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Nextnonce']);
  },

  getDigestNextnonceString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Nextnonce']);
    return value?.toString('utf8');
  },

  getDigestMethod(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Method']);
  },

  setDigestMethod(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Method'], value);
  },

  deleteDigestMethod(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Method']);
  },

  getAllDigestMethod(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Method']);
  },

  getDigestMethodString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Method']);
    return value?.toString('utf8');
  },

  getDigestURI(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_URI']);
  },

  setDigestURI(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_URI'], value);
  },

  deleteDigestURI(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_URI']);
  },

  getAllDigestURI(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_URI']);
  },

  getDigestURIString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_URI']);
    return value?.toString('utf8');
  },

  getDigestQop(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Qop']);
  },

  setDigestQop(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Qop'], value);
  },

  deleteDigestQop(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Qop']);
  },

  getAllDigestQop(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Qop']);
  },

  getDigestQopString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Qop']);
    return value?.toString('utf8');
  },

  getDigestAlgorithm(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Algorithm']);
  },

  setDigestAlgorithm(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Algorithm'], value);
  },

  deleteDigestAlgorithm(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Algorithm']);
  },

  getAllDigestAlgorithm(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Algorithm']);
  },

  getDigestAlgorithmString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Algorithm']);
    return value?.toString('utf8');
  },

  getDigestEntityBodyHash(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Entity_Body_Hash']);
  },

  setDigestEntityBodyHash(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Entity_Body_Hash'], value);
  },

  deleteDigestEntityBodyHash(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Entity_Body_Hash']);
  },

  getAllDigestEntityBodyHash(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Entity_Body_Hash']);
  },

  getDigestEntityBodyHashString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Entity_Body_Hash']);
    return value?.toString('utf8');
  },

  getDigestCNonce(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_CNonce']);
  },

  setDigestCNonce(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_CNonce'], value);
  },

  deleteDigestCNonce(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_CNonce']);
  },

  getAllDigestCNonce(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_CNonce']);
  },

  getDigestCNonceString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_CNonce']);
    return value?.toString('utf8');
  },

  getDigestNonceCount(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Nonce_Count']);
  },

  setDigestNonceCount(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Nonce_Count'], value);
  },

  deleteDigestNonceCount(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Nonce_Count']);
  },

  getAllDigestNonceCount(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Nonce_Count']);
  },

  getDigestNonceCountString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Nonce_Count']);
    return value?.toString('utf8');
  },

  getDigestUsername(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Username']);
  },

  setDigestUsername(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Username'], value);
  },

  deleteDigestUsername(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Username']);
  },

  getAllDigestUsername(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Username']);
  },

  getDigestUsernameString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Username']);
    return value?.toString('utf8');
  },

  getDigestOpaque(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Opaque']);
  },

  setDigestOpaque(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Opaque'], value);
  },

  deleteDigestOpaque(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Opaque']);
  },

  getAllDigestOpaque(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Opaque']);
  },

  getDigestOpaqueString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Opaque']);
    return value?.toString('utf8');
  },

  getDigestAuthParam(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Auth_Param']);
  },

  setDigestAuthParam(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Auth_Param'], value);
  },

  deleteDigestAuthParam(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Auth_Param']);
  },

  getAllDigestAuthParam(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Auth_Param']);
  },

  getDigestAuthParamString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Auth_Param']);
    return value?.toString('utf8');
  },

  getDigestAKAAuts(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_AKA_Auts']);
  },

  setDigestAKAAuts(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_AKA_Auts'], value);
  },

  deleteDigestAKAAuts(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_AKA_Auts']);
  },

  getAllDigestAKAAuts(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_AKA_Auts']);
  },

  getDigestAKAAutsString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_AKA_Auts']);
    return value?.toString('utf8');
  },

  getDigestDomain(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Domain']);
  },

  setDigestDomain(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Domain'], value);
  },

  deleteDigestDomain(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Domain']);
  },

  getAllDigestDomain(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Domain']);
  },

  getDigestDomainString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Domain']);
    return value?.toString('utf8');
  },

  getDigestStale(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_Stale']);
  },

  setDigestStale(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_Stale'], value);
  },

  deleteDigestStale(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Stale']);
  },

  getAllDigestStale(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Stale']);
  },

  getDigestStaleString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_Stale']);
    return value?.toString('utf8');
  },

  getDigestHA1(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['Digest_HA1']);
  },

  setDigestHA1(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['Digest_HA1'], value);
  },

  deleteDigestHA1(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_HA1']);
  },

  getAllDigestHA1(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_HA1']);
  },

  getDigestHA1String(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['Digest_HA1']);
    return value?.toString('utf8');
  },

  getSIPAOR(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc5090AttributeTypes['SIP_AOR']);
  },

  setSIPAOR(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc5090AttributeTypes['SIP_AOR'], value);
  },

  deleteSIPAOR(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['SIP_AOR']);
  },

  getAllSIPAOR(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['SIP_AOR']);
  },

  getSIPAORString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc5090AttributeTypes['SIP_AOR']);
    return value?.toString('utf8');
  },

};
