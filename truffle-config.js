require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

//Account credentials from which our contract will be deployed
const mnemonic = process.env.MNEMONIC;

//API key of your Datahub account for Avalanche Fuji test network
const APIKEY = process.env.APIKEY;

module.exports = {
  networks: {
    fuji: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic,
          providerOrUrl: `https://avalanche--fuji--rpc.datahub.figment.io/apikey/${APIKEY}/ext/bc/C/rpc`,
          chainId: "0xa869",
        });
      },
      network_id: "*",
      gas: 3000000,
      gasPrice: 470000000000,
      skipDryRun: true,
      // numberOfAddresses: 1,
      networkCheckTimeout: 1000000,
      // confirmations: 2,
      // timeoutBlocks: 200,
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: { phrase: MNENOMIC },
          providerOrUrl: INFURA_API_KEY,
        }),
      network_id: 4, // rinkeby’s id
      numberOfAddresses: 1,
      gas: 9500000, // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
      networkCheckTimeout: 1000000, // NB: this option does nothing
      //confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out (minimum/default: 50)
      //skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
