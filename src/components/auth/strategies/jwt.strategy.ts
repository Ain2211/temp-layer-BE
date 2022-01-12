import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '@components/user/user.service';
import { User } from '@components/user/entity/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate({ sub: id }: { sub: string | number }): Promise<Partial<User>> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
