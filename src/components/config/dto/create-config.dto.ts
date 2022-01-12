import { FeeAmount } from '@uniswap/v3-sdk';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateConfigDTO {
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    default: '0x0000000000000000000000000000',
  })
  rebalancer_address: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    default: 5,
  })
  upper_value?: number;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    default: 5,
  })
  lower_value?: number;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    default: 50,
  })
  price_move?: number;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    default: 'token0',
  })
  token0?: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    default: 'token1',
  })
  token1?: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    default: FeeAmount.MEDIUM,
  })
  fee?: FeeAmount;

  uid?: string;
}
