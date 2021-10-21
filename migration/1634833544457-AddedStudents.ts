import {MigrationInterface, QueryRunner} from "typeorm";

export class AddedStudents1634833544457 implements MigrationInterface {
    name = 'AddedStudents1634833544457'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`student\` (\`id\` char(36) NOT NULL, \`isPublished\` tinyint NOT NULL DEFAULT 0, \`created\` datetime NOT NULL, \`updated\` datetime NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`student\``);
    }
}
