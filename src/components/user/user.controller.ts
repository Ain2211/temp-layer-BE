import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Inject,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateUserDto,
  CreateUserResponse,
} from '@components/user/dto/create-user.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from '@components/user/user.service';
import { ChangePassDto } from '@components/user/dto/change-pass.dto';
import { UserID } from '@shares/decorators/get-user-id.decorator';
import { plainToClass } from 'class-transformer';

@Controller('users')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({
    operationId: 'CreateUser',
    summary: 'CreateUser',
  })
  @ApiBody({
    type: CreateUserDto,
  })
  public async create(
    @Body() userDto: CreateUserDto,
  ): Promise<CreateUserResponse> {
    const { email } = userDto;

    // check if the user exists in the db
    const userInDb = await this.userService.findUserByEmail(email);

    if (userInDb) {
      throw new HttpException(
        { key: 'User already exists' },
        HttpStatus.BAD_REQUEST,
      );
    }

    const userCreated = await this.userService.create(userDto);
    return plainToClass(CreateUserResponse, userCreated, {
      excludeExtraneousValues: true,
    });
  }

  @Put('change-password')
  @ApiBody({
    type: ChangePassDto,
  })
  @ApiBearerAuth()
  async changePassword(
    @Body() changePassDto: ChangePassDto,
    @UserID() userId: string | number,
  ): Promise<string> {
    await this.userService.changePassword(changePassDto, userId);
    return 'Change password successfully';
  }
}
