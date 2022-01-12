import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class GetConfigByAddressDTO {
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    default: '0x0000000000000000000000000000',
  })
  address: string;
}
