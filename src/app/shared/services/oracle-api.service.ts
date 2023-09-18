import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Abi
const BEP20 = require('./connection/contracts/abi/BEP20.json');

@Injectable({
  providedIn: 'root'
})
export class OracleApiService {
  api1 = 'https://bsc.api.0x.org/swap/v1/price?sellToken=';
  api2 = '&buyToken=BUSD&sellAmount=1000000000000000000';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getTokenPriceOnBusd(tokenAddress: string): Observable<any> {
    if (tokenAddress !== BEP20.busd) {
      if (tokenAddress === '0x0000000000000000000000000000000000000000') {
        return this.httpClient.get<any>(this.api1 + 'BNB' + this.api2);
      } else {
        // return this.httpClient.get<any>(this.api1 + tokenAddress + this.api2);
        return this.httpClient.get<any>(this.api1 + '0xF700D4c708C2be1463E355F337603183D20E0808' + this.api2);
      }
    }
  }
}
