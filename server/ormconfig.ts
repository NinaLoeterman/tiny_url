import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
  migrationsTableName: "migrations",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  synchronize: true,
  logging: false,
  entities: ["src/**/**.entity{.ts,.js}"],
  migrations: ["src/migrations/**/*{.ts,.js}"],
  subscribers: ["src/entity/**/*{.ts,.js}"],
});
