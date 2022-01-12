import { Contract, ethers, Wallet } from 'ethers';
import { RebalancerV2, RebalancerV2__factory } from '@typechain/index';
import {
  calcRebalanceV2Params,
  getCurrentTick,
  getLatestBlock,
  priceInPositionRange,
  sleep,
} from '@shares/utils/utils';
import { abi as poolAbi } from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json';
import { Stage } from '@components/rebalancer/enums/stage.enum';

export class Rebalance {
  private _upperValue: number;
  private _lowerValue: number;
  private _priceMove: number;
  private _rebalancer_address: string;
  private _provider: ethers.providers.JsonRpcProvider;
  private _rebalancer!: RebalancerV2;
  private _pool!: Contract;

  numberOfBlocks: number;

  constructor(
    upperValue: number,
    lowerValue: number,
    priceMove: number,
    rebalancer_address: string,
    numberOfBlocks: number,
    provider: string,
  ) {
    this._upperValue = upperValue;
    this._lowerValue = lowerValue;
    this._priceMove = priceMove;
    this._rebalancer_address = rebalancer_address;
    this.numberOfBlocks = numberOfBlocks;
    this._provider = new ethers.providers.JsonRpcProvider(provider);
  }

  get rebalancer_address() {
    return this._rebalancer_address;
  }

  set rebalancer_address(value: string) {
    this._rebalancer_address = value;
  }

  async initRebalancer() {
    console.log('\x1b[36m%s\x1b[0m', 'Connected to rebalancer');
    const owner = await this._provider.getSigner();
    // const adminAcc = new Wallet(process.env.ADMIN_PRIVATE_KEY).connect(
    //   this._provider,
    // );
    this._rebalancer = await (
      await RebalancerV2__factory.connect(
        this._rebalancer_address,
        this._provider,
      )
    ).connect(owner);
    const poolAddress = await this._rebalancer.uniswapV3Pool();
    this._pool = new Contract(poolAddress, poolAbi, this._provider);
  }

  async rebalance() {
    await this.initRebalancer();
    let index = 0;
    let oldTick = await getCurrentTick(this._pool);

    for await (const newBlockNumber of getLatestBlock(this._provider)) {
      console.log(`\nReceived new block ${newBlockNumber}`);

      // if (index > this.numberOfBlocks) {
      //   const stage = await this._rebalancer.stage();
      //   if (stage === Stage.DEPOSITED) {
      //     await this._rebalancer.stopRebalance();
      //     console.log('\x1b[36m%s\x1b[0m', 'HOLDING 100s');
      //     await sleep(100000);
      //   }
      //   return;
      // }

      // if price move (diff between block N and N+1) > threshold then rebalance
      const currentTick = await getCurrentTick(this._pool);
      console.log('\x1b[36m%s\x1b[0m', 'oldTick', oldTick);
      console.log('\x1b[36m%s\x1b[0m', 'currentTick', currentTick);
      const currentPrice = Math.pow(1.0001, currentTick);
      const oldPrice = Math.pow(1.0001, oldTick);
      const isPriceMove =
        Math.abs(currentPrice - oldPrice) > oldPrice * (this._priceMove / 100); // conver priceMove to %

      if (isPriceMove) {
        console.log('\x1b[36m%s\x1b[0m', '\nPrice move to large');
        const stage = await this._rebalancer.stage();
        if (stage === Stage.DEPOSITED) {
          await this._rebalance();
        }
        oldTick = await getCurrentTick(this._pool);
        continue;
      }

      if (await priceInPositionRange(this._rebalancer, this._pool)) {
        console.log('\nPrice IN position range');
      } else {
        console.log('\x1b[36m%s\x1b[0m', '\nPrice OUT of position range');
        await this._rebalance();
      }
      oldTick = await getCurrentTick(this._pool);
      index++;
    }
  }

  private async _rebalance() {
    const [tickLower, tickUpper, token0Share, token1Share] =
      await calcRebalanceV2Params(
        this._rebalancer,
        this._pool,
        this._upperValue,
        this._lowerValue,
      );
    console.log('\x1b[36m%s\x1b[0m', 'rebalancing...');

    console.log(
      '\x1b[36m%s\x1b[0m',
      '{tickLower, tickUpper, token0Share, token1Share}',
      {
        tickLower,
        tickUpper,
        token0Share,
        token1Share,
      },
    );

    try {
      const stage = await this._rebalancer.stage();
      if (stage === Stage.DEPOSITED) {
        await this._rebalancer.stopRebalance();
      }

      // console.log('WAITING 2 mins for deposit or withdraw...');
      // await sleep(120000);

      try {
        await this._rebalancer.callStatic.rebalance(
          tickLower,
          tickUpper,
          token0Share,
          token1Share,
          {
            gasLimit: 3000000,
          },
        );
        const tx = await this._rebalancer.rebalance(
          tickLower,
          tickUpper,
          token0Share,
          token1Share,
          {
            gasLimit: 3000000,
          },
        );
        console.log('\x1b[36m%s\x1b[0m', 'tx', tx);
        await tx.wait();
      } catch (e) {
        console.log(e);
        
      }

      console.log('----------------------------------------------');

      console.log(
        '\x1b[36m%s\x1b[0m',
        '{ tickLower,tickUpper,token0Share,token1Share,} ',
        { tickLower, tickUpper, token0Share, token1Share },
      );
      console.log(
        '\x1b[36m%s\x1b[0m',
        'await this._rebalancer.openPosition()',
        await this._rebalancer.openPosition(),
      );
      console.log('----------------------------------------------');
    } catch (e) {
      throw e;
    }

    console.log('\x1b[36m%s\x1b[0m', 'rebalanced');
  }
}
