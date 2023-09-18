import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'formatTime'
})

export class FormatTimePipe implements PipeTransform {
  transform(value: number): Array<any> {
    if (value >= 86400) {
      const days = Math.round(value / 60 / 60 / 24);
      return [days, 'countdown.daysLeft'];
    } else if (value < 1) {
      return ['', 'countdown.ended'];
    } else {
      return [new Date(value * 1000).toISOString().substring(11, 19), ''];
    }
  }
}
