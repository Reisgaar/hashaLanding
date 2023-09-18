import { Component, HostListener, OnInit } from '@angular/core';
import { animalList } from 'src/app/constants/animals';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  selectedClass: string = 'ursids';
  selectedStage: number = 1;
  animalList: Array<string> = animalList;
  shownIconList: Array<string>;
  shownIconAmount: number;
  sliderPosition: number = 0;

  constructor() { }

  // Change slider on resize
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.setShownIconAmount();
  }

  ngOnInit(): void {
    this.setShownIconAmount();
  }

  changeSelectedClass(newClass: string): void {
    this.selectedClass = newClass;
    this.selectedStage = 1;
  }

  changeSelectedStage(newStage: number): void {
    this.selectedStage = newStage;
  }

  setShownIconAmount(): void {
    if (window.innerWidth < 577) {
      this.shownIconAmount = 4;
    } else {
      this.shownIconAmount = 5;
    }
    this.setShownIconList();
  }

  setShownIconList(): void {
    this.shownIconList = [];
    for (let i = 0; i < this.shownIconAmount; i++) {
      if (this.sliderPosition + i < animalList.length) {
        this.shownIconList.push(this.animalList[this.sliderPosition + i]);
      } else {
        this.shownIconList.push(this.animalList[(animalList.length - (this.sliderPosition + i)) * -1]);
      }
    }
    this.checkSelectedClassVisibility();
  }

  checkSelectedClassVisibility(): void {
    if (!this.shownIconList.includes(this.selectedClass)) {
      this.selectedClass = this.shownIconList[0];
    }
  }

  moveSliderNext(): void {
    if (this.sliderPosition === (this.animalList.length - 1)) {
      this.sliderPosition = 0;
    } else {
      this.sliderPosition++;
    }
    this.setShownIconList();
  }

  moveSliderPrev(): void {
    if (this.sliderPosition === 0) {
      this.sliderPosition = this.animalList.length - 1;
    } else {
      this.sliderPosition--;
    }
    this.setShownIconList();
  }

}
