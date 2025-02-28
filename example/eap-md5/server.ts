// example/server.ts
import { RadiusServer } from '../../src/server';
import { RadiusPacket } from '../../src/packet';
import { RadiusCodes, EapCodes, EapTypes } from '../../src/codes';
import { rfc2865, rfc2865AttributeTypes } from '../../src/attribute/rfc2865';
import { rfc2869, rfc2869AttributeTypes } from '../../src/attribute/rfc2869';

import { Buffer } from 'buffer';
import { logger } from '../../src/logger';
import { randomBytes } from 'crypto';
import { RadiusCodeMap, EapCodeMap } from '../../src/utils/codes';

async function main() {
  const server = new RadiusServer('ipv4');
  const challenges = new Map<string, Buffer>(); // EAP-MD5チャレンジを保持

  await server.listen(1812, async (packet) => {
    const username = rfc2865.getUserNameString(packet) || 'unknown';
    packet.secret = username === 'testuser' ? 'secret' : 'other-secret';

    const challengeKey = `${packet.identifier}-${username}`;
    const storedChallenge = challenges.get(challengeKey);

    const eapMessage = rfc2869.getEAPMessage(packet);
    if (!eapMessage) {
      // EAP-Identity要求
      const response = new RadiusPacket(RadiusCodes.AccessRequest, packet.identifier, packet.authenticator, packet.secret);
      const eapIdentityReq = Buffer.from([EapCodes.Request, packet.identifier, 0, 5, EapTypes.Identity]);
      rfc2869.setEAPMessage(response, eapIdentityReq);
      logger.info({
        user: username,
        code: RadiusCodeMap[RadiusCodes.AccessRequest],
        msg: 'Sending EAP-Identity request',
      });
      return response;
    }

    const eapCode = eapMessage.readUInt8(0);
    const eapType = eapMessage.readUInt8(4);

    if (eapCode === EapCodes.Response && eapType === EapTypes.Identity) {
      // EAP-MD5チャレンジ送信
      const challenge = randomBytes(16);
      challenges.set(challengeKey, challenge);
      const eapChallenge = Buffer.concat([
        Buffer.from([EapCodes.Request, packet.identifier, 0, 22, EapTypes.MD5Challenge]),
        Buffer.from([16]), // Value-Size
        challenge, // Value
      ]);
      const response = new RadiusPacket(RadiusCodes.AccessRequest, packet.identifier, packet.authenticator, packet.secret);
      rfc2869.setEAPMessage(response, eapChallenge);
      logger.info({
        user: username,
        code: RadiusCodeMap[RadiusCodes.AccessRequest],
        msg: 'Sending EAP-MD5 challenge',
      });
      return response;
    }

    if (eapCode === EapCodes.Response && eapType === EapTypes.MD5Challenge && storedChallenge) {
      const valueSize = eapMessage.readUInt8(5);
      const value = eapMessage.slice(6, 6 + valueSize);
      const expectedHash = require('crypto').createHash('md5')
        .update(storedChallenge)
        .update(Buffer.from('password'))
        .update(Buffer.from([packet.identifier]))
        .digest();

      const isValid = value.equals(expectedHash);
      const responseCode = isValid ? RadiusCodes.AccessAccept : RadiusCodes.AccessReject;
      const eapResponse = Buffer.from([
        isValid ? EapCodes.Success : EapCodes.Failure,
        packet.identifier,
        0, 4
      ]);
      const response = new RadiusPacket(responseCode, packet.identifier, packet.authenticator, packet.secret);
      rfc2869.setEAPMessage(response, eapResponse);

      logger.info({
        user: username,
        code: RadiusCodeMap[responseCode],
        ...(responseCode === RadiusCodes.AccessReject ? { cause: 'Invalid MD5 response' } : {}),
        msg: `Authentication response sent (EAP-${isValid ? 'Success' : 'Failure'})`,
      });

      challenges.delete(challengeKey);
      return response;
    }

    logger.warn({
      user: username,
      code: RadiusCodeMap[RadiusCodes.AccessReject],
      cause: 'Invalid EAP sequence or missing challenge',
      msg: 'Authentication failed',
    });
    return new RadiusPacket(RadiusCodes.AccessReject, packet.identifier, packet.authenticator, packet.secret);
  });
}

main().catch(console.error);