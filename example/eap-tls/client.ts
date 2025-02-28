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
import { EapHandler } from '../../src/eap';

async function main() {
  const client = new RadiusClient('ipv4');
  const authenticator = randomBytes(16);
  const packet = new RadiusPacket(RadiusCodes.AccessRequest, undefined, authenticator, 'secret');
  rfc2865.setUserName(packet, 'testuser');
  const eapHandler = new EapHandler();

  try {
    logger.info({
      user: 'testuser',
      code: RadiusCodeMap[RadiusCodes.AccessRequest],
      msg: 'Sending initial EAP request',
    });
    let response = await client.send(packet, 'localhost', 1812);
    let eapMessage = rfc2869.getEAPMessage(response);

    if (response.code === RadiusCodes.AccessChallenge && eapMessage && eapMessage.readUInt8(0) === EapCodes.Request && eapMessage.readUInt8(4) === EapTypes.Identity) {
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
      response = await client.send(packet, 'localhost', 1812);
      eapMessage = rfc2869.getEAPMessage(response);

      if (response.code === RadiusCodes.AccessChallenge && eapMessage && eapMessage.readUInt8(0) === EapCodes.Request && eapMessage.readUInt8(4) === EapTypes.TLS) {
        const tlsClientHello = Buffer.from('TLS Client Hello');
        const eapTlsResp = Buffer.concat([
          Buffer.from([EapCodes.Response, packet.identifier, 0, 6 + tlsClientHello.length, EapTypes.TLS, 0x00]),
          tlsClientHello,
        ]);
        packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
        rfc2869.setEAPMessage(packet, eapTlsResp);

        logger.info({
          user: 'testuser',
          code: RadiusCodeMap[RadiusCodes.AccessRequest],
          msg: 'Sending EAP-TLS Client Hello',
        });
        response = await client.send(packet, 'localhost', 1812);
        eapMessage = rfc2869.getEAPMessage(response);

        logger.debug({
          user: 'testuser',
          serverHelloEap: eapMessage ? eapMessage.toString('hex') : 'null',
          msg: 'Received Server Hello response',
        });

        let completeData = eapHandler.reassembleFragments(packet, eapMessage!);

        // 修正: 2025-02-28 - Access-Accept/EAP-Successの処理を修正（行90〜110付近）
        while (response.code === RadiusCodes.AccessChallenge && eapMessage && eapMessage.length >= 5 && (eapMessage.readUInt8(5) & 0x40)) { // More Fragments
          logger.debug({
            user: 'testuser',
            msg: 'Awaiting more fragments for Server Hello',
          });
          packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
          rfc2869.setEAPMessage(packet, Buffer.from([EapCodes.Response, packet.identifier, 0, 6, EapTypes.TLS, 0x00])); // ACK
          response = await client.send(packet, 'localhost', 1812);
          eapMessage = rfc2869.getEAPMessage(response);
          completeData = eapHandler.reassembleFragments(packet, eapMessage!);
        }

        if (response.code === RadiusCodes.AccessAccept && eapMessage && eapMessage.readUInt8(0) === EapCodes.Success) {
          logger.info({
            user: 'testuser',
            code: RadiusCodeMap[RadiusCodes.AccessAccept],
            msg: 'Response received (EAP-Success)',
          });
          return; // EAP-Successで即時終了
        } else if (completeData.length > 0) {
          const clientCert = eapHandler.getClientCert();
          const clientKeyExchange = Buffer.from('Client Key Exchange');
          const finished = Buffer.from('Finished');
          const responseData = Buffer.concat([clientCert, clientKeyExchange, finished]);
          const responseFragments = eapHandler.fragmentData(responseData, packet.identifier, 247);

          packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
          rfc2869.setEAPMessage(packet, responseFragments[0]);

          logger.info({
            user: 'testuser',
            code: RadiusCodeMap[RadiusCodes.AccessRequest],
            msg: 'Sending EAP-TLS Client Response',
          });
          response = await client.send(packet, 'localhost', 1812);
          eapMessage = rfc2869.getEAPMessage(response);

          if (response.code === RadiusCodes.AccessAccept && eapMessage && eapMessage.readUInt8(0) === EapCodes.Success) {
            logger.info({
              user: 'testuser',
              code: RadiusCodeMap[RadiusCodes.AccessAccept],
              msg: 'Response received (EAP-Success)',
            });
          }
        }
      }
    }
  } catch (error: any) {
    logger.error({
      user: 'testuser',
      code: 'Unknown',
      cause: error.message,
      stack: error.stack,
      msg: 'Failed to send request or receive response',
    });
  } finally {
    process.exit(0);
  }
}

main();

// async function main() {
//   const client = new RadiusClient('ipv4');
//   const authenticator = randomBytes(16);
//   const packet = new RadiusPacket(RadiusCodes.AccessRequest, undefined, authenticator, 'secret');
//   rfc2865.setUserName(packet, 'testuser');
//   const eapHandler = new EapHandler();

//   try {
//     logger.info({
//       user: 'testuser',
//       code: RadiusCodeMap[RadiusCodes.AccessRequest],
//       msg: 'Sending initial EAP request',
//     });
//     let response = await client.send(packet, 'localhost', 1812);
//     let eapMessage = rfc2869.getEAPMessage(response);

//     if (response.code === RadiusCodes.AccessChallenge && eapMessage && eapMessage.readUInt8(0) === EapCodes.Request && eapMessage.readUInt8(4) === EapTypes.Identity) {
//       const eapIdentityResp = Buffer.concat([
//         Buffer.from([EapCodes.Response, packet.identifier, 0, 5 + 'testuser'.length, EapTypes.Identity]),
//         Buffer.from('testuser'),
//       ]);
//       packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
//       rfc2869.setEAPMessage(packet, eapIdentityResp);

//       logger.info({
//         user: 'testuser',
//         code: RadiusCodeMap[RadiusCodes.AccessRequest],
//         msg: 'Sending EAP-Identity response',
//       });
//       response = await client.send(packet, 'localhost', 1812);
//       eapMessage = rfc2869.getEAPMessage(response);

//       if (response.code === RadiusCodes.AccessChallenge && eapMessage && eapMessage.readUInt8(0) === EapCodes.Request && eapMessage.readUInt8(4) === EapTypes.TLS) {
//         const tlsClientHello = Buffer.from('TLS Client Hello');
//         const eapTlsResp = Buffer.concat([
//           Buffer.from([EapCodes.Response, packet.identifier, 0, 6 + tlsClientHello.length, EapTypes.TLS, 0x00]),
//           tlsClientHello,
//         ]);
//         packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
//         rfc2869.setEAPMessage(packet, eapTlsResp);

//         logger.info({
//           user: 'testuser',
//           code: RadiusCodeMap[RadiusCodes.AccessRequest],
//           msg: 'Sending EAP-TLS Client Hello',
//         });
//         response = await client.send(packet, 'localhost', 1812);
//         eapMessage = rfc2869.getEAPMessage(response);

//         logger.debug({
//           user: 'testuser',
//           serverHelloEap: eapMessage ? eapMessage.toString('hex') : 'null',
//           msg: 'Received Server Hello response',
//         });

//         let completeData = eapHandler.reassembleFragments(packet, eapMessage!);

//         // 修正: 2025-02-28 - EAP-Success後の処理を終了し、フラグメント処理を調整（行90〜110付近）
//         while (response.code === RadiusCodes.AccessChallenge && eapMessage && eapMessage.length >= 5 && (eapMessage.readUInt8(5) & 0x40)) { // More Fragments
//           logger.debug({
//             user: 'testuser',
//             msg: 'Awaiting more fragments for Server Hello',
//           });
//           packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
//           rfc2869.setEAPMessage(packet, Buffer.from([EapCodes.Response, packet.identifier, 0, 6, EapTypes.TLS, 0x00])); // ACK
//           response = await client.send(packet, 'localhost', 1812);
//           eapMessage = rfc2869.getEAPMessage(response);
//           completeData = eapHandler.reassembleFragments(packet, eapMessage!);
//         }

//         if (response.code === RadiusCodes.AccessAccept && eapMessage && eapMessage.readUInt8(0) === EapCodes.Success) {
//           logger.info({
//             user: 'testuser',
//             code: RadiusCodeMap[RadiusCodes.AccessAccept],
//             msg: 'Response received (EAP-Success)',
//           });
//           return; // EAP-Successで即時終了
//         } else if (completeData.length > 0) {
//           const clientCert = eapHandler.getClientCert();
//           const clientKeyExchange = Buffer.from('Client Key Exchange');
//           const finished = Buffer.from('Finished');
//           const responseData = Buffer.concat([clientCert, clientKeyExchange, finished]);
//           const responseFragments = eapHandler.fragmentData(responseData, packet.identifier, 247);

//           packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
//           rfc2869.setEAPMessage(packet, responseFragments[0]);

//           logger.info({
//             user: 'testuser',
//             code: RadiusCodeMap[RadiusCodes.AccessRequest],
//             msg: 'Sending EAP-TLS Client Response',
//           });
//           response = await client.send(packet, 'localhost', 1812);
//           eapMessage = rfc2869.getEAPMessage(response);

//           if (response.code === RadiusCodes.AccessAccept && eapMessage && eapMessage.readUInt8(0) === EapCodes.Success) {
//             logger.info({
//               user: 'testuser',
//               code: RadiusCodeMap[RadiusCodes.AccessAccept],
//               msg: 'Response received (EAP-Success)',
//             });
//           }
//         }
//       }
//     }
//   } catch (error: any) {
//     logger.error({
//       user: 'testuser',
//       code: 'Unknown',
//       cause: error.message,
//       stack: error.stack,
//       msg: 'Failed to send request or receive response',
//     });
//   } finally {
//     process.exit(0);
//   }
// }

// main();
