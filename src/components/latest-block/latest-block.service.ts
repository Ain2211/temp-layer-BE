import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { LatestBlockEntity } from '@components/latest-block/enitity/latest-block.entity';
import { MASTER_DB, REPLICA_DB } from '@database/config/config';

@Injectable()
export class LatestBlockService {
  constructor(
    @InjectRepository(LatestBlockEntity, MASTER_DB)
    public readonly latestBlockRepo: Repository<LatestBlockEntity>,
    @InjectRepository(LatestBlockEntity, REPLICA_DB)
    public readonly latestBlockRepoReplica: Repository<LatestBlockEntity>,
  ) {}

  async saveLatestBlock(
    type: string,
    block: string,
    entityManager: EntityManager = undefined,
  ): Promise<void> {
    const latestBlock = new LatestBlockEntity();
    latestBlock.block = block;
    if (entityManager) {
      await entityManager
        .createQueryBuilder()
        .update(LatestBlockEntity)
        .set({ block })
        .where('type = :type', { type })
        .execute();
    } else {
      await this.latestBlockRepo.update({ type }, latestBlock);
    }
  }

  async getLatestBlock(type: string): Promise<LatestBlockEntity> {
    let latestBlock = await this.latestBlockRepoReplica.findOne({
      type,
    });
    if (!latestBlock) {
      latestBlock = new LatestBlockEntity();
      latestBlock.type = type;
      latestBlock.block = '0';
      await this.latestBlockRepo.insert(latestBlock);
    }
    return latestBlock;
  }
  async updateLatestBlockStatus(
    latestBlock: LatestBlockEntity,
  ): Promise<LatestBlockEntity> {
    return await this.latestBlockRepo.save(latestBlock);
  }
}
