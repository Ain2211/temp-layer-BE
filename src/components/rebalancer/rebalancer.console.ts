import { FeeAmount } from '@uniswap/v3-sdk';
import { Injectable, Logger } from '@nestjs/common';
import { Console, Command } from 'nestjs-console';
import { ConfigsService } from '@components/config/config.service';
import { Rebalance } from '@components/rebalancer/rebalance-engine/rebalance';
import {
  ConfigRestartStatus,
  ConfigStatus,
} from '@components/config/enums/config.enum';
import { exec, execSync } from 'child_process';
import axios from 'axios';
import { LatestBlockService } from '@components/latest-block/latest-block.service';
import { LatestBlockType } from '@components/latest-block/latest-block.const';
import { LatestBlockEntity } from '@components/latest-block/enitity/latest-block.entity';
@Console()
@Injectable()
export class RebalancerConsoleService {
  constructor(
    private readonly logger: Logger,
    private readonly configService: ConfigsService,
    private readonly latestBlockService: LatestBlockService,
  ) {}

  @Command({
    command: 'command <cmd>',
  })
  command(cmd: string) {
    const output = execSync(cmd, { encoding: 'utf-8' });
    console.log('\x1b[36m%s\x1b[0m', 'output', output);
  }

  @Command({
    command: 'start-rebalance',
    description:
      "find rebalancer address that have running status but haven't started and start them",
  })
  async startRebalance() {
    const runningConfigs = await this.configService.getConfigsByStatus(
      ConfigStatus.RUNNING,
    );
    for (const config of runningConfigs) {
      const rblAddress = config.rebalancer_address;
      const configId = config.id;

      // case: update config => restart job
      if (config.need_restart_rebalance === ConfigRestartStatus.YES) {
        try {
          console.log('\x1b[36m%s\x1b[0m', 'Deleting PM2 Job: ', rblAddress);
          const stopJobCommand = `pm2 del ${rblAddress}`;
          execSync(stopJobCommand);
        } catch (e) {
          this.logger.error(e);
        }
        await this.configService.setRestartStatus(
          configId,
          ConfigRestartStatus.NO,
        );
      }

      const command = `./rebalance.sh ${rblAddress} ${configId}`;
      console.log('\x1b[36m%s\x1b[0m', 'command', command);

      const output = execSync(command, { encoding: 'utf-8' });
      console.log('\x1b[36m%s\x1b[0m', 'output', output);
    }
  }

  @Command({
    command: 'stop-rebalance',
    description:
      'find rebalancer address that have stopped status but have been running and stop them',
  })
  async stopRebalance() {
    const runningConfigs = await this.configService.getConfigsByStatus(
      ConfigStatus.STOPPED,
    );
    runningConfigs.forEach((config) => {
      const rblAddress = config.rebalancer_address;
      const configId = config.id;

      const command = `./stop-rebalance.sh ${rblAddress} ${configId}`;
      console.log('\x1b[36m%s\x1b[0m', 'command', command);

      const output = execSync(command, { encoding: 'utf-8' });
      console.log('\x1b[36m%s\x1b[0m', 'output', output);
    });
  }

  @Command({
    command: 'crawl-rebalancer-subgraph',
    description: 'Crawl new rebalancer in subgraph',
  })
  async crawlRebalancerSubgraph() {
    this.logger.log('Crawl new rebalancer in subgraph');

    const latestBlockRecord: LatestBlockEntity =
      await this.latestBlockService.getLatestBlock(
        LatestBlockType.subgraph_rebalancer_id,
      );
    let latestBlock = latestBlockRecord?.block;

    const query = `
    {
      rebalancers (where: {index_gt: ${latestBlock}}, orderBy: index, orderDirection: desc) {
        address
        index
      }
    }
    `;
    const res = await axios.post(
      process.env.SUBGRAPH_URL,
      {
        query,
        variables: null,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = res.data.data.rebalancers;
    if (!data || !data.length) return;

    const configs = data.map((e) => {
      return {
        rebalancer_address: e.address,
      };
    });
    console.log(data);

    try {
      await this.configService.createBatch(configs);
      latestBlock = data[0].index;
      await this.latestBlockService.saveLatestBlock(
        LatestBlockType.subgraph_rebalancer_id,
        latestBlock,
      );
    } catch (e) {
      this.logger.log('Error while create batch config');
      this.logger.log(e);
    }
    this.logger.log('Success, latest block: ', latestBlock);
  }

  @Command({
    command:
      'create-pair <firstTokenAddress> <secondTokenAddress> <firstTokenName> <secondTokenName> <fee>',
    description: 'Print Hello World!!',
  })
  async createPair(
    firstTokenAddress: string,
    secondTokenAddress: string,
    firstTokenName: string,
    secondTokenName: string,
    fee: FeeAmount,
  ) {
    this.logger.log('CREATE PAIR');
    this.logger.log(
      'firstToken: ',
      `${firstTokenName} --- ${firstTokenAddress}`,
    );
    this.logger.log(
      'secondToken: ',
      `${secondTokenName} --- ${secondTokenAddress}`,
    );
    this.logger.log('fee: ', fee.toString());

    try {
      const res = await this.configService.createRebalancer({
        token0: firstTokenAddress,
        token1: secondTokenAddress,
        token0Name: firstTokenName,
        token1Name: secondTokenName,
        fee: fee,
      });
      this.logger.log('SUCCESS: ', res);
    } catch {
      this.logger.log('CREATE PAIR FAILED');
    }
  }

  @Command({
    command: 'rebalance <id>',
    description: 'rebalance',
  })
  async rebalance(id: string) {
    console.log('\x1b[36m%s\x1b[0m', 'id', id);
    const configData = await this.configService.findOne(id);
    this.logger.log({ configData });
    if (configData.running !== ConfigStatus.RUNNING) return;

    const rebalancerAddress = configData.rebalancer_address;
    const upperValue = Number(configData.upper_value);
    const lowerValue = Number(configData.lower_value);
    const priceMove = Number(configData.price_move);

    const rebalancer = new Rebalance(
      upperValue,
      lowerValue,
      priceMove,
      rebalancerAddress,
      300, // the number of blocks to rebalance
      process.env.JSON_RPC_PROVIDER,
    );
    await rebalancer.rebalance();
    await this.configService.setStatusConfig(id, ConfigStatus.STOPPED);
  }

  @Command({
    command: 'auto-rebalance <address> <upperValue> <lowerValue> <priceMove>',
    description: 'auto-rebalance',
  })
  async autoRebalance(
    address: string,
    upperValue: number,
    lowerValue: number,
    priceMove: number,
  ) {
    console.log(
      '\x1b[36m%s\x1b[0m',
      'start rebalancer job for address ',
      address,
    );

    // upperValue = Number(upperValue);
    // lowerValue = Number(lowerValue);
    // priceMove = Number(priceMove);

    // const rebalancer = new Rebalance(
    //   upperValue,
    //   lowerValue,
    //   priceMove,
    //   address,
    //   300,
    //   process.env.JSON_RPC_PROVIDER,
    // );
    // await rebalancer.rebalance();
  }

  @Command({
    command: 'rebalance-all',
    description: 'rebalance all configs have been stopped',
  })
  async rebalanceAll() {
    const configs = await this.configService.findConfigsNotRunning();
    this.logger.log({ configs });
    execSync('echo "Hello World"');
    const promises = [];
    for (const config of configs) {
      try {
        await this.configService.setStatusConfig(
          config.id,
          ConfigStatus.RUNNING,
        );
        promises.push(
          new Promise((resolve, reject) => {
            exec(
              `yarn console:dev rebalance ${config.id}`,
              (error, stdout, ttderr) => {
                if (error) {
                  reject(new Error(`Error occurred with code: ${error.code}`));
                }
                console.log(`stdout: ${stdout}`);
                resolve(stdout);
              },
            );
          }),
        );
      } catch (err) {
        this.logger.error(`Run rebalance for config ${config.id} failed`);
        this.logger.error(err);
        this.configService.setStatusConfig(config.id, ConfigStatus.STOPPED);
      }
    }
    await Promise.all(promises);
    (function wait() {
      setTimeout(wait, 10000);
    })();
  }
}
