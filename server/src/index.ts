import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors);

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

fastify.post("/long-url", async (request: any) => {
  console.log(request.body);
  return { tinyURL: "imtiny.com" };
});

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
