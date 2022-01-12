import { Global, Module } from '@nestjs/common';
import { RebalancerFactoryService } from '@shares/global/rebalancer-factory/rebalancer-factory.service';

@Global()
@Module({
  providers: [RebalancerFactoryService],
  exports: [RebalancerFactoryService],
})
export class RebalancerFactoryModule {}
