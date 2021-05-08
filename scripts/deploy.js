const hre = require("hardhat");

async function main(){
    const [owner] = await ethers.getSigners();
    const totalSupply = await owner.getBalance();
    const Contract = await hre.ethers.getContractFactory("SafePluto");
    const contract = await Contract.deploy(owner.address); // insert YOUR wallet address here for testnet deployment
    await contract.deployed();
    console.log("SafePluto deployed to:", contract.address);
    console.log("Owner address: ", owner.address)
    console.log("Total Supply: ", totalSupply.toString());
}

main().then(() => process.exit(0).catch(error => {console.error(error);
    process.exit(1)})); 