import { FastifyInstance } from "fastify";
import { Url } from "../entity/Url.entity";
import { connectionSource } from "../../ormconfig";

export async function shortenUrlController(app: FastifyInstance) {
  app.post("/shorten", async (request: any) => {
    const shortUrl = "tiny.short/0";
    const url = new Url();
    url.shortUrl = shortUrl;
    url.longUrl = request.body.longUrl;

    await connectionSource.manager.save(url);
    return { shortUrl };
  });
}
