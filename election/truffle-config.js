var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "denial eagle volcano decide elite style fox laundry shaft sweet ladder vintage";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/f0e2f65daf2448869f862ccb3482e8de");
      },
      network_id: 4
    }
  }
};
// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // for more about customizing your Truffle configuration!
//   networks: {
//     development: {
//       host: "192.168.50.106",
//       port: 7545,
//       network_id: "*" // Match any network id
//     }
//   }
// };
