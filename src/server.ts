// src/server.ts
import dgram from "dgram";
import { RadiusPacket } from "./radius";

export class RadiusServer {
	private socket: dgram.Socket;

	constructor(ipVersion: "ipv4" | "ipv6" = "ipv4") {
		this.socket = dgram.createSocket(ipVersion === "ipv4" ? "udp4" : "udp6");
	}

  async listen(port: number, handler: (packet: RadiusPacket) => Promise<RadiusPacket>): Promise<void> {
    this.socket.on('message', async (msg, rinfo) => {
      const packet = RadiusPacket.decode(msg, 'secret');
      const response = await handler(packet);
      const encodedResponse = response.encode();
      this.socket.send(encodedResponse, rinfo.port, rinfo.address);
    });

    return new Promise((resolve) => {
      this.socket.bind(port, () => {
        console.log(`RADIUS server listening on port ${port}`);
        resolve();
      });
    });
  }
}
