import { FeeAmount } from '@uniswap/v3-sdk';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ConfigFilter {
  @IsOptional()
  @ApiProperty({
    default: null,
    required: false,
  })
  rebalancer_address?: string;

  @IsOptional()
  @ApiProperty({
    default: null,
    required: false,
  })
  token0?: string;

  @IsOptional()
  @ApiProperty({
    default: null,
    required: false,
  })
  token1?: string;

  @IsOptional()
  @ApiProperty({
    default: null,
    required: false,
  })
  price_move?: number;

  @IsOptional()
  @ApiProperty({
    default: null,
    required: false,
  })
  upper_value?: number;

  @IsOptional()
  @ApiProperty({
    default: null,
    required: false,
  })
  lower_value?: number;

  @IsOptional()
  @ApiProperty({
    default: null,
    required: false,
  })
  fee?: FeeAmount;

  @IsOptional()
  @ApiProperty({
    default: null,
    required: false,
  })
  uid?: string;
}
