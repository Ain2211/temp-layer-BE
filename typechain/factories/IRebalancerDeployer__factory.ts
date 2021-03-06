/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IRebalancerDeployer,
  IRebalancerDeployerInterface,
} from "../IRebalancerDeployer";

const _abi = [
  {
    inputs: [],
    name: "parameters",
    outputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IRebalancerDeployer__factory {
  static readonly abi = _abi;
  static createInterface(): IRebalancerDeployerInterface {
    return new utils.Interface(_abi) as IRebalancerDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRebalancerDeployer {
    return new Contract(address, _abi, signerOrProvider) as IRebalancerDeployer;
  }
}
