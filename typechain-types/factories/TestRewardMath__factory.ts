/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestRewardMath,
  TestRewardMathInterface,
} from "../TestRewardMath";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "totalRewardUnclaimed",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "totalSecondsClaimedX128",
        type: "uint160",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint160",
        name: "secondsPerLiquidityInsideInitialX128",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "secondsPerLiquidityInsideX128",
        type: "uint160",
      },
      {
        internalType: "uint256",
        name: "currentTime",
        type: "uint256",
      },
    ],
    name: "computeRewardAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "secondsInsideX128",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610511806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f20b9d1a14610030575b600080fd5b61004361003e366004610316565b610071565b6040805192835273ffffffffffffffffffffffffffffffffffffffff90911660208301520160405180910390f35b6000806100848a8a8a8a8a8a8a8a610095565b909b909a5098505050505050505050565b600080878310156100a8576100a86104a6565b6fffffffffffffffffffffffffffffffff86166100c58686610421565b6100cf91906103a8565b905060008973ffffffffffffffffffffffffffffffffffffffff1660808a6100f78b8861013f565b6101019190610456565b61010c92911b610456565b905061012f8b8373ffffffffffffffffffffffffffffffffffffffff1683610158565b9250509850989650505050505050565b60008183101561014f5781610151565b825b9392505050565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85870985870292508281108382030391505080600014156101b057600084116101a557600080fd5b508290049050610151565b8084116101bc57600080fd5b6000848688098084039381119092039190506000856101da8161046d565b169586900495938490049360008190030460010190506101fa81846103e4565b90931792600061020b8760036103e4565b600218905061021a81886103e4565b610225906002610456565b61022f90826103e4565b905061023b81886103e4565b610246906002610456565b61025090826103e4565b905061025c81886103e4565b610267906002610456565b61027190826103e4565b905061027d81886103e4565b610288906002610456565b61029290826103e4565b905061029e81886103e4565b6102a9906002610456565b6102b390826103e4565b90506102bf81886103e4565b6102ca906002610456565b6102d490826103e4565b90506102e081866103e4565b9998505050505050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461031157600080fd5b919050565b600080600080600080600080610100898b03121561033357600080fd5b8835975061034360208a016102ed565b9650604089013595506060890135945060808901356fffffffffffffffffffffffffffffffff8116811461037657600080fd5b935061038460a08a016102ed565b925061039260c08a016102ed565b915060e089013590509295985092959890939650565b600073ffffffffffffffffffffffffffffffffffffffff808316818516818304811182151516156103db576103db6104d5565b02949350505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561041c5761041c6104d5565b500290565b600073ffffffffffffffffffffffffffffffffffffffff8381169083168181101561044e5761044e6104d5565b039392505050565b600082821015610468576104686104d5565b500390565b60007f800000000000000000000000000000000000000000000000000000000000000082141561049f5761049f6104d5565b5060000390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea164736f6c6343000806000a";

type TestRewardMathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestRewardMathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestRewardMath__factory extends ContractFactory {
  constructor(...args: TestRewardMathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestRewardMath> {
    return super.deploy(overrides || {}) as Promise<TestRewardMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestRewardMath {
    return super.attach(address) as TestRewardMath;
  }
  connect(signer: Signer): TestRewardMath__factory {
    return super.connect(signer) as TestRewardMath__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestRewardMathInterface {
    return new utils.Interface(_abi) as TestRewardMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestRewardMath {
    return new Contract(address, _abi, signerOrProvider) as TestRewardMath;
  }
}
