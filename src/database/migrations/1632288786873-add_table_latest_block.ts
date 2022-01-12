import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class addTableLatestBlock1632288786873 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'latest_block',
        columns: [
          {
            name: 'type',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'block',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'tinyint',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'latest_block',
      new TableIndex({
        name: 'TYPE_UNIQUE',
        columnNames: ['type'],
        isUnique: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('latest_block');
  }
}
