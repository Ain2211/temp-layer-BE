import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { ConfigStatus } from '@components/config/enums/config.enum';

export class UpdateConfigStatusDTO {
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    default: '61024df51180254c104edf24',
  })
  id: string;

  @IsNotEmpty()
  @ApiProperty({
    required: true,
    default: ConfigStatus.RUNNING,
  })
  status: number;
}
