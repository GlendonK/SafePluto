// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract SafePluto is ERC20("Safe Pluto", "SAP"){
    // 100,000,000 SAP express with another 18 dp
    address payable owner;

    constructor(address payable _owner) {
        owner = _owner;
        _mint(address(this), 100000000000000000000000000);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    function mint(uint256 amount) public onlyOwner {
        _mint(address(this), amount);
    }

    /**
    To transfer to SAP out of contract >.o
     */
    function transferSAP(uint256 amount) external onlyOwner {
        transfer(owner, amount);

    }

    function getOwnerAddr() external view returns(address) {
        return owner;
    }

    function buySafePluto(uint256 amount) payable external {
        /**
        0.0001 eth per 1 sap.
        100000000000000 wei per 1 sap
         */
        require(msg.value >= 100000000000000 wei, "Mininum need 0.1 ETH to buy");
        require(amount >= 1000, "Minimum purchase of 1000 SAP");
        owner.transfer(msg.value);
        transfer(address(this), 1000);

    }



}