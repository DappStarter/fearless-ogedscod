require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember undo grace castle sugar task'; 
let testAccounts = [
"0x16deb38ac2a042565662ea53653791e3c6d7e18fff27b29e6cca44881d788459",
"0xe361b305de7ff823e6ec407c49ff2f31fa229bab203ed33d8beedde169ca694d",
"0x5b0fab7f9890938e37b77ce656ee3b11caddcd9eefaa2ee5e8170240e57ec734",
"0x4c6e8e99a8b2d5b9d410976e24179052ccd7108ba3db95875df9035d4b62d757",
"0xfd4b60f45afb01a285ab92e698e09ef824ace3361a9daca5a1d3717815e64b20",
"0xcd03c231c45f374112c291f33a5e9b5821c25cae3b5c299dc4c7a24ef5a091c7",
"0xcba863260716149a338342234ffc2e565b73eba44acc085740e62ad059e4add0",
"0x980ab14eda3b696bb88db389e0fadf84cc6b8a842c73141e26d82369b0eb8506",
"0x6b2b2f3a92b74c1e39ef4cf1f0b20ba44f07b80638bcaba70baba4a8afecdc6d",
"0xec43ff2366d90107e4c5586ef47179b14efa9034491d98e95535b045de6fd93c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
