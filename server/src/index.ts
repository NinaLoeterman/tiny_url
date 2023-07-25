import Fastify from "fastify";
import dotenv from "dotenv";
import "reflect-metadata";
import cors from "@fastify/cors";
import { getLongUrlController } from "./controllers/get-long-url.controller";
import { shortenUrlController } from "./controllers/shorten.controller";
import { connectionSource } from "../ormconfig";

const fastify = Fastify({
  logger: true,
});

dotenv.config();
fastify.register(cors);

fastify.register(getLongUrlController);
fastify.register(shortenUrlController);

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 8000 });
    initDb();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

const initDb = async () => {
  if (connectionSource.isInitialized) {
    console.log("DB is already initialized");
    return;
  }
  await connectionSource.initialize();
};
