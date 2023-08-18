const { ethers } = require('hardhat');

const main = async () => {
  const HelloAya = await ethers.getContractFactory('HelloAya');
  const helloAya = await HelloAya.deploy();

  const contractAddress = await helloAya.getAddress();

  console.log(`Contract deployed to ${contractAddress}`);
};

main().catch((error) => {
  console.error('you ran into an error', error);
  process.exitCode = 1;
});
