import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subsection-title',
  templateUrl: './subsection-title.component.html',
  styleUrls: ['./subsection-title.component.scss']
})
export class SubsectionTitleComponent implements OnInit {
  @Input() title: string;
  @Input() align: string; // left, center or right
  @Input() color: string; // intense or light

  constructor() { }

  ngOnInit(): void {
  }

}
