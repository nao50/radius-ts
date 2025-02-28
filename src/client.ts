// src/client.ts
import dgram from "dgram";
import { RadiusPacket } from "./packet";

export class RadiusClient {
	private socket: dgram.Socket;

	constructor(ipVersion: "ipv4" | "ipv6" = "ipv4") {
		this.socket = dgram.createSocket(ipVersion === "ipv4" ? "udp4" : "udp6");
	}

	async send(
		packet: RadiusPacket,
		host: string,
		port: number,
	): Promise<RadiusPacket> {
		const encodedPacket = packet.encode();
		return new Promise((resolve, reject) => {
			this.socket.send(encodedPacket, port, host, (err) => {
				if (err) reject(err);
			});
			this.socket.once("message", (msg) => {
				const response = RadiusPacket.decode(msg);
				resolve(response);
			});
		});
	}
}
