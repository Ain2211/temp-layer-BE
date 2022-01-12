import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches, MinLength } from 'class-validator';

export class ChangePassDto {
  @ApiProperty({
    required: true,
  })
  @MinLength(8)
  password: string;

  @ApiProperty({
    required: true,
    default: 'Hello123',
  })
  @MinLength(8)
  @IsNotEmpty()
  new_password: string;
}
