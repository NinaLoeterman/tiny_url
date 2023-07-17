import Fastify from "fastify";
import cors from "@fastify/cors";
import { getLongUrlController } from "./controllers/get-long-url.controller";
import { shortenUrlController } from "./controllers/shorten.controller";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors);

fastify.register(getLongUrlController);
fastify.register(shortenUrlController);

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 8000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
