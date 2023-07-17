import { FastifyInstance } from "fastify";

export async function shortenUrlController(app: FastifyInstance) {
  app.post("/shorten", async (request: any) => {
    console.log(request.body);
    return { tinyURL: "imtiny.com" };
  });
}
