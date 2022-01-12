import { defaultConfig } from '@database/config/config';
import { ConnectionOptions } from 'typeorm';

const ormConfig: ConnectionOptions = {
  ...defaultConfig,
  migrationsTableName: 'migrate_tables',
  synchronize: false,
  logging: true,
  logger: 'file',
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export = ormConfig;
