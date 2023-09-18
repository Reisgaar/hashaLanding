import {Injectable} from '@angular/core';
/*import * as ADDRESSES from './tools/addresses';
import * as KOVAN_ADDRESSES from './tools/kovanAddresses';
import * as RINKEBY_ADDRESSES from './tools/rinkebyAddresses';
import * as TESTNET_ADDRESSES from './tools/testnetAddresses';
import * as VELAS_ADDRESSES from './tools/velasAddresses';
import * as VELAS_TESTNET_ADDRESSES from './tools/testnetVelasAddresses';
import * as BSC_ADDRESSES from './tools/bscAddresses';
import * as POLYGON_ADDRESSES from './tools/polygonAddresses';
import * as MUMBAI_ADDRESSES from './tools/mumbaiAddresses';*/
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  // // addresses = ADDRESSES;
  // blockTime: number;

  // constructor() {
  // }

  // public getAddressNetwork(): any {
  //   /*switch (environment.network) {
  //     case 'mainnet': {
  //       this.addresses = ADDRESSES;
  //       break;
  //     }
  //     case 'kovan': {
  //       this.addresses = KOVAN_ADDRESSES;
  //       break;
  //     }
  //     case 'rinkeby': {
  //       this.addresses = RINKEBY_ADDRESSES;
  //       break;
  //     }
  //     case 'testnet': {
  //       this.addresses = TESTNET_ADDRESSES;
  //       break;
  //     }
  //     case 'bsc': {
  //       this.addresses = BSC_ADDRESSES;
  //       break;
  //     }
  //     case 'velas': {
  //       this.addresses = VELAS_ADDRESSES;
  //       break;
  //     }
  //     case 'velas-testnet': {
  //       this.addresses = VELAS_TESTNET_ADDRESSES;
  //       break;
  //     }
  //     case 'polygon': {
  //       this.addresses = POLYGON_ADDRESSES;
  //       break;
  //     }
  //     case 'mumbai': {
  //       this.addresses = MUMBAI_ADDRESSES;
  //       break;
  //     }
  //     default: {
  //       this.addresses = ADDRESSES;
  //       break;
  //     }
  //   }
  //   return this.addresses;*/
  // }

  // public getNetworkBlockTime(): number {
  //   switch (environment.network) {
  //     case 'mainnet': {
  //       this.blockTime = 15;
  //       break;
  //     }
  //     case 'kovan': {
  //       this.blockTime = 15;
  //       break;
  //     }
  //     case 'testnet': {
  //       this.blockTime = 3;
  //       break;
  //     }
  //     case 'bsc': {
  //       this.blockTime = 3;
  //       break;
  //     }
  //     case 'velas': {
  //       this.blockTime = 0.4;
  //       break;
  //     }
  //     case 'velas-testnet': {
  //       this.blockTime = 0.4;
  //       break;
  //     }
  //     case 'polygon': {
  //       this.blockTime = 2;
  //       break;
  //     }
  //     case 'mumbai': {
  //       this.blockTime = 2;
  //       break;
  //     }
  //     default: {
  //       this.blockTime = 3;
  //       break;
  //     }
  //   }
  //   return this.blockTime;
  // }
}
