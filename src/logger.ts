// src/logger.ts
import pino from 'pino';
import { randomUUID } from "crypto";
// import { v4 as uuidv4 } from 'uuid';

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  formatters: {
    level: (label) => ({ level: label }),
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  base: {
    id: randomUUID(), // 各ログにユニークIDを付与
  },
});

export default logger;