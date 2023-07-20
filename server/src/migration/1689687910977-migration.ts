import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1689687910977 implements MigrationInterface {
    name = 'Migration1689687910977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "height" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "height"`);
    }

}
