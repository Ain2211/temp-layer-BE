import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export interface PayloadJwt {
  sub: number;
  iat: number;
  exp: number;
}

export const UserID = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    try {
      const token = request.headers.authorization.replace('Bearer ', '');

      const payload = new JwtService({
        secret: process.env.JWT_SECRET,
      }).decode(token);

      return payload.sub;
    } catch (e) {
      throw new HttpException(
        { key: 'Invalid access token' },
        HttpStatus.BAD_REQUEST,
      );
    }
  },
);
