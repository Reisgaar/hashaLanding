import { Component, OnInit } from '@angular/core';
import { statsList } from 'src/app/constants/animals';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  selectedStat: string = 'speed';
  statsList = statsList;

  constructor() { }

  ngOnInit(): void {
  }

  changeSelectedStat(newStat: string): void {
    this.selectedStat = newStat;
  }

}
