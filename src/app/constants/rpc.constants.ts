import {IRPC} from '../interfaces/rpc';

export const RPC: IRPC[] = [
  {
    chainName: 'testnet',
    chainId: 97,
    rpc : {
      chainId: '0x' + (97).toString(16),
      chainName: 'Binance Smart Chain Testnet',
      nativeCurrency: {
        name: 'Binance Chain Native Token',
        symbol: 'tBNB',
        decimals: 18
      },
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545', 'https://data-seed-prebsc-2-s1.binance.org:8545', 'https://data-seed-prebsc-1-s2.binance.org:8545', 'https://data-seed-prebsc-2-s2.binance.org:8545', 'https://data-seed-prebsc-1-s3.binance.org:8545', 'https://data-seed-prebsc-2-s3.binance.org:8545'],
      blockExplorerUrls: ['https://testnet.bscscan.com']
    },
    logoURI: 'assets/bsc.png'
  },
  {
    chainName: 'velas',
    chainId: 106,
    rpc : {
      chainId: '0x' + (106).toString(16),
      chainName: 'Velas',
      nativeCurrency: {
        name: 'Velas',
        symbol: 'VLX',
        decimals: 18
      },
      rpcUrls: ['https://mainnet.velas.com/rpc'],
      blockExplorerUrls: ['https://evmexplorer.velas.com']
    },
    logoURI: 'assets/velas.png'
  },
  {
    chainName: 'mainnet',
    chainId: 1,
    rpc : {
      chainId: '0x' + (1).toString(16),
      chainName: 'Ethereum Mainnet',
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
      },
      rpcUrls: ['https://mainnet.infura.io/v3/${INFURA_API_KEY}', 'wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}', 'https://api.mycryptoapi.com/eth', 'https://cloudflare-eth.com'],
      blockExplorerUrls: ['https://etherscan.io']
    }
  },
  {
    chainName: 'bsc',
    chainId: 56,
    rpc : {
      chainId: '0x' + (56).toString(16),
      chainName: 'Binance Smart Chain Mainnet',
      nativeCurrency: {
        name: 'Binance Chain Native Token',
        symbol: 'BNB',
        decimals: 18
      },
      rpcUrls: [ 'https://bsc-dataseed1.binance.org', 'https://bsc-dataseed2.binance.org', 'https://bsc-dataseed3.binance.org', 'https://bsc-dataseed4.binance.org', 'https://bsc-dataseed1.defibit.io', 'https://bsc-dataseed2.defibit.io', 'https://bsc-dataseed3.defibit.io', 'https://bsc-dataseed4.defibit.io', 'https://bsc-dataseed1.ninicoin.io', 'https://bsc-dataseed2.ninicoin.io', 'https://bsc-dataseed3.ninicoin.io', 'https://bsc-dataseed4.ninicoin.io'],
      blockExplorerUrls: ['https://bscscan.com']
    }
  },
  {
    chainName: 'kovan',
    chainId: 42,
    rpc : {
      chainId: '0x' + (42).toString(16),
      chainName: 'Ethereum Testnet Kovan',
      nativeCurrency: {
        name: 'Kovan Ether',
        symbol: 'KOV',
        decimals: 18
      },
      rpcUrls: ['https://kovan.poa.network', 'http://kovan.poa.network:8545', 'https://kovan.infura.io/v3/${INFURA_API_KEY}', 'wss://kovan.infura.io/ws/v3/${INFURA_API_KEY}', 'ws://kovan.poa.network:8546'],
      blockExplorerUrls: ['https://kovan.etherscan.io']
    }
  },
  {
    chainName: 'rinkeby',
    chainId: 4,
    rpc : {
      chainId: '0x' + (4).toString(16),
      chainName: 'Ethereum Testnet Rinkeby',
      nativeCurrency: {
        name: 'Rinkeby Ether',
        symbol: 'RIN',
        decimals: 18
      },
      rpcUrls: ['https://rinkeby.infura.io/v3/${INFURA_API_KEY}', 'wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}'],
      blockExplorerUrls: ['https://rinkeby.etherscan.io']
    }
  },
  {
    chainName: 'velas-testnet',
    chainId: 111,
    rpc : {
      chainId: '0x' + (111).toString(16),
      chainName: 'Velas Testnet',
      nativeCurrency: {
        name: 'Velas',
        symbol: 'VLX',
        decimals: 18
      },
      rpcUrls: ['https://testnet.velas.com/rpc'],
      blockExplorerUrls: ['https://evmexplorer.testnet.velas.com']
    },
    logoURI: 'assets/velas.png'
  },
  {
    chainName: 'velas-devnet',
    chainId: 106,
    rpc : {
      chainId: '0x' + (106).toString(16),
      chainName: 'Velas Devnet',
      nativeCurrency: {
        name: 'Velas',
        symbol: 'VLX',
        decimals: 18
      },
      rpcUrls: ['https://devnet.velas.com/rpc'],
      blockExplorerUrls: ['https://evmexplorer.devnet.velas.com']
    },
    logoURI: 'assets/velas.png'
  }
];

