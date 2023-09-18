import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() images: Array<string>;
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
