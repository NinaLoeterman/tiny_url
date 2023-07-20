import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1689689002770 implements MigrationInterface {
    name = 'Migration1689689002770'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "url" ("id" SERIAL NOT NULL, "shortUrl" character varying NOT NULL, "longUrl" character varying NOT NULL, CONSTRAINT "PK_7421088122ee64b55556dfc3a91" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "url"`);
    }

}
