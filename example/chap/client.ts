// example/client.ts
import { RadiusClient } from '../../src/client';
import { RadiusPacket } from '../../src/radius-packet';
import { RadiusCodes } from "../../src/codes";
import { rfc2865, rfc2865AttributeTypes } from '../../src/attribute/rfc2865';
import { Buffer } from 'buffer';
import { randomBytes, randomInt } from 'crypto';
import { logger } from '../../src/logger';

async function main() {
  const client = new RadiusClient('ipv4'); // デフォルトはIPv4
  const authenticator = randomBytes(16);
  const packet = new RadiusPacket(RadiusCodes.AccessRequest, undefined, authenticator, 'secret');
  rfc2865.setUserName(packet, 'testuser');
  // rfc2865.setUserPassword(packet, 'password');
  let chapIdent: number;

  const codeMap: { [key: number]: string } = {
    [RadiusCodes.AccessRequest]: 'AccessRequest',
    [RadiusCodes.AccessAccept]: 'AccessAccept',
    [RadiusCodes.AccessReject]: 'AccessReject',
    [RadiusCodes.AccessChallenge]: 'AccessChallenge',
  };

  // try {
  //   const response = await client.send(packet, 'localhost', 1812);
  //   console.log('Response:', response);
  // } catch (error) {
  //   console.error(`Error: ${error}`);
  // } finally {
  //   process.exit(0);
  // }
  try {
    const challengeResponse = await client.send(packet, 'localhost', 1812);
    const challenge = rfc2865.getCHAPChallenge(challengeResponse);
    if (challengeResponse.code === RadiusCodes.AccessChallenge && challenge) {
      chapIdent = randomInt(0, 256); // CHAP Identをランダムに生成
      const chapResponse = packet.generateChapResponse('password', chapIdent, challenge);
      // const chapPacket = new RadiusPacket(RadiusCodes.AccessRequest, undefined, authenticator, 'secret');
      // rfc2865.setUserName(chapPacket, 'testuser');
      // rfc2865.setCHAPPassword(chapPacket, chapResponse);
      // 同一identifierを使用し、属性を更新
      packet.deleteAttribute(rfc2865AttributeTypes['User_Password']); // PAP用属性をクリア
      rfc2865.setCHAPPassword(packet, chapResponse);

      logger.info({
        user: 'testuser',
        code: codeMap[RadiusCodes.AccessRequest],
        msg: 'Sending CHAP response',
      });
      const finalResponse = await client.send(packet, 'localhost', 1812);
      logger.info({
        user: 'testuser',
        code: codeMap[finalResponse.code],
        ...(finalResponse.code === RadiusCodes.AccessReject ? { cause: 'Server rejected CHAP' } : {}),
        msg: 'Response received (CHAP)',
      });
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

main().catch(console.error);