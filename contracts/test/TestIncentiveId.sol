// SPDX-License-Identifier: MIT
pragma solidity =0.8.6;
pragma abicoder v2;

import '../interfaces/IRifainSwapStaker.sol';

import '../libraries/IncentiveId.sol';

/// @dev Test contract for IncentiveId
contract TestIncentiveId {
    function compute(IRifainSwapStaker.IncentiveKey memory key) public pure returns (bytes32) {
        return IncentiveId.compute(key);
    }
}
