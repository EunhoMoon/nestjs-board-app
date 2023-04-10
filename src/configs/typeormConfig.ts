import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import * as process from 'process';

const dbConfig = config.get('db');

export const typeormConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  schema: process.env.RDS_SCHEMA || dbConfig.schema,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: dbConfig.synchronize,
  logging: ['query', 'error'],
};
