export const MASTER_DB = 'master';
export const REPLICA_DB = 'replica';
interface DatabaseConfig {
  type: 'mysql';
  name?: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: string[];
  logging: boolean;
  autoLoadEntities: boolean;
}

export const defaultConfig: DatabaseConfig = {
  type: 'mysql',
  host: process.env.MASTER_DATABASE_HOST,
  port: Number(process.env.MASTER_DATABASE_PORT),
  username: process.env.MASTER_DATABASE_USERNAME,
  password: process.env.MASTER_DATABASE_PASSWORD,
  database: process.env.MASTER_DATABASE_NAME,
  logging: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
};

// master for write and replica for read
export const masterConfig: DatabaseConfig = {
  name: MASTER_DB,
  type: 'mysql',
  host: process.env.MASTER_DATABASE_HOST,
  port: parseInt(process.env.MASTER_DATABASE_PORT),
  username: process.env.MASTER_DATABASE_USERNAME,
  password: process.env.MASTER_DATABASE_PASSWORD,
  database: process.env.MASTER_DATABASE_NAME,
  logging: true,
  autoLoadEntities: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};

export const replicaConfig: DatabaseConfig = {
  name: REPLICA_DB,
  type: 'mysql',
  host: process.env.REPORT_DATABASE_HOST,
  port: parseInt(process.env.REPORT_DATABASE_PORT),
  username: process.env.REPORT_DATABASE_USERNAME,
  password: process.env.REPORT_DATABASE_PASSWORD,
  database: process.env.REPORT_DATABASE_NAME,
  logging: true,
  autoLoadEntities: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
