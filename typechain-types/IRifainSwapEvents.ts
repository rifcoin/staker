/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, BigNumberish, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IRifainSwapEventsInterface extends utils.Interface {
  functions: {};

  events: {
    "Burn(address,int24,int24,uint128,uint256,uint256)": EventFragment;
    "Collect(address,address,int24,int24,uint128,uint128)": EventFragment;
    "CollectProtocol(address,address,uint128,uint128)": EventFragment;
    "Flash(address,address,uint256,uint256,uint256,uint256)": EventFragment;
    "IncreaseObservationCardinalityNext(uint16,uint16)": EventFragment;
    "Initialize(uint160,int24)": EventFragment;
    "Mint(address,address,int24,int24,uint128,uint256,uint256)": EventFragment;
    "SetFeeProtocol(uint8,uint8,uint8,uint8)": EventFragment;
    "Swap(address,address,int256,int256,uint160,uint128,int24)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Collect"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CollectProtocol"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Flash"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "IncreaseObservationCardinalityNext"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFeeProtocol"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}

export type BurnEvent = TypedEvent<
  [string, number, number, BigNumber, BigNumber, BigNumber],
  {
    owner: string;
    tickLower: number;
    tickUpper: number;
    amount: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
  }
>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export type CollectEvent = TypedEvent<
  [string, string, number, number, BigNumber, BigNumber],
  {
    owner: string;
    recipient: string;
    tickLower: number;
    tickUpper: number;
    amount0: BigNumber;
    amount1: BigNumber;
  }
>;

export type CollectEventFilter = TypedEventFilter<CollectEvent>;

export type CollectProtocolEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { sender: string; recipient: string; amount0: BigNumber; amount1: BigNumber }
>;

export type CollectProtocolEventFilter = TypedEventFilter<CollectProtocolEvent>;

export type FlashEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    sender: string;
    recipient: string;
    amount0: BigNumber;
    amount1: BigNumber;
    paid0: BigNumber;
    paid1: BigNumber;
  }
>;

export type FlashEventFilter = TypedEventFilter<FlashEvent>;

export type IncreaseObservationCardinalityNextEvent = TypedEvent<
  [number, number],
  {
    observationCardinalityNextOld: number;
    observationCardinalityNextNew: number;
  }
>;

export type IncreaseObservationCardinalityNextEventFilter =
  TypedEventFilter<IncreaseObservationCardinalityNextEvent>;

export type InitializeEvent = TypedEvent<
  [BigNumber, number],
  { sqrtPriceX96: BigNumber; tick: number }
>;

export type InitializeEventFilter = TypedEventFilter<InitializeEvent>;

export type MintEvent = TypedEvent<
  [string, string, number, number, BigNumber, BigNumber, BigNumber],
  {
    sender: string;
    owner: string;
    tickLower: number;
    tickUpper: number;
    amount: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
  }
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export type SetFeeProtocolEvent = TypedEvent<
  [number, number, number, number],
  {
    feeProtocol0Old: number;
    feeProtocol1Old: number;
    feeProtocol0New: number;
    feeProtocol1New: number;
  }
>;

export type SetFeeProtocolEventFilter = TypedEventFilter<SetFeeProtocolEvent>;

export type SwapEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, BigNumber, number],
  {
    sender: string;
    recipient: string;
    amount0: BigNumber;
    amount1: BigNumber;
    sqrtPriceX96: BigNumber;
    disponible: BigNumber;
    tick: number;
  }
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface IRifainSwapEvents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRifainSwapEventsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "Burn(address,int24,int24,uint128,uint256,uint256)"(
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null,
      amount0?: null,
      amount1?: null
    ): BurnEventFilter;
    Burn(
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null,
      amount0?: null,
      amount1?: null
    ): BurnEventFilter;

    "Collect(address,address,int24,int24,uint128,uint128)"(
      owner?: string | null,
      recipient?: null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount0?: null,
      amount1?: null
    ): CollectEventFilter;
    Collect(
      owner?: string | null,
      recipient?: null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount0?: null,
      amount1?: null
    ): CollectEventFilter;

    "CollectProtocol(address,address,uint128,uint128)"(
      sender?: string | null,
      recipient?: string | null,
      amount0?: null,
      amount1?: null
    ): CollectProtocolEventFilter;
    CollectProtocol(
      sender?: string | null,
      recipient?: string | null,
      amount0?: null,
      amount1?: null
    ): CollectProtocolEventFilter;

    "Flash(address,address,uint256,uint256,uint256,uint256)"(
      sender?: string | null,
      recipient?: string | null,
      amount0?: null,
      amount1?: null,
      paid0?: null,
      paid1?: null
    ): FlashEventFilter;
    Flash(
      sender?: string | null,
      recipient?: string | null,
      amount0?: null,
      amount1?: null,
      paid0?: null,
      paid1?: null
    ): FlashEventFilter;

    "IncreaseObservationCardinalityNext(uint16,uint16)"(
      observationCardinalityNextOld?: null,
      observationCardinalityNextNew?: null
    ): IncreaseObservationCardinalityNextEventFilter;
    IncreaseObservationCardinalityNext(
      observationCardinalityNextOld?: null,
      observationCardinalityNextNew?: null
    ): IncreaseObservationCardinalityNextEventFilter;

    "Initialize(uint160,int24)"(
      sqrtPriceX96?: null,
      tick?: null
    ): InitializeEventFilter;
    Initialize(sqrtPriceX96?: null, tick?: null): InitializeEventFilter;

    "Mint(address,address,int24,int24,uint128,uint256,uint256)"(
      sender?: null,
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null,
      amount0?: null,
      amount1?: null
    ): MintEventFilter;
    Mint(
      sender?: null,
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null,
      amount0?: null,
      amount1?: null
    ): MintEventFilter;

    "SetFeeProtocol(uint8,uint8,uint8,uint8)"(
      feeProtocol0Old?: null,
      feeProtocol1Old?: null,
      feeProtocol0New?: null,
      feeProtocol1New?: null
    ): SetFeeProtocolEventFilter;
    SetFeeProtocol(
      feeProtocol0Old?: null,
      feeProtocol1Old?: null,
      feeProtocol0New?: null,
      feeProtocol1New?: null
    ): SetFeeProtocolEventFilter;

    "Swap(address,address,int256,int256,uint160,uint128,int24)"(
      sender?: string | null,
      recipient?: string | null,
      amount0?: null,
      amount1?: null,
      sqrtPriceX96?: null,
      disponible?: null,
      tick?: null
    ): SwapEventFilter;
    Swap(
      sender?: string | null,
      recipient?: string | null,
      amount0?: null,
      amount1?: null,
      sqrtPriceX96?: null,
      disponible?: null,
      tick?: null
    ): SwapEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
