import { Injectable } from '@angular/core';
// import Web3 from 'web3';
// import WalletConnectProvider from '@walletconnect/web3-provider';
import { Subject } from 'rxjs';
// import Web3Modal from './tools/Web3Modal.js';
import { environment } from 'src/environments/environment';
import { NetworkService } from './network.service';

declare let window: any;
import * as RPC from '../../../constants/rpc.constants';
import { IRPC } from '../../../interfaces/rpc';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  // public web3js: any;
  // public provider: any;
  // public accounts: any;
  // web3Modal;
  // net: string;
  // tokenlogo: string;
  // addresses: any;
  // private accountStatusSource = new Subject<any>();
  // accountStatus$ = this.accountStatusSource.asObservable();
  // networkBlockTime: number;

  // constructor(
  //   private networkService: NetworkService,
  // ) {
  //   this.addresses = this.networkService.getAddressNetwork();
  //   this.networkBlockTime = this.networkService.getNetworkBlockTime();
  //   const providerOptions = {
  //     walletconnect: {
  //       package: WalletConnectProvider,
  //       options: {
  //         infuraId: environment.infuraId
  //       }
  //     }
  //   };

  //   this.web3Modal = new Web3Modal({
  //     chainId: RPC.RPC.find(chain => chain.chainName === environment.network).chainId,
  //     cacheProvider: true,
  //     providerOptions,
  //   });

  //   let host: string;
  //   switch (environment.network){
  //     case 'mainnet': {
  //       host = 'https://mainnet.infura.io/v3/' + environment.infuraId;
  //       break;
  //     }
  //     case 'kovan': {
  //       host = 'https://kovan.infura.io/v3/' + process.env.INFURA_API;
  //       break;
  //     }
  //     case 'testnet': {
  //       host = 'https://data-seed-prebsc-1-s3.binance.org:8545';
  //       // host = 'https://data-seed-prebsc-1-s1.binance.org:8545';
  //       break;
  //     }
  //     case 'bsc': {
  //       host = 'https://bsc-dataseed1.binance.org:443';
  //       break;
  //     }
  //     case 'velas-testnet': {
  //       host = 'https://evmexplorer.testnet.velas.com/rpc';
  //       break;
  //     }
  //     case 'polygon': {
  //       host = 'https://polygon-rpc.com/';
  //       break;
  //     }
  //     default: {
  //       host = 'https://evmexplorer.testnet.velas.com/rpc';
  //       break;
  //     }
  //   }
  //   this.web3js = new Web3(host);
  // }


  // public async connectAccount(keepConnection: boolean): Promise<any> {
  //   try {
  //     if (!keepConnection) {
  //       this.web3Modal.clearCachedProvider();
  //     }
  //     this.provider = await this.web3Modal.connect(); // set provider
  //     this.web3js = new Web3(this.provider); // create web3 instance
  //     const chainId = await this.web3js.eth.net.getId();
  //     if (!await this.checkChangeRPC(chainId)) {
  //       return;
  //     }
  //     this.accounts = await this.web3js.eth.getAccounts();
  //     this.accountStatusSource.next(this.accounts);
  //     window.ethereum.on('accountsChanged', async (accounts) => {
  //       this.web3js = new Web3(this.provider); // create web3 instance
  //       this.accounts = await this.web3js.eth.getAccounts();
  //       window.location.reload();
  //     });
  //     return this.accounts;
  //   } catch (error) {
  //   }
  // }

  // public getWalletAddress(): any {
  //   return this.accounts[0];
  // }

  // public isWalletConnected(): boolean {
  //   return this.provider !== undefined;
  // }

  // public async syncAccount(): Promise<any> {
  //   if (!this.provider) {
  //     console.log('Please connect your wallet');
  //   }
  // }

  // public async lastBlockTimestamp(): Promise<number> {
  //   await this.syncAccount();
  //   const blockInfo = await this.web3js.eth.getBlock('latest');
  //   return blockInfo.timestamp;
  // }

  // public async lastBlockNumber(): Promise<number> {
  //   // await this.syncAccount();
  //   return await this.web3js.eth.getBlockNumber();
  // }

  // public async estimatedDateOfBlock(block: number): Promise<Date> {
  //   const blockDiff = block - await this.lastBlockNumber();
  //   if (blockDiff <= 0) {
  //     return null;
  //   }
  //   const leftSeconds = blockDiff * this.networkBlockTime;
  //   const date = new Date();
  //   date.setSeconds(date.getSeconds() + leftSeconds);
  //   return date;
  // }

  // public async getETHBalance(addr: string = '0x'): Promise<string> {
  //   if (addr === '0x') {
  //     addr = this.accounts[0];
  //   }
  //   return await this.web3js.eth.getBalance(addr);
  // }

  // public async validateAddress(addr: string): Promise<boolean> {
  //   return this.web3js.utils.isAddress(addr);
  // }

  // /**
  //  * Checks if connected RPC corresponds with environment network
  //  */
  // public async checkRPC(chainId): Promise<any> {
  //   const rpc = this.getRPCByName(environment.network);
  //   return rpc.chainId === chainId;
  // }

  // /**
  //  * Checks if connected RPC corresponds with environment network
  //  */
  // public async checkChangeRPC(chainId): Promise<any> {
  //   const rpc = this.getRPCByName(environment.network);
  //   if (rpc.chainId === chainId) {
  //     return true;
  //   } else {
  //     return await this.changeRPC(rpc);
  //   }
  // }

  // /**
  //  * Gets RPC data by its chain Name
  //  */
  // public getRPCByName(chainName): any {
  //   return RPC.RPC.find(chain => chain.chainName === chainName);
  // }

  // /**
  //  * Gets RPC data by its chain hex id
  //  */
  // public getRPCByHexChainId(hexChainId): any {
  //   return RPC.RPC.find(chain => chain.rpc.chainId === hexChainId);
  // }

  // /**
  //  * Changes the wallet connected RPC, if not saved, calls to addRPC
  //  */
  // public async changeRPC(rpc: IRPC): Promise<any> {
  //   return new Promise(async resolve => {
  //     try {
  //       await window.ethereum.request({
  //         method: 'wallet_switchEthereumChain',
  //         params: [{chainId: rpc.rpc.chainId}],
  //       });
  //       resolve(true);
  //     } catch (e) {
  //       if (e.code === 4902) {
  //         resolve(await this.addRPC(rpc));
  //       } else {
  //         console.log(e);
  //       }
  //     }
  //   });
  // }

  // /**
  //  * Adds an RPC to the wallet
  //  */
  // public async addRPC(rpc: IRPC): Promise<any> {
  //   return new Promise(async resolve => {
  //     await window.ethereum.request({
  //       method: 'wallet_addEthereumChain',
  //       params: [rpc.rpc]
  //     }).then(async () => {
  //       resolve(await this.changeRPC(rpc));
  //     }).catch((e) => {
  //       console.log(e);
  //       resolve(false);
  //     });
  //   });
  // }

  // /**
  //  * Sets given token on metamask
  //  */
  // public async setTokenOnMetamask(type: string, address: string, symbol: string, decimal: string, logo: string): Promise<any> {

  //   const litAssetType = type;
  //   const litAssetAddress = address;
  //   const litAssetSymbol = symbol;
  //   const litAssetDecimal = decimal;
  //   const litAssetLogo = logo;

  //   this.provider = await this.web3Modal.connect(); // set provider
  //   this.web3js = new Web3(this.provider); // create web3 instance

  //   this.web3js.currentProvider.sendAsync({
  //     method: 'wallet_watchAsset',
  //     params: {
  //       type: litAssetType, // Chain ERC20
  //       options: {
  //         address: litAssetAddress,
  //         symbol: litAssetSymbol,
  //         decimals: litAssetDecimal,
  //         image: litAssetLogo,
  //       },
  //     },
  //     id: Math.round(Math.random() * 100000)
  //   }, (err, data) => {
  //     if (!err) {
  //       if (data.result) {
  //         console.log('Token added');
  //       } else {
  //         console.log(data);
  //         console.log('Some error');
  //       }
  //     } else {
  //       console.log(err.message);
  //     }
  //   });
  // }
}
