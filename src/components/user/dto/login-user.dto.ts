import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    required: true,
    description: 'email',
    default: 'helloworld@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly username: string;

  @ApiProperty({
    required: true,
    default: 'Hello123',
  })
  @IsNotEmpty()
  readonly password: string;
}
