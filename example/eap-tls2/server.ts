// example/server.ts
import { RadiusServer } from '../../src/server';
import { RadiusPacket } from '../../src/radius-packet';
import { EapHandler } from '../../src/eap';
import { EapCodes, EapTypes, FLAG_MORE_FRAGMENTS, RADIUS_ACCESS_REQUEST, RADIUS_ACCESS_CHALLENGE, RADIUS_ACCESS_ACCEPT, RADIUS_ACCESS_REJECT } from '../../src/codes';
import { rfc2865, rfc2865AttributeTypes } from '../../src/attribute/rfc2865';
import { rfc2869, rfc2869AttributeTypes } from '../../src/attribute/rfc2869';
import { logger } from '../../src/logger';

/*
 * EAP-TLS Server Sequence (RFC 2865, RFC 3748, RFC 5216):
 * サーバー側の認証フローを示します。
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
  const server = new RadiusServer('ipv4');
  const eapHandler = new EapHandler();

  await server.listen(1812, async (packet) => {
    const username = rfc2865.getUserNameString(packet) || 'unknown';
    const response = new RadiusPacket(RADIUS_ACCESS_CHALLENGE, packet.identifier, packet.authenticator, [], username === 'testuser' ? 'secret' : undefined);
    const eapMessage = rfc2869.getEAPMessage(packet); // RFC 2869: EAP-Message属性を取得

    // RFC 2869, Section 5.4: 初回のAccess-RequestにEAP-Messageが必須
    if (!eapMessage) {
      // PAP/CHAP Handler
      throw new Error('Initial Access-Request must include EAP-Message');
    }

    const eapCode = eapMessage.readUInt8(0); // EAP Code
    const eapType = eapMessage.readUInt8(4); // EAP Type

    switch (eapCode) {
      case EapCodes.Response:
        switch (eapType) {
          case EapTypes.Identity:
            // // ① Access-Request (EAP-Response/Identity) を受けて② Access-Challenge (EAP-Request/TLS Start) を生成
            // // RFC 3748, Section 5.1: クライアントが自発的にEAP-Response/Identityを送信可能
            // const eapPacketStart = eapHandler.processIdentityResponse(packet, eapMessage);
            // response.code = RADIUS_ACCESS_CHALLENGE;
            // response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacketStart.encode() });
            // logger.info({
            //   user: username,
            //   code: 'Access-Challenge',
            //   msg: 'Sending EAP-Request/TLS Start',
            // });
            // break;
            // ① Identityを受けてMD5 Challengeを送信
            const eapPacketMD5 = eapHandler.processMD5Challenge(packet);
            response.code = RADIUS_ACCESS_CHALLENGE;
            response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacketMD5.encode() });
            logger.info({
              user: username,
              code: 'Access-Challenge',
              msg: 'Sending EAP-Request/MD5-Challenge',
            });
            break;

          case EapTypes.MD5Challenge:
          case EapTypes.Nak:
            const desiredTypes = eapHandler.extractDesiredEapTypes(eapMessage);
            if (desiredTypes.length > 0) {
              const supportedType = desiredTypes.find(type => eapHandler.isEapTypeSupported(type));
              if (supportedType === EapTypes.TLS) {
                const eapPacketNext = eapHandler.startEapTls(packet);
                response.code = RADIUS_ACCESS_CHALLENGE;
                response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacketNext.encode() });
                logger.info({
                    user: username,
                    code: 'Access-Challenge',
                    msg: 'Sending EAP-Request/TLS Start after Nak',
                });
              } else {
                // サポートされていない場合、EAP-Failure を送信
                const eapFailure = eapHandler.createFailureResponse(packet);
                response.code = RADIUS_ACCESS_REJECT;
                response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapFailure.encode() });
                logger.warn({
                    user: username,
                    code: 'Access-Reject',
                    cause: `Unsupported EAP type requested in Nak: ${desiredTypes}`,
                });
              }
            }
            break;
          case EapTypes.TLS:
            const tlsSession = eapHandler.getTlsSession(packet); // セッション状態を確認
            if (!tlsSession.initialized) {
                // 初回はstartフラグのみ送信
                const eapPacketStart = eapHandler.startEapTls(packet);
                response.code = RADIUS_ACCESS_CHALLENGE;
                response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacketStart.encode() });
                logger.info({
                    user: username,
                    code: 'Access-Challenge',
                    msg: 'Sending EAP-Request/TLS Start',
                });
            } else {
                // クライアントの応答後、TLSハンドシェイクを継続
                const eapPacketNext = eapHandler.processTlsClientHello(packet, eapMessage);
                response.code = RADIUS_ACCESS_CHALLENGE;
                response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacketNext.encode() });
                logger.info({
                    user: username,
                    code: 'Access-Challenge',
                    msg: 'Sending EAP-Request/TLS ServerHello',
                });
            }
            break;
            // // ③ Access-Request (EAP-Response/TLS Client Hello) を受けて④ Access-Challenge (EAP-Request/TLS Server Hello, Cert) を生成
            // // RFC 5216, Section 3.2: EAP-TLS Client Helloを受け取り、Server Helloを返す
            // const eapPacketTls = eapHandler.processTlsClientHello(packet, eapMessage);
            // response.code = RADIUS_ACCESS_CHALLENGE;
            // response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacketTls.encode() });
            // logger.info({
            //   user: username,
            //   code: 'Access-Challenge',
            //   msg: 'Sending EAP-Request/TLS Server Hello, Cert or Fragmented Data',
            // });

            // // RFC 5216, Section 2.2: Mフラグでフラグメント処理を確認
            // if (eapPacketTls.flags & FLAG_MORE_FRAGMENTS) {
            //   response.code = RADIUS_ACCESS_CHALLENGE;
            //   response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacketTls.encode() });
            //   logger.debug({
            //     user: username,
            //     msg: 'Sending additional EAP-Request/TLS Fragmented Data',
            //   });
            // }

            // // ⑤～⑦ Access-Request (EAP-Response/TLS Client Response or Fragmented Data) を受けて⑧ Access-Accept (EAP-Success) を生成
            // if (eapHandler.isTlsHandshakeComplete(packet)) {
            //   const eapSuccess = eapHandler.completeTlsHandshake(packet);
            //   response.code = RADIUS_ACCESS_ACCEPT;
            //   response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapSuccess.encode() });
            //   logger.info({
            //     user: username,
            //     code: 'Access-Accept',
            //     msg: 'Sending EAP-Success',
            //   });
            // }
            // break;

          default:
            // 不正なEAPタイプの場合
            // RFC 3748, Section 4.1: 未サポートのタイプはEAP-Failureで応答
            const eapFailureUnsupported = eapHandler.createFailureResponse(packet);
            response.code = RADIUS_ACCESS_REJECT;
            response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapFailureUnsupported.encode() });
            logger.warn({
              user: username,
              code: 'Access-Reject',
              cause: `Unsupported EAP Type: ${eapType}`,
              msg: 'Authentication failed',
            });
            break;
        }
        break;

      case EapCodes.Request:
        // RFC 3748, Section 4.1: クライアントがEAP-Requestを送るのは異常
        const eapFailureRequest = eapHandler.createFailureResponse(packet);
        response.code = RADIUS_ACCESS_REJECT;
        response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapFailureRequest.encode() });
        logger.warn({
          user: username,
          code: 'Access-Reject',
          cause: 'Invalid EAP sequence: client sent EAP-Request',
          msg: 'Authentication failed',
        });
        break;

      default:
        // 不正なEAPコードの場合
        // RFC 3748, Section 4.1: 未定義のコードはEAP-Failureで応答
        const eapFailureCode = eapHandler.createFailureResponse(packet);
        response.code = RADIUS_ACCESS_REJECT;
        response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapFailureCode.encode() });
        logger.warn({
          user: username,
          code: 'Access-Reject',
          cause: `Unexpected EAP Code: ${eapCode}`,
          msg: 'Authentication failed',
        });
        break;
    }

    // RFC 2865, Section 2.3: ネットワーク遅延による再送を検出して処理
    // const duplicateResponse = eapHandler.handleDuplicateRequest(packet);
    // if (duplicateResponse) {
    //   response.code = RADIUS_ACCESS_REJECT;
    //   response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: duplicateResponse.encode() });
    //   logger.warn({
    //     user: username,
    //     code: 'Access-Reject',
    //     cause: 'Duplicate request detected',
    //     msg: 'Authentication failed due to duplicate',
    //   });
    // }

    return response;
  });
}

main().catch(console.error);

// async function main() {
//   const server = new RadiusServer('ipv4');
//   const eapHandler = new EapHandler();

//   await server.listen(1812, async (packet) => {
//     const username = rfc2865.getUserNameString(packet) || 'unknown';
//     const response: RadiusPacket = new RadiusPacket(RADIUS_ACCESS_CHALLENGE, packet.identifier, packet.authenticator, [], username === 'testuser' ? 'secret' : undefined);
//     const eapMessage = rfc2869.getEAPMessage(packet);

//     if (!eapMessage) {
//       // ① Access-Requestを受けて② Access-Challengeを生成（EAP-Request/Identity）
//       const eapPacket = eapHandler.createIdentityRequest(packet);
//       response.code = RADIUS_ACCESS_CHALLENGE;
//       response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacket.encode() });
//       logger.info({
//         user: username,
//         code: 'Access-Challenge',
//         msg: 'Sending EAP-Request/Identity',
//       });
//     } else {
//       const eapCode = eapMessage.readUInt8(0);
//       const eapType = eapMessage.readUInt8(4);

//       if (eapCode === EapCodes.Response && eapType === EapTypes.Identity) {
//         // ③ Access-Requestを受けて④ Access-Challengeを生成（EAP-Request/TLS Start）
//         const eapPacket = eapHandler.processIdentityResponse(packet, eapMessage);
//         response.code = RADIUS_ACCESS_CHALLENGE;
//         response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacket.encode() });
//         logger.info({
//           user: username,
//           code: 'Access-Challenge',
//           msg: 'Sending EAP-Request/TLS Start',
//         });
//       } else if (eapCode === EapCodes.Response && eapType === EapTypes.TLS) {
//         // ⑤ Access-Requestを受けて⑥ Access-Challengeを生成（EAP-Request/TLS Server Hello, Cert）
//         // ⑦ Access-Requestを受けて⑧ Access-Challengeを生成（EAP-Request/TLS Fragmented Data, オプション）
//         const eapPacket = eapHandler.processTlsClientHello(packet, eapMessage);
//         response.code = RADIUS_ACCESS_CHALLENGE;
//         response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacket.encode() });
//         logger.info({
//           user: username,
//           code: 'Access-Challenge',
//           msg: 'Sending EAP-Request/TLS Server Hello, Cert or Fragmented Data',
//         });

//         // フラグメント処理がある場合、8回目以降のチャレンジを生成
//         if (eapPacket.flags & FLAG_MORE_FRAGMENTS) { // Mフラグチェック
//           response.code = RADIUS_ACCESS_CHALLENGE;
//           response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacket.encode() });
//           logger.debug({
//             user: username,
//             msg: 'Sending additional EAP-Request/TLS Fragmented Data',
//           });
//         }
//       } else if (eapCode === EapCodes.Response && eapMessage.length >= 5 && (eapMessage.readUInt8(5) & FLAG_MORE_FRAGMENTS)) {
//         // ⑧ Access-Challengeを受けて⑨ Access-Requestを生成（EAP-Response/TLS Fragmented Data, オプション）
//         const eapPacket = eapHandler.handleFragmentedResponse(packet, eapMessage);
//         response.code = RADIUS_ACCESS_CHALLENGE;
//         response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacket.encode() });
//         logger.info({
//           user: username,
//           code: 'Access-Challenge',
//           msg: 'Processing EAP-Response/TLS Fragmented Data',
//         });
//       } else if (eapCode === EapCodes.Response && eapType === EapTypes.TLS) {
//         // ⑦～⑨ Access-Requestを受けて⑩ Access-Acceptを生成（EAP-Success）
//         const eapPacket = eapHandler.completeTlsHandshake(packet);
//         response.code = RADIUS_ACCESS_ACCEPT;
//         response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacket.encode() });
//         logger.info({
//           user: username,
//           code: 'Access-Accept',
//           msg: 'Sending EAP-Success',
//         });
//       } else {
//         // ⑪ Access-Reject: EAP-Failureを生成（分岐: 認証失敗）
//         const eapPacket = eapHandler.createFailureResponse(packet);
//         response.code = RADIUS_ACCESS_REJECT;
//         response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: eapPacket.encode() });
//         logger.warn({
//           user: username,
//           code: 'Access-Reject',
//           cause: 'Invalid EAP sequence',
//           msg: 'Authentication failed',
//         });
//       }
//     }

//     // ⑫ Duplicate Access-Request: 再送を検出（分岐: ネットワーク遅延）
//     const duplicateResponse = eapHandler.handleDuplicateRequest(packet);
//     if (duplicateResponse) {
//       response.code = RADIUS_ACCESS_REJECT;
//       response.addAttribute({ type: rfc2869AttributeTypes['EAP_Message'], value: duplicateResponse.encode() });
//       logger.warn({
//         user: username,
//         code: 'Access-Reject',
//         cause: 'Duplicate request detected',
//         msg: 'Authentication failed due to duplicate',
//       });
//     }

//     return response;
//   });
// }

// main().catch(console.error);

