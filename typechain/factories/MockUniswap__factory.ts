/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockUniswap, MockUniswapInterface } from "../MockUniswap";

const _abi = [
  {
    inputs: [],
    name: "ONE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "addLiquidityAmountA",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "addLiquidityAmountB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "addLiquidityValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
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
    inputs: [
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
    ],
    name: "getPair",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "removeLiquidityAmountA",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "removeLiquidityAmountB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    name: "setAddLiquidityValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "address",
        name: "pairAddress",
        type: "address",
      },
    ],
    name: "setPair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountB",
        type: "uint256",
      },
    ],
    name: "setRemoveLiquidityValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052610017670de0b6b3a76400006014610073565b60015561002d670de0b6b3a76400006014610073565b600255610043670de0b6b3a7640000601e610073565b600355600060045561005e670de0b6b3a76400006005610073565b60055534801561006d57600080fd5b506100a0565b600081600019048311821515161561009b57634e487b7160e01b600052601160045260246000fd5b500290565b610478806100af6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063baa2abde1161008c578063ceb2e0b111610066578063ceb2e0b1146101d9578063e6a43905146101f2578063e8e3370014610228578063ec189fdc1461026857600080fd5b8063baa2abde1461017b578063c2ee3a08146101b0578063c45a0155146101bf57600080fd5b8063270cfc95146100d45780633947931b146100f057806339e216fe146100f9578063651b0c891461010257806366bc11881461010b5780637bb4101214610114575b600080fd5b6100dd60025481565b6040519081526020015b60405180910390f35b6100dd60055481565b6100dd60015481565b6100dd60045481565b6100dd60035481565b6101796101223660046102d3565b6001600160a01b0392831660008181526020818152604080832095871683529481528482208054969094166001600160a01b0319968716811790945581815284822092825291909152919091208054909216179055565b005b61019b610189366004610316565b60015460025497509795505050505050565b604080519283526020830191909152016100e7565b6100dd670de0b6b3a764000081565b305b6040516001600160a01b0390911681526020016100e7565b6101796101e73660046103f4565b600191909155600255565b6101c16102003660046102a0565b6001600160a01b03918216600090815260208181526040808320938516835292905220541690565b61024d610236366004610380565b600354600454600554985098509895505050505050565b604080519384526020840192909252908201526060016100e7565b610179610276366004610416565b600392909255600455600555565b80356001600160a01b038116811461029b57600080fd5b919050565b600080604083850312156102b357600080fd5b6102bc83610284565b91506102ca60208401610284565b90509250929050565b6000806000606084860312156102e857600080fd5b6102f184610284565b92506102ff60208501610284565b915061030d60408501610284565b90509250925092565b600080600080600080600060e0888a03121561033157600080fd5b61033a88610284565b965061034860208901610284565b955060408801359450606088013593506080880135925061036b60a08901610284565b915060c0880135905092959891949750929550565b600080600080600080600080610100898b03121561039d57600080fd5b6103a689610284565b97506103b460208a01610284565b965060408901359550606089013594506080890135935060a089013592506103de60c08a01610284565b915060e089013590509295985092959890939650565b6000806040838503121561040757600080fd5b50508035926020909101359150565b60008060006060848603121561042b57600080fd5b50508135936020830135935060409092013591905056fea26469706673582212201f27c047c18afd17d1b5dcd4f4a1e79fc998acc5c9862f7b62b3ad4a7430d04564736f6c63430008060033";

export class MockUniswap__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockUniswap> {
    return super.deploy(overrides || {}) as Promise<MockUniswap>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockUniswap {
    return super.attach(address) as MockUniswap;
  }
  connect(signer: Signer): MockUniswap__factory {
    return super.connect(signer) as MockUniswap__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockUniswapInterface {
    return new utils.Interface(_abi) as MockUniswapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockUniswap {
    return new Contract(address, _abi, signerOrProvider) as MockUniswap;
  }
}
