/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockNFTPositionManager,
  MockNFTPositionManagerInterface,
} from "../MockNFTPositionManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "positions",
    outputs: [
      {
        internalType: "uint96",
        name: "nonce",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "feeGrowthInside0LastX128",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthInside1LastX128",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "tokensOwed0",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "tokensOwed1",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    name: "setPair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0Address",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1Address",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610268806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80637ff36fbe1461005157806395c5c5e31461008157806399fbab88146100bf578063d7cb416f14610111575b600080fd5b600054610064906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100bd61008f366004610140565b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b005b6100f96100cd366004610173565b5060008054600154919283926001600160a01b0392831692169083908190819081908190819081908190565b6040516100789c9b9a9998979695949392919061018c565b600154610064906001600160a01b031681565b80356001600160a01b038116811461013b57600080fd5b919050565b6000806040838503121561015357600080fd5b61015c83610124565b915061016a60208401610124565b90509250929050565b60006020828403121561018557600080fd5b5035919050565b6bffffffffffffffffffffffff8d1681526001600160a01b038c811660208301528b811660408301528a16606082015262ffffff89166080820152600288810b60a083015287900b60c082015261018081016001600160801b03871660e083015285610100830152846101208301526102116101408301856001600160801b03169052565b6001600160801b0383166101608301529d9c5050505050505050505050505056fea2646970667358221220c3f6370a6d858dd818b705c5c7ed03fe4c4d7990731a378b09ced65fafdeea9964736f6c63430008060033";

export class MockNFTPositionManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockNFTPositionManager> {
    return super.deploy(overrides || {}) as Promise<MockNFTPositionManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockNFTPositionManager {
    return super.attach(address) as MockNFTPositionManager;
  }
  connect(signer: Signer): MockNFTPositionManager__factory {
    return super.connect(signer) as MockNFTPositionManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockNFTPositionManagerInterface {
    return new utils.Interface(_abi) as MockNFTPositionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockNFTPositionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockNFTPositionManager;
  }
}
