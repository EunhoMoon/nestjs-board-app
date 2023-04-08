import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './boards/configs/typeormConfig';

@Module({
  imports: [BoardsModule, TypeOrmModule.forRoot(typeormConfig)],
})
export class AppModule {}
