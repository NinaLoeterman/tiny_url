import { FastifyInstance } from "fastify";

export async function getLongUrlController(app: FastifyInstance) {
  app.get("/long-url", async (request, reply) => {
    return { hello: "worldssss" };
  });
}
