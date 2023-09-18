import { Injectable } from '@angular/core';
import { MaxUint256 } from '@ethersproject/constants';
import { ConnectionService } from '../connection/connection.service';
// Abi
const BEP20 = require('../contracts/abi/BEP20.json');

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private connectionService: ConnectionService
  ) { }

  // Get balance of an erc20 token
  async getTokenBalance(tokenAddress: string): Promise<any> {
    // get user wallet and contract
    const wallet = await this.connectionService.getWalletAddress();
    const contract = await new this.connectionService.web3js.eth.Contract(BEP20.abi, tokenAddress);
    // get balance on Wei
    return await contract.methods.balanceOf(wallet).call();
  }

  async getTokenTotalSupply(tokenAddress: string): Promise<any> {
    const contract = new this.connectionService.web3js.eth.Contract(BEP20.abi, tokenAddress);
    return await contract.methods.totalSupply().call();
  }

  // Approvement of an ERC20 token, check and if not done, do the approvement
  async tokenApprovement(spender: string, userAddr: string, tokenToSpend: string): Promise<any> {
    let isApproved = false;
    isApproved = await this.checkApproved(spender, userAddr, tokenToSpend);
    if (!isApproved) {
      isApproved = await this.tokenApprove(spender, userAddr, tokenToSpend);
    }
    return isApproved;
  }

  // Check approvement, if allowance is 0 returns false, else returns true
  async checkApproved(spender: string, userAddr: string, tokenToSpend: string): Promise<any> {
    console.log('Checking approvement of the contract:');
    console.log(spender);
    console.log('To spend tokens with address:');
    console.log(tokenToSpend);
    console.log('Of the wallet:');
    console.log(userAddr);
    try {
      const contract = await await new this.connectionService.web3js.eth.Contract(BEP20.abi, tokenToSpend);
      const allowance = await contract.methods.allowance(userAddr, spender).call();
      if (allowance === '0') {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Do de approvement of token with max uint256 amount
  async tokenApprove(spender: string, userAddr: string, tokenToSpend: string): Promise<any> {
    console.log('Approving the contract:');
    console.log(spender);
    console.log('To spend tokens with address:');
    console.log(tokenToSpend);
    console.log('Of the wallet:');
    console.log(userAddr);
    let isApproved = false;
    try {
      const stringAmount = MaxUint256.toString();
      const contract = await await new this.connectionService.web3js.eth.Contract(BEP20.abi, tokenToSpend);
      await contract.methods.approve(spender, stringAmount).send({ from: userAddr })
        .on('transactionHash', txHash => {
          console.log('Transaction hash:');
          console.log(txHash);
        });
      isApproved = true;
    } catch (error) {
      console.log('Approvement error:');
      console.log(error);
    }
    console.log('Approvement done!');
    return isApproved;
  }

}
