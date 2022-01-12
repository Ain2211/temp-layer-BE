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

interface RebalancerFactoryInterface extends ethers.utils.Interface {
  functions: {
    "ADMIN()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "REBALANCE_ROLE()": FunctionFragment;
    "createRebalancerV2(address,address,uint24,address,address)": FunctionFragment;
    "getRebalancerV2(address)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "parameters()": FunctionFragment;
    "quoter()": FunctionFragment;
    "rebalancerFee()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setBlockFrequencySummarization(uint256)": FunctionFragment;
    "setRebalanceFee(uint256,uint256)": FunctionFragment;
    "setUniswapV3Factory(address)": FunctionFragment;
    "setUniswapV3Quoter(address)": FunctionFragment;
    "summarizationFrequency()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "uniswapV3Factory()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ADMIN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REBALANCE_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createRebalancerV2",
    values: [string, string, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRebalancerV2",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "parameters",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "quoter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rebalancerFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setBlockFrequencySummarization",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRebalanceFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setUniswapV3Factory",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUniswapV3Quoter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "summarizationFrequency",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3Factory",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REBALANCE_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createRebalancerV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRebalancerV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quoter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rebalancerFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBlockFrequencySummarization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRebalanceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUniswapV3Factory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUniswapV3Quoter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "summarizationFrequency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3Factory",
    data: BytesLike
  ): Result;

  events: {
    "BlockFrequencySummarizationChanged(uint256,uint256)": EventFragment;
    "RebalancerCreated(address,address,uint24,address,address)": EventFragment;
    "RebalancerFeeChanged(tuple,uint256,uint256)": EventFragment;
    "RebalancerV2Created(address,address,uint24,address,address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "BlockFrequencySummarizationChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RebalancerCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RebalancerFeeChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RebalancerV2Created"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export class RebalancerFactory extends BaseContract {
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

  interface: RebalancerFactoryInterface;

  functions: {
    ADMIN(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    REBALANCE_ROLE(overrides?: CallOverrides): Promise<[string]>;

    createRebalancerV2(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      nft: string,
      swapRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRebalancerV2(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    parameters(
      overrides?: CallOverrides
    ): Promise<[string, string] & { factory: string; pool: string }>;

    quoter(overrides?: CallOverrides): Promise<[string]>;

    rebalancerFee(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { numerator: BigNumber; denominator: BigNumber }
    >;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBlockFrequencySummarization(
      _summarizationFrequency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRebalanceFee(
      numerator: BigNumberish,
      denominator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUniswapV3Factory(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUniswapV3Quoter(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    summarizationFrequency(overrides?: CallOverrides): Promise<[BigNumber]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<[string]>;
  };

  ADMIN(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  REBALANCE_ROLE(overrides?: CallOverrides): Promise<string>;

  createRebalancerV2(
    tokenA: string,
    tokenB: string,
    fee: BigNumberish,
    nft: string,
    swapRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRebalancerV2(arg0: string, overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  parameters(
    overrides?: CallOverrides
  ): Promise<[string, string] & { factory: string; pool: string }>;

  quoter(overrides?: CallOverrides): Promise<string>;

  rebalancerFee(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { numerator: BigNumber; denominator: BigNumber }
  >;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBlockFrequencySummarization(
    _summarizationFrequency: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRebalanceFee(
    numerator: BigNumberish,
    denominator: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUniswapV3Factory(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUniswapV3Quoter(
    _addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  summarizationFrequency(overrides?: CallOverrides): Promise<BigNumber>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  uniswapV3Factory(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    ADMIN(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    REBALANCE_ROLE(overrides?: CallOverrides): Promise<string>;

    createRebalancerV2(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      nft: string,
      swapRouter: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getRebalancerV2(arg0: string, overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    parameters(
      overrides?: CallOverrides
    ): Promise<[string, string] & { factory: string; pool: string }>;

    quoter(overrides?: CallOverrides): Promise<string>;

    rebalancerFee(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { numerator: BigNumber; denominator: BigNumber }
    >;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setBlockFrequencySummarization(
      _summarizationFrequency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRebalanceFee(
      numerator: BigNumberish,
      denominator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setUniswapV3Factory(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUniswapV3Quoter(_addr: string, overrides?: CallOverrides): Promise<void>;

    summarizationFrequency(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    BlockFrequencySummarizationChanged(
      oldSummarizationFrequency?: null,
      newSummarizationFrequency?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      {
        oldSummarizationFrequency: BigNumber;
        newSummarizationFrequency: BigNumber;
      }
    >;

    RebalancerCreated(
      tokenA?: string | null,
      tokenB?: string | null,
      fee?: BigNumberish | null,
      pool?: null,
      rebalancer?: null
    ): TypedEventFilter<
      [string, string, number, string, string],
      {
        tokenA: string;
        tokenB: string;
        fee: number;
        pool: string;
        rebalancer: string;
      }
    >;

    RebalancerFeeChanged(
      oldFee?: null,
      numeratorNew?: null,
      denominatorNew?: null
    ): TypedEventFilter<
      [
        [BigNumber, BigNumber] & {
          numerator: BigNumber;
          denominator: BigNumber;
        },
        BigNumber,
        BigNumber
      ],
      {
        oldFee: [BigNumber, BigNumber] & {
          numerator: BigNumber;
          denominator: BigNumber;
        };
        numeratorNew: BigNumber;
        denominatorNew: BigNumber;
      }
    >;

    RebalancerV2Created(
      tokenA?: string | null,
      tokenB?: string | null,
      fee?: BigNumberish | null,
      pool?: null,
      rebalancer?: null
    ): TypedEventFilter<
      [string, string, number, string, string],
      {
        tokenA: string;
        tokenB: string;
        fee: number;
        pool: string;
        rebalancer: string;
      }
    >;

    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;
  };

  estimateGas: {
    ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    REBALANCE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    createRebalancerV2(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      nft: string,
      swapRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRebalancerV2(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parameters(overrides?: CallOverrides): Promise<BigNumber>;

    quoter(overrides?: CallOverrides): Promise<BigNumber>;

    rebalancerFee(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBlockFrequencySummarization(
      _summarizationFrequency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRebalanceFee(
      numerator: BigNumberish,
      denominator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUniswapV3Factory(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUniswapV3Quoter(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    summarizationFrequency(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REBALANCE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createRebalancerV2(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      nft: string,
      swapRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRebalancerV2(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    quoter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebalancerFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBlockFrequencySummarization(
      _summarizationFrequency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRebalanceFee(
      numerator: BigNumberish,
      denominator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUniswapV3Factory(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUniswapV3Quoter(
      _addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    summarizationFrequency(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uniswapV3Factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
