import { Component, OnInit } from '@angular/core';
import { animalList } from 'src/app/constants/animals';

@Component({
  selector: 'app-randomization',
  templateUrl: './randomization.component.html',
  styleUrls: ['./randomization.component.scss']
})
export class RandomizationComponent implements OnInit {
  sliderPosition: number = 0;
  barPercentage : number = 5;
  barPathStyle: string = 'inset(0% ' + (100 - this.barPercentage).toString() + '% 0% 0%)';
  selectedAnimal: string = 'ursids';
  animalList = animalList;

  constructor() { }

  ngOnInit(): void {
  }

  moveSlider(isNext: boolean): void {
    if (isNext && this.sliderPosition === -400) {
      this.sliderPosition = 0;
    } else if (isNext && this.sliderPosition > -400) {
      this.sliderPosition -= 100;
    }else if (!isNext && this.sliderPosition === 0) {
      this.sliderPosition = -400;
    } else if (!isNext && this.sliderPosition < 0) {
      this.sliderPosition += 100;
    }
    this.changeBarPercentage();
  }

  moveSliderToPosition(position: number): void {
    this.sliderPosition = position;
    this.changeBarPercentage();
  }

  changeBarPercentage(): void {
    switch (this.sliderPosition) {
      case 0: this.barPercentage = 5; break;
      case -100: this.barPercentage = 25; break;
      case -200: this.barPercentage = 50; break;
      case -300: this.barPercentage = 75; break;
      case -400: this.barPercentage = 100; break;
    }
    this.barPathStyle = 'inset(0% ' + (100 - this.barPercentage).toString() + '% 0% 0%)';
  }

  setBarWithMouse(e: any): void {
    const mousePosition = e.offsetX + 3;
    const size = e.target.offsetWidth;
    const percentage = Math.round((mousePosition * 100) / size);
    if (percentage < 15) {
      this.moveSliderToPosition(0);
    } else if (percentage < 25) {
      this.moveSliderToPosition(-100);
    } else if (percentage < 50) {
      this.moveSliderToPosition(-200);
    } else if (percentage < 75) {
      this.moveSliderToPosition(-300);
    } else if (percentage < 100) {
      this.moveSliderToPosition(-400);
    }
    this.barPercentage = percentage;
    this.barPathStyle = 'inset(0% ' + (100 - percentage).toString() + '% 0% 0%)';
  }

  changeSelectedAnimal(animal: string): void {
    this.selectedAnimal = animal;
  }

}
