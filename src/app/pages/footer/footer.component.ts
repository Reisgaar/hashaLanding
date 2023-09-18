import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeActualBlock(changeTo: string): void {
    const element = document.getElementById(changeTo);
    if (changeTo === 'home') {
      window.scroll({top: 0, left: 0, behavior: 'smooth'});
    } else {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

}
