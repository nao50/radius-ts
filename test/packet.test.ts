// tests/packet.test.ts
import { describe, it, expect } from 'vitest';
import { RadiusPacket } from '../src/packet';
import { RadiusCodes } from '../src/codes';
import { rfc2865, rfc2865AttributeTypes } from '../src/attribute/rfc2865';
import { Buffer } from 'buffer';

describe('RadiusPacket', () => {
  const secret = 'secret';

  it('encodes and decodes with User-Password', () => {
    const packet = new RadiusPacket(RadiusCodes.AccessRequest, 1, Buffer.alloc(16, 'auth'), secret);
    packet.addAttribute(rfc2865AttributeTypes['User_Name'], 'testuser');
    packet.addAttribute(rfc2865AttributeTypes['User_Password'], 'password');
    const encoded = packet.encode();
    const decoded = RadiusPacket.decode(encoded);
    decoded.secret = secret;

    expect(decoded.code).toBe(RadiusCodes.AccessRequest);
    expect(decoded.getAttribute(rfc2865AttributeTypes['User_Name'])?.toString()).toBe('testuser');
    expect(decoded.decryptUserPassword(decoded.getAttribute(rfc2865AttributeTypes['User_Password'])!, secret).toString()).toBe('password');
  });

  it('supports multiple attributes', () => {
    const packet = new RadiusPacket(RadiusCodes.AccessRequest, 1, Buffer.alloc(16));
    packet.addAttribute(rfc2865AttributeTypes['User_Name'], 'user1');
    packet.addAttribute(rfc2865AttributeTypes['User_Name'], 'user2');
    expect(packet.getAllAttributes(rfc2865AttributeTypes['User_Name']).length).toBe(2);
    packet.deleteAttribute(rfc2865AttributeTypes['User_Name']);
    expect(packet.getAllAttributes(rfc2865AttributeTypes['User_Name']).length).toBe(0);
  });
});