import "reflect-metadata";
import { DataSource } from "typeorm";
import { Url } from "./entity/Url";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  synchronize: true,
  logging: false,
  entities: [Url],
  migrations: ["src/migration/*.ts"],
  subscribers: ["src/entity/*.ts"],
});
