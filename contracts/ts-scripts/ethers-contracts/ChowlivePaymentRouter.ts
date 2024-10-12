/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface ChowlivePaymentRouterInterface extends utils.Interface {
  functions: {
    "destinationChainSelector()": FunctionFragment;
    "linkToken()": FunctionFragment;
    "paymentReceiverContract()": FunctionFragment;
    "quoteCrossChainMessage(uint64,uint8,uint256)": FunctionFragment;
    "router()": FunctionFragment;
    "subscribeToCrossChainRoom(address,uint256,uint256,uint8)": FunctionFragment;
    "subscriptionToken()": FunctionFragment;
    "updateAddresses(address,address,uint64)": FunctionFragment;
    "withdrawTokens(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "destinationChainSelector"
      | "linkToken"
      | "paymentReceiverContract"
      | "quoteCrossChainMessage"
      | "router"
      | "subscribeToCrossChainRoom"
      | "subscriptionToken"
      | "updateAddresses"
      | "withdrawTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "destinationChainSelector",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "linkToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "paymentReceiverContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "quoteCrossChainMessage",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "subscribeToCrossChainRoom",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "subscriptionToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateAddresses",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTokens",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "destinationChainSelector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "linkToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "paymentReceiverContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteCrossChainMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "subscribeToCrossChainRoom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subscriptionToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawTokens",
    data: BytesLike
  ): Result;

  events: {
    "PaymentSent(address,uint256,uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PaymentSent"): EventFragment;
}

export interface PaymentSentEventObject {
  sender: string;
  roomId: BigNumber;
  amount: BigNumber;
  messageId: string;
}
export type PaymentSentEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  PaymentSentEventObject
>;

export type PaymentSentEventFilter = TypedEventFilter<PaymentSentEvent>;

export interface ChowlivePaymentRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ChowlivePaymentRouterInterface;

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

  functions: {
    destinationChainSelector(overrides?: CallOverrides): Promise<[BigNumber]>;

    linkToken(overrides?: CallOverrides): Promise<[string]>;

    paymentReceiverContract(overrides?: CallOverrides): Promise<[string]>;

    quoteCrossChainMessage(
      targetChain: BigNumberish,
      payFeesIn: BigNumberish,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { cost: BigNumber }>;

    router(overrides?: CallOverrides): Promise<[string]>;

    subscribeToCrossChainRoom(
      user: string,
      roomId: BigNumberish,
      amount: BigNumberish,
      payFeesIn: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    subscriptionToken(overrides?: CallOverrides): Promise<[string]>;

    updateAddresses(
      _paymentReceiverContract: string,
      _subscriptionToken: string,
      _destinationChainSelector: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawTokens(
      token: string,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  destinationChainSelector(overrides?: CallOverrides): Promise<BigNumber>;

  linkToken(overrides?: CallOverrides): Promise<string>;

  paymentReceiverContract(overrides?: CallOverrides): Promise<string>;

  quoteCrossChainMessage(
    targetChain: BigNumberish,
    payFeesIn: BigNumberish,
    tokenAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  router(overrides?: CallOverrides): Promise<string>;

  subscribeToCrossChainRoom(
    user: string,
    roomId: BigNumberish,
    amount: BigNumberish,
    payFeesIn: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  subscriptionToken(overrides?: CallOverrides): Promise<string>;

  updateAddresses(
    _paymentReceiverContract: string,
    _subscriptionToken: string,
    _destinationChainSelector: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawTokens(
    token: string,
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    destinationChainSelector(overrides?: CallOverrides): Promise<BigNumber>;

    linkToken(overrides?: CallOverrides): Promise<string>;

    paymentReceiverContract(overrides?: CallOverrides): Promise<string>;

    quoteCrossChainMessage(
      targetChain: BigNumberish,
      payFeesIn: BigNumberish,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<string>;

    subscribeToCrossChainRoom(
      user: string,
      roomId: BigNumberish,
      amount: BigNumberish,
      payFeesIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    subscriptionToken(overrides?: CallOverrides): Promise<string>;

    updateAddresses(
      _paymentReceiverContract: string,
      _subscriptionToken: string,
      _destinationChainSelector: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawTokens(
      token: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PaymentSent(address,uint256,uint256,bytes32)"(
      sender?: string | null,
      roomId?: null,
      amount?: null,
      messageId?: null
    ): PaymentSentEventFilter;
    PaymentSent(
      sender?: string | null,
      roomId?: null,
      amount?: null,
      messageId?: null
    ): PaymentSentEventFilter;
  };

  estimateGas: {
    destinationChainSelector(overrides?: CallOverrides): Promise<BigNumber>;

    linkToken(overrides?: CallOverrides): Promise<BigNumber>;

    paymentReceiverContract(overrides?: CallOverrides): Promise<BigNumber>;

    quoteCrossChainMessage(
      targetChain: BigNumberish,
      payFeesIn: BigNumberish,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    subscribeToCrossChainRoom(
      user: string,
      roomId: BigNumberish,
      amount: BigNumberish,
      payFeesIn: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    subscriptionToken(overrides?: CallOverrides): Promise<BigNumber>;

    updateAddresses(
      _paymentReceiverContract: string,
      _subscriptionToken: string,
      _destinationChainSelector: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawTokens(
      token: string,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    destinationChainSelector(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    linkToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paymentReceiverContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quoteCrossChainMessage(
      targetChain: BigNumberish,
      payFeesIn: BigNumberish,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    subscribeToCrossChainRoom(
      user: string,
      roomId: BigNumberish,
      amount: BigNumberish,
      payFeesIn: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    subscriptionToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateAddresses(
      _paymentReceiverContract: string,
      _subscriptionToken: string,
      _destinationChainSelector: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawTokens(
      token: string,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
