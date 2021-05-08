/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
//require('@openzeppelin/hardhat-upgrades');
//require("@nomiclabs/hardhat-ethers");

const INFURA_URL = 'INSERT URL';
const PRIVATE_KEY = 'UR WALLET PRIVATE KEY';

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }

  }
};
