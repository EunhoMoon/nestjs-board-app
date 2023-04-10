import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'SECRET1234',
      signOptions: {
        expiresIn: 60 * 60,
      },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  exports: [TypeOrmModule, JwtStrategy, PassportModule],
})
export class AuthModule {}
