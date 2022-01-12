import { FeeAmount } from '@uniswap/v3-sdk';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateRebalancerDTO {
  @IsNotEmpty()
  @ApiProperty({
    default: '0x124hg4123kjl4hlkj123hg4k23k41234kjgh213khjg421',
  })
  token0: string;

  @IsNotEmpty()
  @ApiProperty({
    default: '0x124hg4123kjl4hlkj123hg4k23k41234kjgh213khjg421',
  })
  token1: string;

  @IsNotEmpty()
  @ApiProperty({
    default: 'Token0Name',
  })
  token0Name: string;

  @IsNotEmpty()
  @ApiProperty({
    default: 'Token1Name',
  })
  token1Name: string;

  @IsNotEmpty()
  @ApiProperty({
    default: FeeAmount.MEDIUM,
  })
  fee: FeeAmount;
}
