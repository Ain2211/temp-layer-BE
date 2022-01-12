import { RebalancerFactoryService } from '@shares/global/rebalancer-factory/rebalancer-factory.service';
import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Config } from '@components/config/entity/config.entity';
import { CreateConfigDTO } from '@components/config/dto/create-config.dto';
import { UpdateConfigDTO } from '@components/config/dto/update-config.dto';
import {
  ConfigRestartStatus,
  ConfigStatus,
} from '@components/config/enums/config.enum';
import { ConfigFilter } from '@components/config/dto/filter.dto';
import { CreateRebalancerDTO } from '@components/config/dto/create-rebalancer.dto';
import { MASTER_DB, REPLICA_DB } from '@database/config/config';

@Injectable()
export class ConfigsService {
  constructor(
    @InjectRepository(Config, MASTER_DB)
    private readonly configRepository: Repository<Config>,
    @InjectRepository(Config, REPLICA_DB)
    private readonly configRepositoryReplica: Repository<Config>,
    private readonly rebalancerFactory: RebalancerFactoryService,
  ) {}

  async findAll(): Promise<Config[]> {
    return this.configRepositoryReplica.find();
  }

  async findById(id: string): Promise<Config> {
    return this.configRepositoryReplica.findOne(id);
  }

  async create(configDto: CreateConfigDTO, userId?: string): Promise<Config> {
    // check config exists
    const isExists = await this.configRepositoryReplica.findOne({
      rebalancer_address: configDto.rebalancer_address,
    });
    if (isExists)
      throw new HttpException(
        { key: 'Config already exists' },
        HttpStatus.CONFLICT,
      );

    const config = new Config();
    config.rebalancer_address = configDto.rebalancer_address;
    config.upper_value = configDto.upper_value;
    config.lower_value = configDto.lower_value;
    config.price_move = configDto.price_move;
    config.fee = configDto.fee;
    if (userId) {
      config.uid = userId;
    }

    return this.configRepository.save(config);
  }

  async find(conditions): Promise<Config[]> {
    return this.configRepositoryReplica.find(conditions);
  }

  async createBatch(configs?: CreateConfigDTO[]): Promise<Config[]> {
    const listExistsConfigs = await this.configRepositoryReplica.find({
      select: ['rebalancer_address'],
    });
    const listExistsConfigFormatted = listExistsConfigs.map((config) => {
      return config.rebalancer_address;
    });
    const dataSave = configs.filter((config) => {
      return !listExistsConfigFormatted.includes(config.rebalancer_address);
    });
    return this.configRepository.save(dataSave);
  }

  async createV2(configDto: CreateConfigDTO): Promise<Config> {
    // check config exists
    const isExists = await this.configRepositoryReplica.findOne({
      rebalancer_address: configDto.rebalancer_address,
    });
    if (isExists)
      throw new HttpException(
        { key: 'Config already exists' },
        HttpStatus.CONFLICT,
      );

    const config = new Config();
    config.rebalancer_address = configDto.rebalancer_address;
    config.upper_value = configDto.upper_value;
    config.lower_value = configDto.lower_value;
    config.price_move = configDto.price_move;
    config.token0 = configDto.token0;
    config.token1 = configDto.token1;

    return this.configRepository.save(config);
  }

  async update(configDto: UpdateConfigDTO, userId: string): Promise<Config> {
    const config = await this.configRepositoryReplica.findOne(configDto.id);
    if (!config) throw new NotFoundException({ key: 'Config not found' });

    config.upper_value = configDto.upper_value;
    config.lower_value = configDto.lower_value;
    config.price_move = configDto.price_move;
    config.uid = userId;
    config.need_restart_rebalance = ConfigRestartStatus.YES;

    return this.configRepository.save(config);
  }

  async findOne(id: string): Promise<Config> {
    return this.configRepositoryReplica.findOne(id);
  }

  async getConfigsByStatus(status: ConfigStatus): Promise<Config[]> {
    return this.configRepositoryReplica.find({
      where: {
        running: status,
      },
    });
  }

  async setRestartStatus(
    id: string,
    status: ConfigRestartStatus,
    uid?: string,
  ) {
    const config = await this.configRepositoryReplica.findOne(id);
    if (!config) throw new NotFoundException({ key: 'Config not found' });

    config.need_restart_rebalance = status;
    if (uid) config.uid = uid;

    return this.configRepository.save(config);
  }

  async setStatusConfig(id: string, status: ConfigStatus, uid?: string) {
    const config = await this.configRepositoryReplica.findOne(id);
    if (!config) throw new NotFoundException({ key: 'Config not found' });

    config.running = status;
    if (uid) config.uid = uid;

    return this.configRepository.save(config);
  }

  async findConfigsNotRunning() {
    const configs = await this.configRepositoryReplica.find({
      running: ConfigStatus.STOPPED,
    });

    return configs;
  }

  async getConfigByAddress(address: string) {
    return this.configRepositoryReplica.find({
      where: {
        rebalancer_address: address,
      },
    });
  }

  async filterConfig(configFilter: ConfigFilter) {
    const condition = {};

    for (const key of Object.keys(configFilter)) {
      if (configFilter[key] !== null) {
        condition[key] = configFilter[key];
      }
    }

    return this.configRepositoryReplica.find({
      where: condition,
    });
  }

  async createRebalancer(rebalancerData: CreateRebalancerDTO, userId?: string) {
    // create rebalancer
    try {
      let tx: any = await (
        await this.rebalancerFactory.getRebalancerFactory()
      ).createRebalancerV2(
        rebalancerData.token0,
        rebalancerData.token1,
        rebalancerData.fee,
        process.env.NFT,
        process.env.SWAP_ROUTER,
      );
      tx = await tx.wait();

      const rebalancerAddress = tx.events[0].args.rebalancer;

      await this.create(
        {
          rebalancer_address: rebalancerAddress,
          token0: rebalancerData.token0Name,
          token1: rebalancerData.token1Name,
        },
        userId,
      );

      return rebalancerAddress;
    } catch {
      throw Error('Error while creating contract');
    }
  }

  async delete(id: string) {
    try {
      return this.configRepository.delete(id);
    } catch {
      throw Error('Error while deleting config');
    }
  }
}
