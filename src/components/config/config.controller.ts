import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { ConfigsService } from '@components/config/config.service';
import { CreateConfigDTO } from '@components/config/dto/create-config.dto';
import { UserID } from '@shares/decorators/get-user-id.decorator';
import { JwtAuthGuard } from '@components/auth/guards/jwt-auth.guard';
import { UpdateConfigDTO } from '@components/config/dto/update-config.dto';
import { UpdateConfigStatusDTO } from '@components/config/dto/update-config-status.dto';
import { ConfigFilter } from '@components/config/dto/filter.dto';
import { CreateRebalancerDTO } from '@components/config/dto/create-rebalancer.dto';

@Controller('configs')
@ApiTags('Config')
@ApiBearerAuth()
export class ConfigController {
  constructor(private readonly configService: ConfigsService) {}

  @Get()
  async filterConfig(@Query() configFilter: ConfigFilter) {
    const configs = await this.configService.filterConfig(configFilter);

    if (!configs)
      throw new HttpException(
        { key: 'Config not exists' },
        HttpStatus.BAD_REQUEST,
      );

    return configs;
  }

  @Get('/:id')
  async getConfigById(@Param('id') id: string) {
    const res = await this.configService.findById(id);

    if (!res) {
      throw new HttpException(
        { key: 'Config not exists' },
        HttpStatus.BAD_REQUEST,
      );
    }

    return res;
  }

  @Post()
  @ApiBody({
    type: CreateConfigDTO,
  })
  @UseGuards(JwtAuthGuard)
  async create(@Body() configDto: CreateConfigDTO, @UserID() userId: string) {
    return this.configService.create(configDto, userId);
  }

  @Post('/create-batch')
  @ApiBody({
    type: [CreateConfigDTO],
  })
  @UseGuards(JwtAuthGuard)
  async createBatch(@Body() configDtos: CreateConfigDTO[]) {
    return this.configService.createBatch(configDtos);
  }

  @Put()
  @ApiBody({
    type: UpdateConfigDTO,
  })
  @UseGuards(JwtAuthGuard)
  async update(@Body() configDto: UpdateConfigDTO, @UserID() userId: string) {
    return this.configService.update(configDto, userId);
  }

  @Put('/status')
  @ApiBody({
    type: UpdateConfigStatusDTO,
  })
  @UseGuards(JwtAuthGuard)
  async updateStatus(
    @Body() configDto: UpdateConfigStatusDTO,
    @UserID() userId: string,
  ) {
    return this.configService.setStatusConfig(
      configDto.id,
      configDto.status,
      userId,
    );
  }

  // can be take a long times
  @Post('/create-rebalancer')
  @ApiBody({
    type: CreateRebalancerDTO,
  })
  @UseGuards(JwtAuthGuard)
  async createRebalancer(
    @Body() rebalancerData: CreateRebalancerDTO,
    @UserID() userId: string,
  ) {
    let res;
    try {
      res = await this.configService.createRebalancer(rebalancerData, userId);
    } catch {
      throw new HttpException(
        { key: 'Error while creating config' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return res;
  }

  // can be take a long times
  @Delete('/:id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    try {
      await this.configService.delete(id);
    } catch {
      throw new HttpException(
        { key: 'Error while deleting config' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return id;
  }
}
