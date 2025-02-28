// Generated from dictionary.rfc4679
import { RadiusPacket } from "../packet.js";

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
    return packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_DHCP_Vendor_Specific']);
  },

  setADSLForumDHCPVendorSpecific(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['ADSL_Forum_DHCP_Vendor_Specific'], value);
  },

  deleteADSLForumDHCPVendorSpecific(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['ADSL_Forum_DHCP_Vendor_Specific']);
  },

  getAllADSLForumDHCPVendorSpecific(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['ADSL_Forum_DHCP_Vendor_Specific']);
  },

  getADSLForumDHCPVendorSpecificString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_DHCP_Vendor_Specific']);
    return value?.toString('utf8');
  },

  getADSLForumDeviceManufacturerOUI(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Manufacturer_OUI']);
  },

  setADSLForumDeviceManufacturerOUI(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Manufacturer_OUI'], value);
  },

  deleteADSLForumDeviceManufacturerOUI(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Manufacturer_OUI']);
  },

  getAllADSLForumDeviceManufacturerOUI(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['ADSL_Forum_Device_Manufacturer_OUI']);
  },

  getADSLForumDeviceManufacturerOUIString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Manufacturer_OUI']);
    return value?.toString('utf8');
  },

  getADSLForumDeviceSerialNumber(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Serial_Number']);
  },

  setADSLForumDeviceSerialNumber(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Serial_Number'], value);
  },

  deleteADSLForumDeviceSerialNumber(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Serial_Number']);
  },

  getAllADSLForumDeviceSerialNumber(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['ADSL_Forum_Device_Serial_Number']);
  },

  getADSLForumDeviceSerialNumberString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Serial_Number']);
    return value?.toString('utf8');
  },

  getADSLForumDeviceProductClass(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Product_Class']);
  },

  setADSLForumDeviceProductClass(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Product_Class'], value);
  },

  deleteADSLForumDeviceProductClass(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Product_Class']);
  },

  getAllADSLForumDeviceProductClass(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['ADSL_Forum_Device_Product_Class']);
  },

  getADSLForumDeviceProductClassString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_Device_Product_Class']);
    return value?.toString('utf8');
  },

  getADSLForumGatewayManufacturerOUI(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_Gateway_Manufacturer_OUI']);
  },

  setADSLForumGatewayManufacturerOUI(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['ADSL_Forum_Gateway_Manufacturer_OUI'], value);
  },

  deleteADSLForumGatewayManufacturerOUI(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['ADSL_Forum_Gateway_Manufacturer_OUI']);
  },

  getAllADSLForumGatewayManufacturerOUI(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['ADSL_Forum_Gateway_Manufacturer_OUI']);
  },

  getADSLForumGatewayManufacturerOUIString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['ADSL_Forum_Gateway_Manufacturer_OUI']);
    return value?.toString('utf8');
  },

  getADSLAgentCircuitId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['ADSL_Agent_Circuit_Id']);
  },

  setADSLAgentCircuitId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['ADSL_Agent_Circuit_Id'], value);
  },

  deleteADSLAgentCircuitId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['ADSL_Agent_Circuit_Id']);
  },

  getAllADSLAgentCircuitId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['ADSL_Agent_Circuit_Id']);
  },

  getADSLAgentCircuitIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['ADSL_Agent_Circuit_Id']);
    return value?.toString('utf8');
  },

  getADSLAgentRemoteId(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['ADSL_Agent_Remote_Id']);
  },

  setADSLAgentRemoteId(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['ADSL_Agent_Remote_Id'], value);
  },

  deleteADSLAgentRemoteId(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['ADSL_Agent_Remote_Id']);
  },

  getAllADSLAgentRemoteId(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['ADSL_Agent_Remote_Id']);
  },

  getADSLAgentRemoteIdString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['ADSL_Agent_Remote_Id']);
    return value?.toString('utf8');
  },

  getActualDataRateUpstream(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Actual_Data_Rate_Upstream']);
  },

  setActualDataRateUpstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Actual_Data_Rate_Upstream'], value);
  },

  deleteActualDataRateUpstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Actual_Data_Rate_Upstream']);
  },

  getAllActualDataRateUpstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Actual_Data_Rate_Upstream']);
  },

  getActualDataRateUpstreamString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Actual_Data_Rate_Upstream']);
    return value?.toString('utf8');
  },

  getActualDataRateDownstream(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Actual_Data_Rate_Downstream']);
  },

  setActualDataRateDownstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Actual_Data_Rate_Downstream'], value);
  },

  deleteActualDataRateDownstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Actual_Data_Rate_Downstream']);
  },

  getAllActualDataRateDownstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Actual_Data_Rate_Downstream']);
  },

  getActualDataRateDownstreamString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Actual_Data_Rate_Downstream']);
    return value?.toString('utf8');
  },

  getMinimumDataRateUpstream(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream']);
  },

  setMinimumDataRateUpstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream'], value);
  },

  deleteMinimumDataRateUpstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream']);
  },

  getAllMinimumDataRateUpstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream']);
  },

  getMinimumDataRateUpstreamString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream']);
    return value?.toString('utf8');
  },

  getMinimumDataRateDownstream(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream']);
  },

  setMinimumDataRateDownstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream'], value);
  },

  deleteMinimumDataRateDownstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream']);
  },

  getAllMinimumDataRateDownstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream']);
  },

  getMinimumDataRateDownstreamString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream']);
    return value?.toString('utf8');
  },

  getAttainableDataRateUpstream(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Attainable_Data_Rate_Upstream']);
  },

  setAttainableDataRateUpstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Attainable_Data_Rate_Upstream'], value);
  },

  deleteAttainableDataRateUpstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Attainable_Data_Rate_Upstream']);
  },

  getAllAttainableDataRateUpstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Attainable_Data_Rate_Upstream']);
  },

  getAttainableDataRateUpstreamString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Attainable_Data_Rate_Upstream']);
    return value?.toString('utf8');
  },

  getAttainableDataRateDownstream(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Attainable_Data_Rate_Downstream']);
  },

  setAttainableDataRateDownstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Attainable_Data_Rate_Downstream'], value);
  },

  deleteAttainableDataRateDownstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Attainable_Data_Rate_Downstream']);
  },

  getAllAttainableDataRateDownstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Attainable_Data_Rate_Downstream']);
  },

  getAttainableDataRateDownstreamString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Attainable_Data_Rate_Downstream']);
    return value?.toString('utf8');
  },

  getMaximumDataRateUpstream(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Maximum_Data_Rate_Upstream']);
  },

  setMaximumDataRateUpstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Maximum_Data_Rate_Upstream'], value);
  },

  deleteMaximumDataRateUpstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Maximum_Data_Rate_Upstream']);
  },

  getAllMaximumDataRateUpstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Maximum_Data_Rate_Upstream']);
  },

  getMaximumDataRateUpstreamString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Maximum_Data_Rate_Upstream']);
    return value?.toString('utf8');
  },

  getMaximumDataRateDownstream(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Maximum_Data_Rate_Downstream']);
  },

  setMaximumDataRateDownstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Maximum_Data_Rate_Downstream'], value);
  },

  deleteMaximumDataRateDownstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Maximum_Data_Rate_Downstream']);
  },

  getAllMaximumDataRateDownstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Maximum_Data_Rate_Downstream']);
  },

  getMaximumDataRateDownstreamString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Maximum_Data_Rate_Downstream']);
    return value?.toString('utf8');
  },

  getMinimumDataRateUpstreamLowPower(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream_Low_Power']);
  },

  setMinimumDataRateUpstreamLowPower(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream_Low_Power'], value);
  },

  deleteMinimumDataRateUpstreamLowPower(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream_Low_Power']);
  },

  getAllMinimumDataRateUpstreamLowPower(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream_Low_Power']);
  },

  getMinimumDataRateUpstreamLowPowerString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Upstream_Low_Power']);
    return value?.toString('utf8');
  },

  getMinimumDataRateDownstreamLowPower(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream_Low_Power']);
  },

  setMinimumDataRateDownstreamLowPower(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream_Low_Power'], value);
  },

  deleteMinimumDataRateDownstreamLowPower(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream_Low_Power']);
  },

  getAllMinimumDataRateDownstreamLowPower(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream_Low_Power']);
  },

  getMinimumDataRateDownstreamLowPowerString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Minimum_Data_Rate_Downstream_Low_Power']);
    return value?.toString('utf8');
  },

  getMaximumInterleavingDelayUpstream(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Upstream']);
  },

  setMaximumInterleavingDelayUpstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Upstream'], value);
  },

  deleteMaximumInterleavingDelayUpstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Upstream']);
  },

  getAllMaximumInterleavingDelayUpstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Upstream']);
  },

  getMaximumInterleavingDelayUpstreamString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Upstream']);
    return value?.toString('utf8');
  },

  getActualInterleavingDelayUpstream(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Actual_Interleaving_Delay_Upstream']);
  },

  setActualInterleavingDelayUpstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Actual_Interleaving_Delay_Upstream'], value);
  },

  deleteActualInterleavingDelayUpstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Actual_Interleaving_Delay_Upstream']);
  },

  getAllActualInterleavingDelayUpstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Actual_Interleaving_Delay_Upstream']);
  },

  getActualInterleavingDelayUpstreamString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Actual_Interleaving_Delay_Upstream']);
    return value?.toString('utf8');
  },

  getMaximumInterleavingDelayDownstream(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Downstream']);
  },

  setMaximumInterleavingDelayDownstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Downstream'], value);
  },

  deleteMaximumInterleavingDelayDownstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Downstream']);
  },

  getAllMaximumInterleavingDelayDownstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Downstream']);
  },

  getMaximumInterleavingDelayDownstreamString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Maximum_Interleaving_Delay_Downstream']);
    return value?.toString('utf8');
  },

  getActualInterleavingDelayDownstream(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Actual_Interleaving_Delay_Downstream']);
  },

  setActualInterleavingDelayDownstream(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Actual_Interleaving_Delay_Downstream'], value);
  },

  deleteActualInterleavingDelayDownstream(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Actual_Interleaving_Delay_Downstream']);
  },

  getAllActualInterleavingDelayDownstream(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Actual_Interleaving_Delay_Downstream']);
  },

  getActualInterleavingDelayDownstreamString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Actual_Interleaving_Delay_Downstream']);
    return value?.toString('utf8');
  },

  getAccessLoopEncapsulation(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['Access_Loop_Encapsulation']);
  },

  setAccessLoopEncapsulation(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['Access_Loop_Encapsulation'], value);
  },

  deleteAccessLoopEncapsulation(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['Access_Loop_Encapsulation']);
  },

  getAllAccessLoopEncapsulation(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['Access_Loop_Encapsulation']);
  },

  getAccessLoopEncapsulationString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['Access_Loop_Encapsulation']);
    return value?.toString('utf8');
  },

  getIWFSession(packet: RadiusPacket): Buffer | undefined {
    return packet.getAttribute(rfc4679AttributeTypes['IWF_Session']);
  },

  setIWFSession(packet: RadiusPacket, value: string | Buffer): void {
    packet.addAttribute(rfc4679AttributeTypes['IWF_Session'], value);
  },

  deleteIWFSession(packet: RadiusPacket): void {
    packet.deleteAttribute(rfc4679AttributeTypes['IWF_Session']);
  },

  getAllIWFSession(packet: RadiusPacket): Buffer[] {
    return packet.getAllAttributes(rfc4679AttributeTypes['IWF_Session']);
  },

  getIWFSessionString(packet: RadiusPacket): string | undefined {
    const value = packet.getAttribute(rfc4679AttributeTypes['IWF_Session']);
    return value?.toString('utf8');
  },

};
