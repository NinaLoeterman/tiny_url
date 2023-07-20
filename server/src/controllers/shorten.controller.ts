import { FastifyInstance } from "fastify";
import { AppDataSource } from "../data-source";
import { Url } from "../entity/Url";

export async function shortenUrlController(app: FastifyInstance) {
  app.post("/shorten", async (request: any) => {
    const shortUrl = "tiny.short/0";
    const url = new Url();
    url.shortUrl = shortUrl;
    url.longUrl = request.body.longUrl;

    await AppDataSource.manager.save(url);
    return { shortUrl };
  });
}
