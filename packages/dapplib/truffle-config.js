require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture stone deny pulse comfort install process metal gather'; 
let testAccounts = [
"0x129eedfa1698ead9f905fa9c34060814f97e81e9584e1bd9481d86b2a5396ebe",
"0x06971f27777ce7b6aff2a840cafd35a751e4d7fa1648270401bb93a1649262c5",
"0xe52cc43c2e1970bf7eba16035c614da73b3a0287fedc9f77ed85b8ef604a5223",
"0xaabe942350a789a505ffe2d622938da76d275fcb74a1b6155866b7a37f228cc2",
"0xe37bbda89686b9bba6f067516abdba9f37062d61f5759d09da519fd7feb82685",
"0x3b3706c7e7d3710444f99a16b26d82fb71e9d9132185f8b48c820e8025005b0e",
"0xd439544ff8e995d6ce183957009eba7d5360b71f4cea081e1f85f6588b5777ac",
"0xfc72ca82d90d990486774ce18ab9eead0a35ac60c6c5a2e561f6768194d1678f",
"0xb2bf8c6b2e1965f1c2262ca7cdb33a3cbd368fcbfc305437a78398478b8ec644",
"0xce9fa9388ad4902173297e61dbdcf916d75165943995677221f3b6477dfed491"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


