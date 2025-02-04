// SPDX-License-Identifier: MIT
pragma solidity =0.8.6;

import '@rifcoin/toolkit/contracts/interfaces/INonfungiblePositionManager.sol';
import '@rifcoin/swap/contracts/interfaces/IRifainSwapFactory.sol';
import '@rifcoin/swap/contracts/interfaces/IRifainSwap.sol';

import '@rifcoin/toolkit/contracts/libraries/PoolAddress.sol';

/// @notice Encapsulates the logic for getting info about a NFT token ID
library NFTPositionInfo {
    /// @param factory The address of the Uniswap V3 Factory used in computing the pool address
    /// @param nonfungiblePositionManager The address of the nonfungible position manager to query
    /// @param tokenId The unique identifier of an Uniswap V3 LP token
    /// @return pool The address of the Uniswap V3 pool
    /// @return tickLower The lower tick of the Uniswap V3 position
    /// @return tickUpper The upper tick of the Uniswap V3 position
    /// @return liquidity The amount of liquidity staked
    function getPositionInfo(
        IRifainSwapFactory factory,
        INonfungiblePositionManager nonfungiblePositionManager,
        uint256 tokenId
    )
        internal
        view
        returns (
            IRifainSwap pool,
            int24 tickLower,
            int24 tickUpper,
            uint128 liquidity
        )
    {
        address token0;
        address token1;
        uint24 fee;
        (, , token0, token1, fee, tickLower, tickUpper, liquidity, , , , ) = nonfungiblePositionManager.positions(
            tokenId
        );

        pool = IRifainSwap(
            PoolAddress.computeAddress(
                address(factory),
                PoolAddress.PoolKey({token0: token0, token1: token1, fee: fee})
            )
        );
    }
}
