require("@nomiclabs/hardhat-ethers");

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
      hardhat: {
        accounts: {
          mnemonic: 'test test test test test test test test test test test junk',
          initialBalance: '10000000000000000000000' // 10^22 wei, which is 10000 Ether
        }
      },
      localhost: {
        url: "http://localhost:8545"
      }
    },
    solidity: {
      version: "0.8.20",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
    paths: {
      sources: "./contracts",
      tests: "./test",
      cache: "./cache",
      artifacts: "./artifacts"
    },
    mocha: {
      timeout: 20000
    }
};