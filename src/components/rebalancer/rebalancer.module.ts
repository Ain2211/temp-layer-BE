import { ConfigsModule } from '@components/config/config.module';
import { LatestBlockModule } from '@components/latest-block/latest-block.module';
import { RebalancerConsoleService } from '@components/rebalancer/rebalancer.console';
import { Module, Logger } from '@nestjs/common';

@Module({
  imports: [ConfigsModule, LatestBlockModule],
  providers: [RebalancerConsoleService, Logger],
})
export class RebalancerModule {}
