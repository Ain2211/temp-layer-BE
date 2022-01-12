import { UserModule } from '@components/user/user.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '@components/auth/auth.service';
import { LocalStrategy } from '@components/auth/strategies/local.strategy';
import { JwtStrategy } from '@components/auth/strategies/jwt.strategy';
import { AuthController } from '@components/auth/auth.controller';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRY },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
