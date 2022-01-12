import { MASTER_DB, REPLICA_DB } from '@database/config/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from '@components/config/entity/config.entity';
import { ConfigsService } from '@components/config/config.service';
import { ConfigController } from '@components/config/config.controller';
import { RebalancerFactoryModule } from '@shares/global/rebalancer-factory/rebalancer-factory.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Config], MASTER_DB),
    TypeOrmModule.forFeature([Config], REPLICA_DB),
    RebalancerFactoryModule,
  ],
  providers: [ConfigsService],
  controllers: [ConfigController],
  exports: [ConfigsService],
})
export class ConfigsModule {}
