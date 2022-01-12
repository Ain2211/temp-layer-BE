import { MASTER_DB, REPLICA_DB } from './../../database/config/config';
import { LatestBlockEntity } from '@components/latest-block/enitity/latest-block.entity';
import { LatestBlockService } from '@components/latest-block/latest-block.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([LatestBlockEntity], MASTER_DB),
    TypeOrmModule.forFeature([LatestBlockEntity], REPLICA_DB),
  ],
  providers: [LatestBlockService],
  exports: [LatestBlockService],
})
export class LatestBlockModule {}
