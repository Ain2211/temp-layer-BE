import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class addTableConfig1631864099416 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'configs',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'rebalancer_address',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'upper_value',
            default: 5,
            type: 'int',
          },
          {
            name: 'lower_value',
            default: 5,
            type: 'int',
          },
          {
            name: 'price_move',
            default: 50,
            type: 'int',
          },
          {
            name: 'fee',
            default: 5,
            type: 'int',
          },
          {
            name: 'running',
            default: 1,
            type: 'tinyint(4)',
          },
          {
            name: 'need_restart_rebalance',
            default: 0,
            type: 'tinyint(4)',
          },
          {
            name: 'token0',
            type: 'varchar',
          },
          {
            name: 'token1',
            type: 'varchar',
          },
          {
            name: 'uid',
            isNullable: true,
            type: 'varchar',
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
    await queryRunner.createIndices('configs', [
      new TableIndex({
        columnNames: ['rebalancer_address'],
        isUnique: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('configs');
  }
}
