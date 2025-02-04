/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IERC20Minimal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Minimal__factory>;
    getContractFactory(
      name: "IRifainSwap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRifainSwap__factory>;
    getContractFactory(
      name: "IRifainSwapFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRifainSwapFactory__factory>;
    getContractFactory(
      name: "IRifainSwapActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRifainSwapActions__factory>;
    getContractFactory(
      name: "IRifainSwapDerivedState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRifainSwapDerivedState__factory>;
    getContractFactory(
      name: "IRifainSwapEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRifainSwapEvents__factory>;
    getContractFactory(
      name: "IRifainSwapImmutables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRifainSwapImmutables__factory>;
    getContractFactory(
      name: "IRifainSwapOwnerActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRifainSwapOwnerActions__factory>;
    getContractFactory(
      name: "IRifainSwapState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRifainSwapState__factory>;
    getContractFactory(
      name: "Multicall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multicall__factory>;
    getContractFactory(
      name: "IERC721Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Permit__factory>;
    getContractFactory(
      name: "IMulticall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMulticall__factory>;
    getContractFactory(
      name: "INonfungiblePositionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INonfungiblePositionManager__factory>;
    getContractFactory(
      name: "IPeripheryImmutableState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryImmutableState__factory>;
    getContractFactory(
      name: "IPeripheryPayments",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryPayments__factory>;
    getContractFactory(
      name: "IPoolInitializer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolInitializer__factory>;
    getContractFactory(
      name: "IRifainSwapStaker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRifainSwapStaker__factory>;
    getContractFactory(
      name: "RifainSwapStaker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RifainSwapStaker__factory>;
    getContractFactory(
      name: "TestERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestERC20__factory>;
    getContractFactory(
      name: "TestIncentiveId",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestIncentiveId__factory>;
    getContractFactory(
      name: "TestRewardMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestRewardMath__factory>;

    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IERC20Minimal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Minimal>;
    getContractAt(
      name: "IRifainSwap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRifainSwap>;
    getContractAt(
      name: "IRifainSwapFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRifainSwapFactory>;
    getContractAt(
      name: "IRifainSwapActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRifainSwapActions>;
    getContractAt(
      name: "IRifainSwapDerivedState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRifainSwapDerivedState>;
    getContractAt(
      name: "IRifainSwapEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRifainSwapEvents>;
    getContractAt(
      name: "IRifainSwapImmutables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRifainSwapImmutables>;
    getContractAt(
      name: "IRifainSwapOwnerActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRifainSwapOwnerActions>;
    getContractAt(
      name: "IRifainSwapState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRifainSwapState>;
    getContractAt(
      name: "Multicall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Multicall>;
    getContractAt(
      name: "IERC721Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Permit>;
    getContractAt(
      name: "IMulticall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMulticall>;
    getContractAt(
      name: "INonfungiblePositionManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INonfungiblePositionManager>;
    getContractAt(
      name: "IPeripheryImmutableState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryImmutableState>;
    getContractAt(
      name: "IPeripheryPayments",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryPayments>;
    getContractAt(
      name: "IPoolInitializer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolInitializer>;
    getContractAt(
      name: "IRifainSwapStaker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRifainSwapStaker>;
    getContractAt(
      name: "RifainSwapStaker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RifainSwapStaker>;
    getContractAt(
      name: "TestERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestERC20>;
    getContractAt(
      name: "TestIncentiveId",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestIncentiveId>;
    getContractAt(
      name: "TestRewardMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestRewardMath>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
