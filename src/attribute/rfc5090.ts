// Generated from dictionary.rfc5090
import { RadiusPacket } from "../radius.js";

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
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Response']);
    return avp?.value;
  },

  setDigestResponse(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Response'], value: Buffer.from(value) });
  },

  deleteDigestResponse(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Response']);
  },

  getAllDigestResponse(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Response']).map(avp => avp.value);
  },

  getDigestResponseString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestResponse(packet);
    return value?.toString('utf8');
  },

  getDigestRealm(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Realm']);
    return avp?.value;
  },

  setDigestRealm(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Realm'], value: Buffer.from(value) });
  },

  deleteDigestRealm(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Realm']);
  },

  getAllDigestRealm(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Realm']).map(avp => avp.value);
  },

  getDigestRealmString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestRealm(packet);
    return value?.toString('utf8');
  },

  getDigestNonce(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Nonce']);
    return avp?.value;
  },

  setDigestNonce(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Nonce'], value: Buffer.from(value) });
  },

  deleteDigestNonce(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Nonce']);
  },

  getAllDigestNonce(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Nonce']).map(avp => avp.value);
  },

  getDigestNonceString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestNonce(packet);
    return value?.toString('utf8');
  },

  getDigestResponseAuth(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Response_Auth']);
    return avp?.value;
  },

  setDigestResponseAuth(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Response_Auth'], value: Buffer.from(value) });
  },

  deleteDigestResponseAuth(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Response_Auth']);
  },

  getAllDigestResponseAuth(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Response_Auth']).map(avp => avp.value);
  },

  getDigestResponseAuthString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestResponseAuth(packet);
    return value?.toString('utf8');
  },

  getDigestNextnonce(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Nextnonce']);
    return avp?.value;
  },

  setDigestNextnonce(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Nextnonce'], value: Buffer.from(value) });
  },

  deleteDigestNextnonce(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Nextnonce']);
  },

  getAllDigestNextnonce(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Nextnonce']).map(avp => avp.value);
  },

  getDigestNextnonceString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestNextnonce(packet);
    return value?.toString('utf8');
  },

  getDigestMethod(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Method']);
    return avp?.value;
  },

  setDigestMethod(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Method'], value: Buffer.from(value) });
  },

  deleteDigestMethod(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Method']);
  },

  getAllDigestMethod(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Method']).map(avp => avp.value);
  },

  getDigestMethodString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestMethod(packet);
    return value?.toString('utf8');
  },

  getDigestURI(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_URI']);
    return avp?.value;
  },

  setDigestURI(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_URI'], value: Buffer.from(value) });
  },

  deleteDigestURI(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_URI']);
  },

  getAllDigestURI(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_URI']).map(avp => avp.value);
  },

  getDigestURIString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestURI(packet);
    return value?.toString('utf8');
  },

  getDigestQop(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Qop']);
    return avp?.value;
  },

  setDigestQop(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Qop'], value: Buffer.from(value) });
  },

  deleteDigestQop(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Qop']);
  },

  getAllDigestQop(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Qop']).map(avp => avp.value);
  },

  getDigestQopString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestQop(packet);
    return value?.toString('utf8');
  },

  getDigestAlgorithm(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Algorithm']);
    return avp?.value;
  },

  setDigestAlgorithm(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Algorithm'], value: Buffer.from(value) });
  },

  deleteDigestAlgorithm(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Algorithm']);
  },

  getAllDigestAlgorithm(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Algorithm']).map(avp => avp.value);
  },

  getDigestAlgorithmString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestAlgorithm(packet);
    return value?.toString('utf8');
  },

  getDigestEntityBodyHash(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Entity_Body_Hash']);
    return avp?.value;
  },

  setDigestEntityBodyHash(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Entity_Body_Hash'], value: Buffer.from(value) });
  },

  deleteDigestEntityBodyHash(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Entity_Body_Hash']);
  },

  getAllDigestEntityBodyHash(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Entity_Body_Hash']).map(avp => avp.value);
  },

  getDigestEntityBodyHashString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestEntityBodyHash(packet);
    return value?.toString('utf8');
  },

  getDigestCNonce(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_CNonce']);
    return avp?.value;
  },

  setDigestCNonce(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_CNonce'], value: Buffer.from(value) });
  },

  deleteDigestCNonce(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_CNonce']);
  },

  getAllDigestCNonce(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_CNonce']).map(avp => avp.value);
  },

  getDigestCNonceString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestCNonce(packet);
    return value?.toString('utf8');
  },

  getDigestNonceCount(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Nonce_Count']);
    return avp?.value;
  },

  setDigestNonceCount(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Nonce_Count'], value: Buffer.from(value) });
  },

  deleteDigestNonceCount(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Nonce_Count']);
  },

  getAllDigestNonceCount(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Nonce_Count']).map(avp => avp.value);
  },

  getDigestNonceCountString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestNonceCount(packet);
    return value?.toString('utf8');
  },

  getDigestUsername(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Username']);
    return avp?.value;
  },

  setDigestUsername(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Username'], value: Buffer.from(value) });
  },

  deleteDigestUsername(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Username']);
  },

  getAllDigestUsername(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Username']).map(avp => avp.value);
  },

  getDigestUsernameString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestUsername(packet);
    return value?.toString('utf8');
  },

  getDigestOpaque(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Opaque']);
    return avp?.value;
  },

  setDigestOpaque(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Opaque'], value: Buffer.from(value) });
  },

  deleteDigestOpaque(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Opaque']);
  },

  getAllDigestOpaque(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Opaque']).map(avp => avp.value);
  },

  getDigestOpaqueString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestOpaque(packet);
    return value?.toString('utf8');
  },

  getDigestAuthParam(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Auth_Param']);
    return avp?.value;
  },

  setDigestAuthParam(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Auth_Param'], value: Buffer.from(value) });
  },

  deleteDigestAuthParam(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Auth_Param']);
  },

  getAllDigestAuthParam(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Auth_Param']).map(avp => avp.value);
  },

  getDigestAuthParamString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestAuthParam(packet);
    return value?.toString('utf8');
  },

  getDigestAKAAuts(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_AKA_Auts']);
    return avp?.value;
  },

  setDigestAKAAuts(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_AKA_Auts'], value: Buffer.from(value) });
  },

  deleteDigestAKAAuts(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_AKA_Auts']);
  },

  getAllDigestAKAAuts(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_AKA_Auts']).map(avp => avp.value);
  },

  getDigestAKAAutsString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestAKAAuts(packet);
    return value?.toString('utf8');
  },

  getDigestDomain(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Domain']);
    return avp?.value;
  },

  setDigestDomain(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Domain'], value: Buffer.from(value) });
  },

  deleteDigestDomain(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Domain']);
  },

  getAllDigestDomain(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Domain']).map(avp => avp.value);
  },

  getDigestDomainString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestDomain(packet);
    return value?.toString('utf8');
  },

  getDigestStale(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_Stale']);
    return avp?.value;
  },

  setDigestStale(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_Stale'], value: Buffer.from(value) });
  },

  deleteDigestStale(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_Stale']);
  },

  getAllDigestStale(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_Stale']).map(avp => avp.value);
  },

  getDigestStaleString(packet: RadiusPacket): string | undefined {
    const value = this.getDigestStale(packet);
    return value?.toString('utf8');
  },

  getDigestHA1(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['Digest_HA1']);
    return avp?.value;
  },

  setDigestHA1(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['Digest_HA1'], value: Buffer.from(value) });
  },

  deleteDigestHA1(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['Digest_HA1']);
  },

  getAllDigestHA1(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['Digest_HA1']).map(avp => avp.value);
  },

  getDigestHA1String(packet: RadiusPacket): string | undefined {
    const value = this.getDigestHA1(packet);
    return value?.toString('utf8');
  },

  getSIPAOR(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc5090AttributeTypes['SIP_AOR']);
    return avp?.value;
  },

  setSIPAOR(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc5090AttributeTypes['SIP_AOR'], value: Buffer.from(value) });
  },

  deleteSIPAOR(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc5090AttributeTypes['SIP_AOR']);
  },

  getAllSIPAOR(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc5090AttributeTypes['SIP_AOR']).map(avp => avp.value);
  },

  getSIPAORString(packet: RadiusPacket): string | undefined {
    const value = this.getSIPAOR(packet);
    return value?.toString('utf8');
  },

};
