import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    required: true,
    description: 'Email',
    default: 'helloworld@gmail.com',
  })
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({
    required: true,
    default: 'Hello123',
  })
  password: string;
}

export class CreateUserResponse {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  created_at: Date;

  @Expose()
  updated_at: Date;
}
