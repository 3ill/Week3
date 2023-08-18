// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract HelloAya {
    address public immutable owner;
    string public greeting = "Hello Aya";

    constructor() {
        owner = msg.sender;
    }

    function setGreeting(string memory _greeting) external {
        greeting = _greeting;
    }

    function getGreeting() external view returns (string memory _greeting) {
        return greeting;
    }
}
