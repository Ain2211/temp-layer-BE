/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IRebalancerV2Interface extends ethers.utils.Interface {
  functions: {
    "deposit(address,uint256,uint256)": FunctionFragment;
    "depositV2LP(tuple,address)": FunctionFragment;
    "depositV3NFT(uint256,address)": FunctionFragment;
    "rebalance(int24,int24,uint256,uint256)": FunctionFragment;
    "setNFTManager(address)": FunctionFragment;
    "setSwapRouter(address)": FunctionFragment;
    "stopRebalance()": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositV2LP",
    values: [{ pair: string; liquidityToMigrate: BigNumberish }, string]
  ): string;
  encodeFunctionData(
    functionFragment: "depositV3NFT",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "rebalance",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setNFTManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapRouter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "stopRebalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositV2LP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositV3NFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rebalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setNFTManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSwapRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stopRebalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class IRebalancerV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IRebalancerV2Interface;

  functions: {
    deposit(
      _recipient: string,
      _token0Amount: BigNumberish,
      _token1Amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositV2LP(
      params: { pair: string; liquidityToMigrate: BigNumberish },
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositV3NFT(
      _tokenId: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rebalance(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      token0Share: BigNumberish,
      token1Share: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setNFTManager(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSwapRouter(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stopRebalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _recipient: string,
      _liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deposit(
    _recipient: string,
    _token0Amount: BigNumberish,
    _token1Amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositV2LP(
    params: { pair: string; liquidityToMigrate: BigNumberish },
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositV3NFT(
    _tokenId: BigNumberish,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rebalance(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    token0Share: BigNumberish,
    token1Share: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setNFTManager(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSwapRouter(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stopRebalance(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _recipient: string,
    _liquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      _recipient: string,
      _token0Amount: BigNumberish,
      _token1Amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositV2LP(
      params: { pair: string; liquidityToMigrate: BigNumberish },
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositV3NFT(
      _tokenId: BigNumberish,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rebalance(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      token0Share: BigNumberish,
      token1Share: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setNFTManager(_addr: string, overrides?: CallOverrides): Promise<void>;

    setSwapRouter(_addr: string, overrides?: CallOverrides): Promise<void>;

    stopRebalance(overrides?: CallOverrides): Promise<void>;

    withdraw(
      _recipient: string,
      _liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    deposit(
      _recipient: string,
      _token0Amount: BigNumberish,
      _token1Amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositV2LP(
      params: { pair: string; liquidityToMigrate: BigNumberish },
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositV3NFT(
      _tokenId: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rebalance(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      token0Share: BigNumberish,
      token1Share: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setNFTManager(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSwapRouter(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stopRebalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _recipient: string,
      _liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      _recipient: string,
      _token0Amount: BigNumberish,
      _token1Amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositV2LP(
      params: { pair: string; liquidityToMigrate: BigNumberish },
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositV3NFT(
      _tokenId: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rebalance(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      token0Share: BigNumberish,
      token1Share: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setNFTManager(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSwapRouter(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stopRebalance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _recipient: string,
      _liquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}