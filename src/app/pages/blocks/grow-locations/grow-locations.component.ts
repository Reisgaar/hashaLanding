import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grow-locations',
  templateUrl: './grow-locations.component.html',
  styleUrls: ['./grow-locations.component.scss']
})
export class GrowLocationsComponent implements OnInit {
  images: Array<string> = ['incubators', 'playground', 'school', 'gym', 'others'];
  sliderPosition: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  moveSlider(isNext: boolean): void {
    if (isNext && this.sliderPosition === ((this.images.length - 1) * -100)) {
      this.sliderPosition = 0;
    } else if (isNext && this.sliderPosition > (this.images.length * -100)) {
      this.sliderPosition -= 100;
    } else if (!isNext && this.sliderPosition === 0) {
      this.sliderPosition = (this.images.length - 1) * -100;
    } else if (!isNext && this.sliderPosition < 0) {
      this.sliderPosition += 100;
    }
  }

}
