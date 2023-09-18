import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'timeStampIsPast'})
export class TimeStampIsPastPipe implements PipeTransform {

    transform(value: string): boolean {
      let isPast = true;
      const data = parseInt(value, 0);
      const now = Date.now() / 1000;
      if (data < now) {
        isPast = false;
      }
      return isPast;
    }
}
