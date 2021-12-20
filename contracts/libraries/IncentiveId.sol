// SPDX-License-Identifier: MIT
pragma solidity =0.8.6;
pragma abicoder v2;

import '../interfaces/IRifainSwapStaker.sol';

library IncentiveId {
    /// @notice Calculate the key for a staking incentive
    /// @param key The components used to compute the incentive identifier
    /// @return incentiveId The identifier for the incentive
    function compute(IRifainSwapStaker.IncentiveKey memory key) internal pure returns (bytes32 incentiveId) {
        return keccak256(abi.encode(key));
    }
}
