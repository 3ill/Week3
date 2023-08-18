const { ethers } = require('hardhat');
const { expect } = require('chai');

describe('Hello Aya', async () => {
  let helloAya;
  const [owner] = await ethers.getSigners();

  beforeEach(async () => {
    const HelloAya = await ethers.getContractFactory('HelloAya');
    helloAya = await HelloAya.deploy();
  });

  describe('Deployment ', () => {
    it('should deploy and set the correct contract owner', async () => {
      const ownerAddress = owner.address;
      const contractOwner = await helloAya.owner();

      expect(contractOwner).to.equal(ownerAddress);
    });
  });

  describe('Function caller', () => {
    it('Should set and get the right message', async () => {
      const message = 'hello world';

      await helloAya.setGreeting(message);
      const getMessage = await helloAya.getGreeting();

      expect(getMessage).to.equal(message);
    });
  });
});
