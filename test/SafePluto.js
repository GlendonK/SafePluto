const { expect } = require("chai");

describe("SafePluto Contract", function() {
  let Token, token, owner, addr1, addr2;
  beforeEach(async () => {
    [owner, addr1, addr2] = await ethers.getSigners(); 
    Token = await ethers.getContractFactory("SafePluto");
    token = await Token.deploy(owner.address);
  });

  describe("Deployment", () => {
    it("should set correct owner", async () => {
      expect(await token.getOwnerAddr()).to.equal(owner.address);
    })
  });

  describe("Check Total Supply", () => {
    it("Should have 100000000000000000000000000 SAP", async () => {
      const total = await token.totalSupply();
      console.log(`Total Supply: ${total}`);
      expect(total).to.equal('100000000000000000000000000');
    })
  });
});