module.exports = {
  NETWORK: {
    MAINNET: 'mainnet',
    TESTNET: 'testnet'
  },
  PORT: {
    MAINNET: 8333,
    TESTNET: 18333
  },
  Magic: {
    MAINNET: [0xF9, 0xBE, 0xB4, 0xD9],
    TESTNET: [0xFA, 0xBF, 0xB5, 0xDA],
    TESTNET3: [0x0B, 0x11, 0x09, 0x07]
  },
  Command: {
    VERSION: [0x76, 0x65, 0x72, 0x73, 0x69, 0x6F, 0x6E, 0x00, 0x00, 0x00, 0x00, 0x00],
    VERACK: [0x76, 0x65, 0x72, 0x61, 0x63, 0x6B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
    GETHEADERS: [0x67, 0x65, 0x74, 0x68, 0x65, 0x61, 0x64, 0x65, 0x72, 0x73, 0x00, 0x00],
    GETDATA: [0x67, 0x65, 0x74, 0x64, 0x61, 0x74, 0x61, 0x00, 0x00, 0x00, 0x00, 0x00]
  },
  GENESIS_BLOCK: {
    hash: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'
  }
}
