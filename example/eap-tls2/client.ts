// example/client.ts
import { RadiusClient } from '../../src/client';
import { RadiusPacket } from '../../src/radius-packet';
import { EapPacket } from '../../src/eap-packet';
import { EapHandler } from '../../src/eap';
import { RadiusCodes, EapCodes, EapTypes, RADIUS_ACCESS_REQUEST, RADIUS_ACCESS_CHALLENGE, RADIUS_ACCESS_ACCEPT, RADIUS_ACCESS_REJECT, FLAG_MORE_FRAGMENTS, FLAGS_ACK } from '../../src/codes';
import { rfc2865, rfc2865AttributeTypes } from '../../src/attribute/rfc2865';
import { rfc2869, rfc2869AttributeTypes } from '../../src/attribute/rfc2869';

import { Buffer } from 'buffer';
import { randomBytes } from 'crypto';
import { logger } from '../../src/logger';
import { RadiusCodeMap, EapCodeMap } from '../../src/utils/codes';


/*
 * EAP-TLS Client Sequence (RFC 2865, RFC 3748, RFC 5216):
 * クライアント側の認証フローを示します。
 *
 * Client (NAS)                             RADIUS Server
 *   |                                          |
 *   | ① Access-Request                         |
 *   |    - EAP-Response/Identity               |
 *   |------------------------------------------>|
 *   | ② Access-Challenge                       |
 *   |    - EAP-Request/Identity                |
 *   |<------------------------------------------|
 *   | ③ Access-Request                         |
 *   |    - EAP-Response/Identity (User ID)     |
 *   |------------------------------------------>|
 *   | ④ Access-Challenge                       |
 *   |    - EAP-Request/TLS Start              |
 *   |<------------------------------------------|
 *   | ⑤ Access-Request                         |
 *   |    - EAP-Response/TLS Client Hello       |
 *   |------------------------------------------>|
 *   | ⑥ Access-Challenge                       |
 *   |    - EAP-Request/TLS Server Hello, Cert  |
 *   |<------------------------------------------|
 *   | ⑦ Access-Request                         |
 *   |    - EAP-Response/TLS Client Response    |
 *   |------------------------------------------>|
 *   | ⑧ Access-Challenge (Optional)            |
 *   |    - EAP-Request/TLS Fragmented Data     |
 *   |<------------------------------------------|
 *   | ⑨ Access-Request (Optional)              |
 *   |    - EAP-Response/TLS Fragmented Data    |
 *   |------------------------------------------>|
 *   | ⑩ Access-Accept                          |
 *   |    - EAP-Success                         |
 *   |<------------------------------------------|
 */
async function main() {
  const client = new RadiusClient('ipv4');
  const authenticator = randomBytes(16);
  const packet = new RadiusPacket(RADIUS_ACCESS_REQUEST, Math.floor(Math.random() * 256), authenticator, [], 'secret');
  rfc2865.setUserName(packet, 'testuser');

  try {
    // ① Access-Request: EAP-Response/Identityを送信
    // RFC 2869, Section 5.4: クライアントは初回に EAP-Response/Identity を送信して認証を開始
    const initialEapPacket = new EapPacket(EapCodes.Response, packet.identifier, EapTypes.Identity, Buffer.from('testuser'));
    packet.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: initialEapPacket.encode() });
    let response = await client.send(packet, 'localhost', 1812);
    let eapMessage = rfc2869.getEAPMessage(response);

    // サーバー応答を処理
    while (true) {
      switch (response.code) {
        case RADIUS_ACCESS_CHALLENGE: {
          if (!eapMessage || eapMessage.length < 5) {
            throw new Error('Invalid EAP message received');
          }

          const eapCode = eapMessage.readUInt8(0);  // EAP Code
          const eapType = eapMessage.readUInt8(4);  // EAP Type

          switch (eapCode) {
            case EapCodes.Request:
              switch (eapType) {
                case EapTypes.Identity:
                  // ② Access-Challengeを受けて ③ Access-Requestを生成（EAP-Response/Identity）
                  // RFC 3748, Section 4.1: クライアントは EAP-Request/Identity に対して EAP-Response/Identity を返す
                  // パラメータ: identifier はサーバーと一致させる (RFC 3748, Section 4.1.1)
                  const identityResponse = new EapPacket(EapCodes.Response, response.identifier, EapTypes.Identity, Buffer.from('testuser'));
                  packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
                  packet.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: identityResponse.encode() });
                  logger.info({
                    user: 'testuser',
                    code: 'Access-Request',
                    msg: 'Sending EAP-Response/Identity',
                  });
                  break;
                case EapTypes.MD5Challenge:
                    // MD5 Challengeに対し、NACを送信してEAP-TLSを希望
                    const nakResponse = new EapPacket(
                      EapCodes.Response,
                      response.identifier,
                      EapTypes.Nak,
                      Buffer.from([EapTypes.TLS]) // Desired Auth Type
                    );
                    packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
                    packet.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: nakResponse.encode() });
                    logger.info({
                      user: 'testuser',
                      code: 'Access-Request',
                      msg: 'Sending EAP-Response/Nak (desiring EAP-TLS)',
                    });
                    break;

                case EapTypes.TLS:
                  // ④ Access-Challengeを受けて ⑤ Access-Requestを生成（EAP-Response/TLS Client Hello）
                  // RFC 5216, Section 3.2: EAP-Request/TLS Start に対し、EAP-Response/TLS Client Hello を送信
                  // パラメータ: TLS Client Hello を生成 (仮データ)
                  const tlsClientHello = Buffer.from([/* TLS Client Hello データ（仮） */]);
                  const tlsResponse = new EapPacket(EapCodes.Response, response.identifier, EapTypes.TLS, tlsClientHello);
                  packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
                  packet.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: tlsResponse.encode() });
                  logger.info({
                    user: 'testuser',
                    code: 'Access-Request',
                    msg: 'Sending EAP-Response/TLS Client Hello',
                  });
                  break;

                default:
                  throw new Error(`Unsupported EAP Type: ${eapType}`);
              }
              break;

            default:
              throw new Error(`Unexpected EAP Code in Access-Challenge: ${eapCode}`);
          }

          // フラグメント処理
          // RFC 2869, Section 5.7: フラグメントされた EAP-Request を再組み立てし、必要に応じて ACK を返す
          let eapPacketResult = EapPacket.reassemble(packet, [eapMessage]);
          while (eapMessage!.length >= 6 && (eapMessage!.readUInt8(5) & FLAG_MORE_FRAGMENTS)) {
            // ⑧ Access-Challengeを受けて ⑨ Access-Requestを生成（フラグメントACK）
            logger.debug({
              user: 'testuser',
              msg: 'Awaiting more fragments for Server Hello',
            });
            const ackEapPacket = new EapPacket(EapCodes.Response, response.identifier, EapTypes.TLS, Buffer.alloc(0), FLAGS_ACK);
            packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
            packet.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: ackEapPacket.encode() });
            response = await client.send(packet, 'localhost', 1812);
            eapMessage = rfc2869.getEAPMessage(response);
            eapPacketResult = EapPacket.reassemble(packet, [eapMessage!]);
          }

          // フラグメント再組み立て完了後、次の応答を生成
          if (eapPacketResult.data.length > 0 && eapType === EapTypes.TLS) {
            // ⑥ Access-Challengeを受けて ⑦ Access-Requestを生成（EAP-Response/TLS Client Response）
            // RFC 5216, Section 3.2: TLS Server Hello に対し、Client Key Exchange と Finished を送信
            const tlsClientResponse = Buffer.from([/* TLS Client Key Exchange, Finished データ（仮） */]);
            const clientResponse = new EapPacket(EapCodes.Response, response.identifier, EapTypes.TLS, tlsClientResponse);
            packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
            packet.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: clientResponse.encode() });
            logger.info({
              user: 'testuser',
              code: 'Access-Request',
              msg: 'Sending EAP-Response/TLS Client Response',
            });
          }

          response = await client.send(packet, 'localhost', 1812);
          eapMessage = rfc2869.getEAPMessage(response);
          break;
        }

        case RADIUS_ACCESS_ACCEPT:
          // ⑩ Access-Acceptを受信（EAP-Success）
          // RFC 2869, Section 5.4: EAP-Success で認証成功
          if (eapMessage && eapMessage.readUInt8(0) === EapCodes.Success) {
            logger.info({
              user: 'testuser',
              code: 'Access-Accept',
              msg: 'Response received (EAP-Success)',
            });
            return;
          }
          throw new Error('Invalid EAP Success message');

        case RADIUS_ACCESS_REJECT:
          // ⑪ Access-Rejectを受信（EAP-Failure）
          // RFC 2869, Section 5.4: EAP-Failure で認証失敗
          logger.error({
            user: 'testuser',
            code: 'Access-Reject',
            msg: 'Authentication failed',
          });
          return;

        default:
          throw new Error(`Unexpected RADIUS code: ${response.code}`);
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
//   const packet = new RadiusPacket(RADIUS_ACCESS_REQUEST, Math.floor(Math.random() * 256), authenticator, [], 'secret');
//   rfc2865.setUserName(packet, 'testuser');

//   const eapHandler = new EapHandler();

//   try {
//     // ① Access-Request: EAP-Response/Identityを送信
//     let response = await client.send(packet, 'localhost', 1812);
//     let eapMessage = rfc2869.getEAPMessage(response);

//     if (response.code === RADIUS_ACCESS_CHALLENGE && eapMessage && eapMessage.readUInt8(0) === EapCodes.Request && eapMessage.readUInt8(4) === EapTypes.Identity) {
//       // ② Access-Challengeを受けて ③ Access-Requestを生成（EAP-Response/Identity）
//       const eapPacket = eapHandler.createIdentityRequest(packet);
//       packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
//       packet.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacket.encode() });
//       logger.info({
//         user: 'testuser',
//         code: 'Access-Request',
//         msg: 'Sending EAP-Response/Identity',
//       });
//       response = await client.send(packet, 'localhost', 1812);
//       eapMessage = rfc2869.getEAPMessage(response);

//       if (response.code === RADIUS_ACCESS_CHALLENGE && eapMessage && eapMessage.readUInt8(0) === EapCodes.Request && eapMessage.readUInt8(4) === EapTypes.TLS) {
//         // ④ Access-Challengeを受けて ⑤ Access-Requestを生成（EAP-Response/TLS Client Hello）
//         const eapPacket = eapHandler.processIdentityResponse(packet, eapMessage);
//         packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
//         packet.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacket.encode() });
//         logger.info({
//           user: 'testuser',
//           code: 'Access-Request',
//           msg: 'Sending EAP-Response/TLS Client Hello',
//         });
//         response = await client.send(packet, 'localhost', 1812);
//         eapMessage = rfc2869.getEAPMessage(response);

//         logger.debug({
//           user: 'testuser',
//           serverHelloEap: eapMessage ? eapMessage.toString('hex') : 'null',
//           msg: 'Received Server Hello response',
//         });

//         let eapPacketResult = eapHandler.handleFragmentedResponse(packet, eapMessage!);
//         while (response.code === RADIUS_ACCESS_CHALLENGE && eapMessage && eapMessage.length >= 5 && (eapMessage.readUInt8(5) & FLAG_MORE_FRAGMENTS)) {
//           // ⑨ ⑧ Access-Challengeを受けて⑨ Access-Requestを生成（EAP-Response/TLS Fragmented Data, オプション）
//           logger.debug({
//             user: 'testuser',
//             msg: 'Awaiting more fragments for Server Hello',
//           });
//           packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
//           packet.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacketResult.encode() });
//           response = await client.send(packet, 'localhost', 1812);
//           eapMessage = rfc2869.getEAPMessage(response);
//           eapPacketResult = eapHandler.handleFragmentedResponse(packet, eapMessage!);
//         }

//         if (response.code === RADIUS_ACCESS_ACCEPT && eapMessage && eapMessage.readUInt8(0) === EapCodes.Success) {
//           // ⑩ ⑦～⑨ Access-Requestを受けて⑩ Access-Acceptを受信（EAP-Success）
//           logger.info({
//             user: 'testuser',
//             code: 'Access-Accept',
//             msg: 'Response received (EAP-Success)',
//           });
//           return;
//         } else if (eapPacketResult.data.length > 0) {
//           // ⑦ ⑥ Access-Challengeを受けて⑦ Access-Requestを生成（EAP-Response/TLS Client Response）
//           const eapPacket = eapHandler.processTlsServerHello(packet, eapMessage!);
//           packet.deleteAttribute(rfc2869AttributeTypes['EAP_Message']);
//           packet.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacket.encode() });
//           logger.info({
//             user: 'testuser',
//             code: 'Access-Request',
//             msg: 'Sending EAP-Response/TLS Client Response',
//           });
//           response = await client.send(packet, 'localhost', 1812);
//           eapMessage = rfc2869.getEAPMessage(response);

//           if (response.code === RADIUS_ACCESS_ACCEPT && eapMessage && eapMessage.readUInt8(0) === EapCodes.Success) {
//             // ⑩ ⑦～⑨ Access-Requestを受けて⑩ Access-Acceptを受信（EAP-Success）
//             logger.info({
//               user: 'testuser',
//               code: 'Access-Accept',
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
