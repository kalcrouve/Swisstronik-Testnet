require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x5dcc6d4a75ee1b01e6904b2a3842d6627452461b933b78ddb71f21876c54083a"], //Your private key starting with "0x"
    },
  },
};
