require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
require('solidity-coverage');
const { URL, KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.19',
  networks: {
    alfajores: {
      url: URL,
      accounts: {
        mnemonic: KEY,
        path: "m/44'/52752'/0'/0",
      },
      chainId: 44787,
    },
  },
};
