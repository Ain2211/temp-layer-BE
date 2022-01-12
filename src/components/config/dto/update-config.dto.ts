import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateConfigDTO {
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    default: '61024df51180254c104edf24',
  })
  id: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    default: 5,
  })
  upper_value: number;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    default: 5,
  })
  lower_value: number;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    default: 2,
  })
  price_move: number;

  uid?: string;
}
