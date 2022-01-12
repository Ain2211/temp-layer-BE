import { Contract, ethers } from 'ethers';
import { IUniswapV3Pool } from '@typechain/IUniswapV3Pool';
import { RebalancerV2 } from '@typechain/index';
import { Currency, CurrencyAmount, Token } from '@uniswap/sdk-core';
import { FeeAmount, Pool, Position } from '@uniswap/v3-sdk';
import { parseUnits } from '@ethersproject/units';
const JSBI = require('jsbi');

export async function* getLatestBlock(provider: ethers.providers.Provider) {
  let lastSeenBlockNumber = await provider.getBlockNumber();

  while (true) {
    const latestBlockNumber = await provider.getBlockNumber();

    if (latestBlockNumber > lastSeenBlockNumber) {
      lastSeenBlockNumber = latestBlockNumber;
      yield ethers.BigNumber.from(lastSeenBlockNumber);
    }
    await sleep(5000);
  }
}

export const priceInPositionRange = async (
  rebalancer: RebalancerV2,
  pool: IUniswapV3Pool | Contract,
): Promise<boolean> => {
  const openPosition = await rebalancer.openPosition();
  if (Number(openPosition.id) === 0) return false;
  const slot0 = await pool.slot0();

  console.log('\nCheck existing positions bounds:');
  console.log(
    `Lower: ${openPosition.tickLower}. ` +
      `Tick: ${slot0.tick}. ` +
      `Upper: ${openPosition.tickUpper}`,
  );

  return (
    Number(slot0.tick) >= Number(openPosition.tickLower) &&
    Number(slot0.tick) <= Number(openPosition.tickUpper)
  );
};

export const getCurrentTick = async (pool: IUniswapV3Pool | Contract) => {
  const slot0 = await pool.slot0();
  return slot0.tick;
};

export const calcRebalanceV2Params = async (
  rebalancer: RebalancerV2,
  pool: IUniswapV3Pool | Contract,
  upperValue: number,
  lowerValue: number,
): Promise<[number, number, number, number]> => {
  const address0 = await pool.token0();
  const address1 = await pool.token1();
  const token0 = new Token(
    Number(process.env.CHAIN_ID),
    address0,
    18, //decimal
    'TK0',
    'Token0',
  );

  const token1 = new Token(
    Number(process.env.CHAIN_ID),
    address1,
    18, //decimal
    'TK1',
    'Token1',
  );

  // get current tick
  const slot0 = await pool.slot0();
  const currentTick = slot0.tick;
  const fee = await pool.fee();
  const liquidity = await pool.liquidity();
  const tickSpacing = await pool.tickSpacing();

  // cal tickLower vs tickUpper => amount of two token
  const tickLower =
    Math.ceil(currentTick / tickSpacing) * tickSpacing -
    lowerValue * tickSpacing;
  const tickUpper =
    Math.floor(currentTick / tickSpacing) * tickSpacing +
    upperValue * tickSpacing;
  console.log(
    '\x1b[36m%s\x1b[0m',
    '{tickLower, tickUpper, currentTick, tickSpacing}',
    { tickLower, tickUpper, currentTick: slot0.tick, tickSpacing },
  );
  const token0Amount: CurrencyAmount<Currency> = tryParseAmount('20', token0);

  const poolSdk = new Pool(
    token0,
    token1,
    fee as FeeAmount,
    slot0.sqrtPriceX96.toString(),
    liquidity.toString(),
    slot0.tick,
  );
  const position: Position | undefined = Position.fromAmount0({
    pool: poolSdk,
    tickLower: tickLower,
    tickUpper: tickUpper,
    amount0: token0Amount.quotient,
    useFullPrecision: true,
  });

  const amount0 = Number(position.amount0.toSignificant(6));
  const amount1 = Number(position.amount1.toSignificant(6));
  const token0Share = Math.floor((amount0 * 100) / (amount0 + amount1));
  const token1Share = 100 - token0Share;

  return [tickLower, tickUpper, token0Share, token1Share];
};

export function tryParseAmount<T extends Currency>(
  value: string,
  currency: T,
): CurrencyAmount<T> {
  const typedValueParsed = parseUnits(value, currency.decimals).toString();
  return CurrencyAmount.fromRawAmount(currency, JSBI.BigInt(typedValueParsed));
}

export const sleep = async (milisec: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milisec));
};
