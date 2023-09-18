import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';
// Abi
const ERC721 = require('../contracts/abi/ERC721.json');

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(
    private connectionService: ConnectionService
  ) { }

  // Get nft metadata
  async getNftData(tokenId: any, nftContractAddress: any): Promise<any> {
    const contract = await new this.connectionService.web3js.eth.Contract(ERC721.abi, nftContractAddress);
    // get token metadata URI and add owner and id
    const tokenMetadataURI = await contract.methods.tokenURI(tokenId).call();
    const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json());
    const owner = await contract.methods.ownerOf(tokenId).call();
    tokenMetadata.owner = owner;
    tokenMetadata.id = tokenId;
    return tokenMetadata;
  }

  // Approvement of an ERC721 token, check and if not done, do the approvement for all
  async nftCheckAllowance(spender: string, tokenAddress: string): Promise<boolean> {
    console.log('Check allowance of the NFT:');
    console.log(tokenAddress);
    const contract = new this.connectionService.web3js.eth.Contract(ERC721.abi, tokenAddress);
    const userAddr = this.connectionService.accounts[0];
    let allowance = false;
    await contract.methods.isApprovedForAll(userAddr, spender).call().then( async res => {
      console.log('nft Allowance');
      console.log(res);
      if (res === false) {
        allowance = await this.nftAllowSpender(spender, contract);
      } else {
        allowance = true;
      }
    });
    return allowance;
  }

  // Allow contract to interact with all nft of the giving address
  async nftAllowSpender(spender: string, tokenAddress: string): Promise<any> {
    console.log('Giving allowance to contract:');
    console.log(spender);
    console.log('To spend NFT of contract:');
    console.log(tokenAddress);
    const contract = new this.connectionService.web3js.eth.Contract(ERC721.abi, tokenAddress);
    const userAddr = this.connectionService.accounts[0];
    let allowance = false;
    try {
      await contract.methods.setApprovalForAll(spender, true).send({ from: userAddr })
      .on('transactionHash', txHash => {
        console.log('Transaction hash:');
        console.log(txHash);
      })
      .then( res => {
        console.log('Allowance done!');
        allowance = true;
      });
    } catch (error) {
      console.log('Allowance error:');
      allowance = false;
    }
    return allowance;
  }
}
