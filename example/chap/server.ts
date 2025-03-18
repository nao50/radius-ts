// example/server.ts
import { RadiusServer } from "../../src/server";
import { RadiusPacket } from "../../src/radius";
import { RadiusCodes } from "../../src/codes";
import { rfc2865, rfc2865AttributeTypes } from "../../src/attribute/rfc2865";
import { Buffer } from "buffer";
import { logger } from '../../src/logger';

const codeToString: { [key: number]: string } = Object.fromEntries(
  Object.entries(RadiusCodes).map(([key, value]) => [value, key])
);

async function main() {
	const server = new RadiusServer("ipv4"); // デフォルトはIPv4
  const chapChallenges = new Map<string, Buffer>();

	await server.listen(1812, async (packet) => {
		const username = rfc2865.getUserNameString(packet);
    logger.info({
      user: username,
      code: codeToString[RadiusCodes.AccessRequest]
    });

		// DBからsecretを取得（仮実装）
		packet.secret = username === "testuser" ? "secret" : "other-secret";

    const password = packet.secret
    ? rfc2865.getUserPassword(packet)?.toString()
    : undefined;

		// if (packet.secret && password) {
		// 	const decryptedPassword = packet
		// 		.decryptUserPassword(rfc2865.getUserPassword(packet)!, packet.secret)
		// 		.toString();
		// 	console.log(
		// 		`Received: username=${username}, password=${decryptedPassword}`,
		// 	);

		// 	const responseCode = username === 'testuser' && decryptedPassword === 'password'
    //     ? RadiusCodes.AccessAccept
    //     : RadiusCodes.AccessReject;
    //   const response = new RadiusPacket(
    //     responseCode,
    //     packet.identifier,
    //     packet.authenticator,
    //     packet.secret
    //   );

    //   logger.info({
    //     user: username,
    //     code: codeToString[responseCode],
    //     ...(responseCode === RadiusCodes.AccessReject ? { cause: 'Invalid credentials' } : {}),
    //   });

		// 	return response;
		// }

    // PAP認証
    const papPassword = packet.secret ? rfc2865.getUserPassword(packet) : undefined;
    if (papPassword) {
      const decryptedPassword = packet.decryptUserPassword(papPassword, packet.secret!).toString();
      logger.info({
        user: username,
        code: codeToString[RadiusCodes.AccessRequest],
        msg: 'Authentication request received (PAP)',
      });

      const responseCode = username === 'testuser' && decryptedPassword === 'password'
        ? RadiusCodes.AccessAccept
        : RadiusCodes.AccessReject;
      const response = new RadiusPacket(responseCode, packet.identifier, packet.authenticator, packet.secret);

      logger.info({
        user: username,
        code: codeToString[responseCode],
        ...(responseCode === RadiusCodes.AccessReject ? { cause: 'Invalid credentials' } : {}),
        msg: 'Authentication response sent (PAP)',
      });
      return response;
    }

    // CHAP認証
    const chapPassword = rfc2865.getCHAPPassword(packet);
    const challengeKey = `${packet.identifier}-${username}`;
    console.log('challengeKey:::', challengeKey)
    if (!chapPassword) {
      // CHAPチャレンジ送信
      const challenge = packet.generateChapChallenge();
      chapChallenges.set(challengeKey, challenge);
      console.log('chapChallenges:::', chapChallenges)
      const response = new RadiusPacket(
        RadiusCodes.AccessChallenge,
        packet.identifier,
        packet.authenticator,
        packet.secret
      );
      rfc2865.setCHAPChallenge(response, challenge);
      logger.info({
        user: username,
        code: codeToString[RadiusCodes.AccessChallenge],
        msg: 'CHAP challenge sent',
      });
      return response;
    }

    // const challenge = rfc2865.getCHAPChallenge(packet);
    const storedChallenge = chapChallenges.get(challengeKey);

    console.log('chapPassword:::', chapPassword)
    console.log('storedChallenge:::', storedChallenge)

    if (chapPassword && storedChallenge) {
      const isValid = packet.verifyChapResponse(chapPassword, 'password', storedChallenge);
      const responseCode = isValid ? RadiusCodes.AccessAccept : RadiusCodes.AccessReject;
      const response = new RadiusPacket(responseCode, packet.identifier, packet.authenticator, packet.secret);

      logger.info({
        user: username,
        code: codeToString[responseCode],
        ...(responseCode === RadiusCodes.AccessReject ? { cause: 'Invalid CHAP response' } : {}),
        msg: 'Authentication response sent (CHAP)',
      });
      chapChallenges.delete(challengeKey);
      return response;
    }

    logger.warn({
      user: username,
      code: codeToString[RadiusCodes.AccessReject],
      cause: 'Missing password or secret',
    });

		return new RadiusPacket(
			RadiusCodes.AccessReject,
			packet.identifier,
			packet.authenticator,
      packet.secret,
		);
	});
}

main().catch(console.error);
