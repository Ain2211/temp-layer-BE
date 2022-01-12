import { ResponseUserDto } from '@components/auth/dto/response-user.dto';
import { User } from '@components/user/entity/user.entity';
import { UserService } from '@components/user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<Partial<User>> {
    const user = await this.usersService.findUserByEmail(email);
    if (!user) return null;

    const correctPass = await bcrypt.compare(pass, user.password);
    if (!correctPass) return null;
    
    return {
      id: user.id,
    };
  }

  async login(req): Promise<ResponseUserDto> {
    const user = req.user;
    const payload = { sub: user.id };
    const response = {
      access_token: this.jwtService.sign(payload),
    };
    return response;
  }
}
