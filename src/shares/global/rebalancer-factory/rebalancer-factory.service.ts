import { Injectable } from '@nestjs/common';
import { ethers, Wallet } from 'ethers';
import {
  RebalancerFactory,
  RebalancerFactory__factory,
} from '@typechain/index';

@Injectable()
export class RebalancerFactoryService {
  private rebalancerFactory?: RebalancerFactory;

  async getRebalancerFactory() {
    if (!this.rebalancerFactory) {
      const provider = new ethers.providers.JsonRpcProvider(
        process.env.JSON_RPC_PROVIDER,
      );
      const adminAcc = new Wallet(process.env.ADMIN_PRIVATE_KEY).connect(
        provider,
      );

      this.rebalancerFactory = (await (
        await RebalancerFactory__factory.connect(
          process.env.REBALANCER_FACTORY_ADDRESS,
          provider,
        )
      ).connect(adminAcc)) as RebalancerFactory;
    }

    return this.rebalancerFactory;
  }
}
