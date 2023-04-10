import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'board_project',
  schema: 'board_app',
  username: 'postgres',
  password: '1234',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
