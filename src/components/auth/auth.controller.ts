import { AuthService } from '@components/auth/auth.service';
import { ResponseUserDto } from '@components/auth/dto/response-user.dto';
import { LocalAuthGuard } from '@components/auth/guards/local-auth.guard';
import { LoginUserDto } from '@components/user/dto/login-user.dto';
import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Request as ReqExpress } from 'express';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({
    type: LoginUserDto,
  })
  @Post('login')
  @ApiUnauthorizedResponse({
    description: 'Incorrect username or password',
  })
  @ApiBearerAuth()
  async login(@Request() req: ReqExpress): Promise<Partial<ResponseUserDto>> {
    return this.authService.login(req);
  }
}
