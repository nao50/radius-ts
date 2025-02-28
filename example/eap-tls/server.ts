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
import { EapHandler } from '../../src/eap';

async function main() {
  const server = new RadiusServer('ipv4');
  const eapHandler = new EapHandler();

  await server.listen(1812, async (packet) => {
    const username = rfc2865.getUserNameString(packet) || 'unknown';
    packet.secret = username === 'testuser' ? 'secret' : 'other-secret';

    const eapMessage = rfc2869.getEAPMessage(packet);
    let response: RadiusPacket;

    if (!eapMessage) {
      response = new RadiusPacket(RadiusCodes.AccessChallenge, packet.identifier, packet.authenticator, packet.secret);
      rfc2869.setEAPMessage(response, eapHandler.createIdentityRequest(packet.identifier));
      logger.info({
        user: username,
        code: RadiusCodeMap[RadiusCodes.AccessChallenge],
        msg: 'Sending EAP-Identity request',
      });
    } else {
      const eapCode = eapMessage.readUInt8(0);
      const eapType = eapMessage.readUInt8(4);

      if (eapCode === EapCodes.Response && eapType === EapTypes.Identity) {
        response = new RadiusPacket(RadiusCodes.AccessChallenge, packet.identifier, packet.authenticator, packet.secret);
        rfc2869.setEAPMessage(response, eapHandler.processIdentityResponse(packet, eapMessage));
        logger.info({
          user: username,
          code: RadiusCodeMap[RadiusCodes.AccessChallenge],
          msg: 'Sending EAP-TLS Start',
        });
      } else if (eapCode === EapCodes.Response && eapType === EapTypes.TLS) {
        response = new RadiusPacket(RadiusCodes.AccessChallenge, packet.identifier, packet.authenticator, packet.secret);
        const tlsResponse = eapHandler.processTlsHandshake(packet, eapMessage);
        // EAP-Successをチェックし、Access-Acceptを返す
        if (tlsResponse.readUInt8(0) === EapCodes.Success) {
          response = new RadiusPacket(RadiusCodes.AccessAccept, packet.identifier, packet.authenticator, packet.secret);
          rfc2869.setEAPMessage(response, tlsResponse);
          logger.info({
            user: username,
            code: RadiusCodeMap[RadiusCodes.AccessAccept],
            msg: 'Authentication response sent (EAP-Success)',
          });
        } else {
          rfc2869.setEAPMessage(response, tlsResponse);
          logger.info({
            user: username,
            code: RadiusCodeMap[RadiusCodes.AccessChallenge],
            msg: 'Sending EAP-TLS Server Hello or Client Response',
          });
        }
      } else {
        response = new RadiusPacket(RadiusCodes.AccessReject, packet.identifier, packet.authenticator, packet.secret);
        logger.warn({
          user: username,
          code: RadiusCodeMap[RadiusCodes.AccessReject],
          cause: 'Invalid EAP sequence',
          msg: 'Authentication failed',
        });
      }
    }

    return response;
  });
}

main().catch(console.error);

// async function main() {
//   const server = new RadiusServer('ipv4');
//   const eapHandler = new EapHandler();

//   await server.listen(1812, async (packet) => {
//     const username = rfc2865.getUserNameString(packet) || 'unknown';
//     packet.secret = username === 'testuser' ? 'secret' : 'other-secret';

//     const eapMessage = rfc2869.getEAPMessage(packet);
//     let response: RadiusPacket;

//     if (!eapMessage) {
//       response = new RadiusPacket(RadiusCodes.AccessChallenge, packet.identifier, packet.authenticator, packet.secret);
//       rfc2869.setEAPMessage(response, eapHandler.createIdentityRequest(packet.identifier));
//       logger.info({
//         user: username,
//         code: RadiusCodeMap[RadiusCodes.AccessChallenge],
//         msg: 'Sending EAP-Identity request',
//       });
//     } else {
//       const eapCode = eapMessage.readUInt8(0);
//       const eapType = eapMessage.readUInt8(4);

//       if (eapCode === EapCodes.Response && eapType === EapTypes.Identity) {
//         response = new RadiusPacket(RadiusCodes.AccessChallenge, packet.identifier, packet.authenticator, packet.secret);
//         rfc2869.setEAPMessage(response, eapHandler.processIdentityResponse(packet, eapMessage));
//         logger.info({
//           user: username,
//           code: RadiusCodeMap[RadiusCodes.AccessChallenge],
//           msg: 'Sending EAP-TLS Start',
//         });
//       } else if (eapCode === EapCodes.Response && eapType === EapTypes.TLS) {
//         response = new RadiusPacket(RadiusCodes.AccessChallenge, packet.identifier, packet.authenticator, packet.secret);
//         const tlsResponse = eapHandler.processTlsHandshake(packet, eapMessage);
//         rfc2869.setEAPMessage(response, tlsResponse);
//         logger.info({
//           user: username,
//           code: RadiusCodeMap[RadiusCodes.AccessChallenge],
//           msg: 'Sending EAP-TLS Server Hello or Client Response',
//         });
//       } else if (eapCode === EapCodes.Success) { // EAP-Successを直接チェック
//         // 修正: 2025-02-28 - Access-ChallengeからAccess-Acceptに変更
//         response = new RadiusPacket(RadiusCodes.AccessAccept, packet.identifier, packet.authenticator, packet.secret);
//         rfc2869.setEAPMessage(response, eapHandler.completeTlsHandshake(packet));
//         logger.info({
//           user: username,
//           code: RadiusCodeMap[RadiusCodes.AccessAccept],
//           msg: 'Authentication response sent (EAP-Success)',
//         });
//       } else {
//         response = new RadiusPacket(RadiusCodes.AccessReject, packet.identifier, packet.authenticator, packet.secret);
//         logger.warn({
//           user: username,
//           code: RadiusCodeMap[RadiusCodes.AccessReject],
//           cause: 'Invalid EAP sequence',
//           msg: 'Authentication failed',
//         });
//       }
//     }

//     return response;
//   });
// }

// main().catch(console.error);
