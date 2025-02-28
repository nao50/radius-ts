// example/client.ts
import { RadiusClient } from '../../src/client';
import { RadiusPacket } from '../../src/packet';
import { RadiusCodes, EapCodes, EapTypes } from '../../src/codes';
import { rfc2865, rfc2865AttributeTypes } from '../../src/attribute/rfc2865';
import { rfc2869, rfc2869AttributeTypes } from '../../src/attribute/rfc2869';

import { Buffer } from 'buffer';
import { randomBytes } from 'crypto';
import { logger } from '../../src/logger';
import { RadiusCodeMap, EapCodeMap } from '../../src/utils/codes';

async function main() {
  const client = new RadiusClient('ipv4');
  const authenticator = randomBytes(16);
  const packet = new RadiusPacket(RadiusCodes.AccessRequest, undefined, authenticator, 'secret');
  rfc2865.setUserName(packet, 'testuser');

  try {
    // 初回リクエスト（EAP-Identity要求を受ける）
    logger.info({
      user: 'testuser',
      code: RadiusCodeMap[RadiusCodes.AccessRequest],
      msg: 'Sending initial EAP request',
    });
    const identityResponse = await client.send(packet, 'localhost', 1812);
    const eapMessage = rfc2869.getEAPMessage(identityResponse);

    if (eapMessage && eapMessage.readUInt8(0) === EapCodes.Request && eapMessage.readUInt8(4) === EapTypes.Identity) {
      const eapIdentityResp = Buffer.concat([
        Buffer.from([EapCodes.Response, packet.identifier, 0, 5 + 'testuser'.length, EapTypes.Identity]),
        Buffer.from('testuser'),
      ]);
      packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
      rfc2869.setEAPMessage(packet, eapIdentityResp);

      logger.info({
        user: 'testuser',
        code: RadiusCodeMap[RadiusCodes.AccessRequest],
        msg: 'Sending EAP-Identity response',
      });
      const challengeResponse = await client.send(packet, 'localhost', 1812);
      const challengeEap = rfc2869.getEAPMessage(challengeResponse);

      if (challengeEap && challengeEap.readUInt8(0) === EapCodes.Request && challengeEap.readUInt8(4) === EapTypes.MD5Challenge) {
        const valueSize = challengeEap.readUInt8(5);
        const challenge = challengeEap.slice(6, 6 + valueSize);
        const hash = require('crypto').createHash('md5')
          .update(challenge)
          .update(Buffer.from('password'))
          .update(Buffer.from([packet.identifier]))
          .digest();

        const eapResponse = Buffer.concat([
          Buffer.from([EapCodes.Response, packet.identifier, 0, 6 + hash.length, EapTypes.MD5Challenge]),
          Buffer.from([hash.length]),
          hash,
        ]);
        packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
        rfc2869.setEAPMessage(packet, eapResponse);

        logger.info({
          user: 'testuser',
          code: RadiusCodeMap[RadiusCodes.AccessRequest],
          msg: 'Sending EAP-MD5 response',
        });
        const finalResponse = await client.send(packet, 'localhost', 1812);
        const finalEap = rfc2869.getEAPMessage(finalResponse);

        logger.info({
          user: 'testuser',
          code: RadiusCodeMap[finalResponse.code],
          ...(finalResponse.code === RadiusCodes.AccessReject ? { cause: 'Server rejected EAP-MD5' } : {}),
          msg: `Response received (EAP-${finalEap!.readUInt8(0) === EapCodes.Success ? 'Success' : 'Failure'})`,
        });
      }
    }
  } catch (error) {
    logger.error({
      user: 'testuser',
      code: 'Unknown',
      cause: error,
      msg: 'Failed to send request or receive response',
    });
  } finally {
    process.exit(0);
  }
}

main();