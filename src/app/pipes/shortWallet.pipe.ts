import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shortWallet'})
export class ShortWalletPipe implements PipeTransform {

    constructor() {}

    transform(value: string): string {
      return value.slice(0, 5) + '...' + value.slice(-3);
    }
}
