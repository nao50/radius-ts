// Generated from dictionary.rfc4679
import { RadiusPacket } from "../radius.js";

export const rfc4679AttributeTypes = {
  'ADSL_Forum_DHCP_Vendor_Specific': 255,
  'ADSL_Forum_Device_Manufacturer_OUI': 255,
  'ADSL_Forum_Device_Serial_Number': 255,
  'ADSL_Forum_Device_Product_Class': 255,
  'ADSL_Forum_Gateway_Manufacturer_OUI': 255,
  'ADSL_Agent_Circuit_Id': 1,
  'ADSL_Agent_Remote_Id': 2,
  'Actual_Data_Rate_Upstream': 129,
  'Actual_Data_Rate_Downstream': 130,
  'Minimum_Data_Rate_Upstream': 131,
  'Minimum_Data_Rate_Downstream': 132,
  'Attainable_Data_Rate_Upstream': 133,
  'Attainable_Data_Rate_Downstream': 134,
  'Maximum_Data_Rate_Upstream': 135,
  'Maximum_Data_Rate_Downstream': 136,
  'Minimum_Data_Rate_Upstream_Low_Power': 137,
  'Minimum_Data_Rate_Downstream_Low_Power': 138,
  'Maximum_Interleaving_Delay_Upstream': 139,
  'Actual_Interleaving_Delay_Upstream': 140,
  'Maximum_Interleaving_Delay_Downstream': 141,
  'Actual_Interleaving_Delay_Downstream': 142,
  'Access_Loop_Encapsulation': 144,
  'IWF_Session': 254,
} as const;

export type rfc4679AttributeType = typeof rfc4679AttributeTypes[keyof typeof rfc4679AttributeTypes];

export const rfc4679 = {
  getADSLForumDHCPVendorSpecific(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_DHCP_Vendor_Specific']);
    return avp?.value;
  },

  setADSLForumDHCPVendorSpecific(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['ADSL_Forum_DHCP_Vendor_Specific'], value: Buffer.from(value) });
  },

  deleteADSLForumDHCPVendorSpecific(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['ADSL_Forum_DHCP_Vendor_Specific']);
  },

  getAllADSLForumDHCPVendorSpecific(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['ADSL_Forum_DHCP_Vendor_Specific']).map(avp => avp.value);
  },

  getADSLForumDHCPVendorSpecificString(packet: RadiusPacket): string | undefined {
    const value = this.getADSLForumDHCPVendorSpecific(packet);
    return value?.toString('utf8');
  },

  getADSLForumDeviceManufacturerOUI(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Manufacturer_OUI']);
    return avp?.value;
  },

  setADSLForumDeviceManufacturerOUI(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['ADSL_Forum_Device_Manufacturer_OUI'], value: Buffer.from(value) });
  },

  deleteADSLForumDeviceManufacturerOUI(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Manufacturer_OUI']);
  },

  getAllADSLForumDeviceManufacturerOUI(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['ADSL_Forum_Device_Manufacturer_OUI']).map(avp => avp.value);
  },

  getADSLForumDeviceManufacturerOUIString(packet: RadiusPacket): string | undefined {
    const value = this.getADSLForumDeviceManufacturerOUI(packet);
    return value?.toString('utf8');
  },

  getADSLForumDeviceSerialNumber(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Serial_Number']);
    return avp?.value;
  },

  setADSLForumDeviceSerialNumber(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['ADSL_Forum_Device_Serial_Number'], value: Buffer.from(value) });
  },

  deleteADSLForumDeviceSerialNumber(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Serial_Number']);
  },

  getAllADSLForumDeviceSerialNumber(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['ADSL_Forum_Device_Serial_Number']).map(avp => avp.value);
  },

  getADSLForumDeviceSerialNumberString(packet: RadiusPacket): string | undefined {
    const value = this.getADSLForumDeviceSerialNumber(packet);
    return value?.toString('utf8');
  },

  getADSLForumDeviceProductClass(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Product_Class']);
    return avp?.value;
  },

  setADSLForumDeviceProductClass(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['ADSL_Forum_Device_Product_Class'], value: Buffer.from(value) });
  },

  deleteADSLForumDeviceProductClass(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Product_Class']);
  },

  getAllADSLForumDeviceProductClass(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['ADSL_Forum_Device_Product_Class']).map(avp => avp.value);
  },

  getADSLForumDeviceProductClassString(packet: RadiusPacket): string | undefined {
    const value = this.getADSLForumDeviceProductClass(packet);
    return value?.toString('utf8');
  },

  getADSLForumGatewayManufacturerOUI(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_Gateway_Manufacturer_OUI']);
    return avp?.value;
  },

  setADSLForumGatewayManufacturerOUI(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['ADSL_Forum_Gateway_Manufacturer_OUI'], value: Buffer.from(value) });
  },

  deleteADSLForumGatewayManufacturerOUI(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['ADSL_Forum_Gateway_Manufacturer_OUI']);
  },

  getAllADSLForumGatewayManufacturerOUI(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['ADSL_Forum_Gateway_Manufacturer_OUI']).map(avp => avp.value);
  },

  getADSLForumGatewayManufacturerOUIString(packet: RadiusPacket): string | undefined {
    const value = this.getADSLForumGatewayManufacturerOUI(packet);
    return value?.toString('utf8');
  },

  getADSLAgentCircuitId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['ADSL_Agent_Circuit_Id']);
    return avp?.value;
  },

  setADSLAgentCircuitId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['ADSL_Agent_Circuit_Id'], value: Buffer.from(value) });
  },

  deleteADSLAgentCircuitId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['ADSL_Agent_Circuit_Id']);
  },

  getAllADSLAgentCircuitId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['ADSL_Agent_Circuit_Id']).map(avp => avp.value);
  },

  getADSLAgentCircuitIdString(packet: RadiusPacket): string | undefined {
    const value = this.getADSLAgentCircuitId(packet);
    return value?.toString('utf8');
  },

  getADSLAgentRemoteId(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['ADSL_Agent_Remote_Id']);
    return avp?.value;
  },

  setADSLAgentRemoteId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['ADSL_Agent_Remote_Id'], value: Buffer.from(value) });
  },

  deleteADSLAgentRemoteId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['ADSL_Agent_Remote_Id']);
  },

  getAllADSLAgentRemoteId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['ADSL_Agent_Remote_Id']).map(avp => avp.value);
  },

  getADSLAgentRemoteIdString(packet: RadiusPacket): string | undefined {
    const value = this.getADSLAgentRemoteId(packet);
    return value?.toString('utf8');
  },

  getActualDataRateUpstream(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Actual_Data_Rate_Upstream']);
    return avp?.value;
  },

  setActualDataRateUpstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Actual_Data_Rate_Upstream'], value: Buffer.from(value) });
  },

  deleteActualDataRateUpstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Actual_Data_Rate_Upstream']);
  },

  getAllActualDataRateUpstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Actual_Data_Rate_Upstream']).map(avp => avp.value);
  },

  getActualDataRateUpstreamString(packet: RadiusPacket): string | undefined {
    const value = this.getActualDataRateUpstream(packet);
    return value?.toString('utf8');
  },

  getActualDataRateDownstream(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Actual_Data_Rate_Downstream']);
    return avp?.value;
  },

  setActualDataRateDownstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Actual_Data_Rate_Downstream'], value: Buffer.from(value) });
  },

  deleteActualDataRateDownstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Actual_Data_Rate_Downstream']);
  },

  getAllActualDataRateDownstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Actual_Data_Rate_Downstream']).map(avp => avp.value);
  },

  getActualDataRateDownstreamString(packet: RadiusPacket): string | undefined {
    const value = this.getActualDataRateDownstream(packet);
    return value?.toString('utf8');
  },

  getMinimumDataRateUpstream(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream']);
    return avp?.value;
  },

  setMinimumDataRateUpstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Minimum_Data_Rate_Upstream'], value: Buffer.from(value) });
  },

  deleteMinimumDataRateUpstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream']);
  },

  getAllMinimumDataRateUpstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream']).map(avp => avp.value);
  },

  getMinimumDataRateUpstreamString(packet: RadiusPacket): string | undefined {
    const value = this.getMinimumDataRateUpstream(packet);
    return value?.toString('utf8');
  },

  getMinimumDataRateDownstream(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream']);
    return avp?.value;
  },

  setMinimumDataRateDownstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Minimum_Data_Rate_Downstream'], value: Buffer.from(value) });
  },

  deleteMinimumDataRateDownstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream']);
  },

  getAllMinimumDataRateDownstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream']).map(avp => avp.value);
  },

  getMinimumDataRateDownstreamString(packet: RadiusPacket): string | undefined {
    const value = this.getMinimumDataRateDownstream(packet);
    return value?.toString('utf8');
  },

  getAttainableDataRateUpstream(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Attainable_Data_Rate_Upstream']);
    return avp?.value;
  },

  setAttainableDataRateUpstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Attainable_Data_Rate_Upstream'], value: Buffer.from(value) });
  },

  deleteAttainableDataRateUpstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Attainable_Data_Rate_Upstream']);
  },

  getAllAttainableDataRateUpstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Attainable_Data_Rate_Upstream']).map(avp => avp.value);
  },

  getAttainableDataRateUpstreamString(packet: RadiusPacket): string | undefined {
    const value = this.getAttainableDataRateUpstream(packet);
    return value?.toString('utf8');
  },

  getAttainableDataRateDownstream(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Attainable_Data_Rate_Downstream']);
    return avp?.value;
  },

  setAttainableDataRateDownstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Attainable_Data_Rate_Downstream'], value: Buffer.from(value) });
  },

  deleteAttainableDataRateDownstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Attainable_Data_Rate_Downstream']);
  },

  getAllAttainableDataRateDownstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Attainable_Data_Rate_Downstream']).map(avp => avp.value);
  },

  getAttainableDataRateDownstreamString(packet: RadiusPacket): string | undefined {
    const value = this.getAttainableDataRateDownstream(packet);
    return value?.toString('utf8');
  },

  getMaximumDataRateUpstream(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Maximum_Data_Rate_Upstream']);
    return avp?.value;
  },

  setMaximumDataRateUpstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Maximum_Data_Rate_Upstream'], value: Buffer.from(value) });
  },

  deleteMaximumDataRateUpstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Maximum_Data_Rate_Upstream']);
  },

  getAllMaximumDataRateUpstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Maximum_Data_Rate_Upstream']).map(avp => avp.value);
  },

  getMaximumDataRateUpstreamString(packet: RadiusPacket): string | undefined {
    const value = this.getMaximumDataRateUpstream(packet);
    return value?.toString('utf8');
  },

  getMaximumDataRateDownstream(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Maximum_Data_Rate_Downstream']);
    return avp?.value;
  },

  setMaximumDataRateDownstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Maximum_Data_Rate_Downstream'], value: Buffer.from(value) });
  },

  deleteMaximumDataRateDownstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Maximum_Data_Rate_Downstream']);
  },

  getAllMaximumDataRateDownstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Maximum_Data_Rate_Downstream']).map(avp => avp.value);
  },

  getMaximumDataRateDownstreamString(packet: RadiusPacket): string | undefined {
    const value = this.getMaximumDataRateDownstream(packet);
    return value?.toString('utf8');
  },

  getMinimumDataRateUpstreamLowPower(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream_Low_Power']);
    return avp?.value;
  },

  setMinimumDataRateUpstreamLowPower(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Minimum_Data_Rate_Upstream_Low_Power'], value: Buffer.from(value) });
  },

  deleteMinimumDataRateUpstreamLowPower(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream_Low_Power']);
  },

  getAllMinimumDataRateUpstreamLowPower(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream_Low_Power']).map(avp => avp.value);
  },

  getMinimumDataRateUpstreamLowPowerString(packet: RadiusPacket): string | undefined {
    const value = this.getMinimumDataRateUpstreamLowPower(packet);
    return value?.toString('utf8');
  },

  getMinimumDataRateDownstreamLowPower(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream_Low_Power']);
    return avp?.value;
  },

  setMinimumDataRateDownstreamLowPower(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Minimum_Data_Rate_Downstream_Low_Power'], value: Buffer.from(value) });
  },

  deleteMinimumDataRateDownstreamLowPower(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream_Low_Power']);
  },

  getAllMinimumDataRateDownstreamLowPower(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream_Low_Power']).map(avp => avp.value);
  },

  getMinimumDataRateDownstreamLowPowerString(packet: RadiusPacket): string | undefined {
    const value = this.getMinimumDataRateDownstreamLowPower(packet);
    return value?.toString('utf8');
  },

  getMaximumInterleavingDelayUpstream(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Upstream']);
    return avp?.value;
  },

  setMaximumInterleavingDelayUpstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Maximum_Interleaving_Delay_Upstream'], value: Buffer.from(value) });
  },

  deleteMaximumInterleavingDelayUpstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Upstream']);
  },

  getAllMaximumInterleavingDelayUpstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Upstream']).map(avp => avp.value);
  },

  getMaximumInterleavingDelayUpstreamString(packet: RadiusPacket): string | undefined {
    const value = this.getMaximumInterleavingDelayUpstream(packet);
    return value?.toString('utf8');
  },

  getActualInterleavingDelayUpstream(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Actual_Interleaving_Delay_Upstream']);
    return avp?.value;
  },

  setActualInterleavingDelayUpstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Actual_Interleaving_Delay_Upstream'], value: Buffer.from(value) });
  },

  deleteActualInterleavingDelayUpstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Actual_Interleaving_Delay_Upstream']);
  },

  getAllActualInterleavingDelayUpstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Actual_Interleaving_Delay_Upstream']).map(avp => avp.value);
  },

  getActualInterleavingDelayUpstreamString(packet: RadiusPacket): string | undefined {
    const value = this.getActualInterleavingDelayUpstream(packet);
    return value?.toString('utf8');
  },

  getMaximumInterleavingDelayDownstream(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Downstream']);
    return avp?.value;
  },

  setMaximumInterleavingDelayDownstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Maximum_Interleaving_Delay_Downstream'], value: Buffer.from(value) });
  },

  deleteMaximumInterleavingDelayDownstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Downstream']);
  },

  getAllMaximumInterleavingDelayDownstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Downstream']).map(avp => avp.value);
  },

  getMaximumInterleavingDelayDownstreamString(packet: RadiusPacket): string | undefined {
    const value = this.getMaximumInterleavingDelayDownstream(packet);
    return value?.toString('utf8');
  },

  getActualInterleavingDelayDownstream(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Actual_Interleaving_Delay_Downstream']);
    return avp?.value;
  },

  setActualInterleavingDelayDownstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Actual_Interleaving_Delay_Downstream'], value: Buffer.from(value) });
  },

  deleteActualInterleavingDelayDownstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Actual_Interleaving_Delay_Downstream']);
  },

  getAllActualInterleavingDelayDownstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Actual_Interleaving_Delay_Downstream']).map(avp => avp.value);
  },

  getActualInterleavingDelayDownstreamString(packet: RadiusPacket): string | undefined {
    const value = this.getActualInterleavingDelayDownstream(packet);
    return value?.toString('utf8');
  },

  getAccessLoopEncapsulation(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['Access_Loop_Encapsulation']);
    return avp?.value;
  },

  setAccessLoopEncapsulation(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['Access_Loop_Encapsulation'], value: Buffer.from(value) });
  },

  deleteAccessLoopEncapsulation(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Access_Loop_Encapsulation']);
  },

  getAllAccessLoopEncapsulation(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Access_Loop_Encapsulation']).map(avp => avp.value);
  },

  getAccessLoopEncapsulationString(packet: RadiusPacket): string | undefined {
    const value = this.getAccessLoopEncapsulation(packet);
    return value?.toString('utf8');
  },

  getIWFSession(packet: RadiusPacket): Buffer | undefined {
    const avp = packet.getAttribute(rfc4679AttributeTypes['IWF_Session']);
    return avp?.value;
  },

  setIWFSession(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute({ type: rfc4679AttributeTypes['IWF_Session'], value: Buffer.from(value) });
  },

  deleteIWFSession(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['IWF_Session']);
  },

  getAllIWFSession(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['IWF_Session']).map(avp => avp.value);
  },

  getIWFSessionString(packet: RadiusPacket): string | undefined {
    const value = this.getIWFSession(packet);
    return value?.toString('utf8');
  },

};
