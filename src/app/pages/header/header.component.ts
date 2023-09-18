import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  actualBlock: string = 'home';
  ignoreScrollEvent: boolean = false;
  responsiveMenuIsVisible: boolean = false;
  langMenuIsVisible: boolean = false;
  currentLanguage: string;

  constructor(
    public translate: TranslateService
  ) {
    this.currentLanguage = this.translate.currentLang.toLowerCase();
  }

  ngOnInit(): void {
  }

  // Change slider on resize
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth > 768) {
      this.langMenuIsVisible = false;
      this.responsiveMenuIsVisible = false;
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if (!this.ignoreScrollEvent) {
      const windowHeight = window.innerHeight;
      const pets = document.getElementById('pets').getBoundingClientRect().top;
      const seasons = document.getElementById('seasons').getBoundingClientRect().top;
      const partners = document.getElementById('partners').getBoundingClientRect().top;
      const community = document.getElementById('community').getBoundingClientRect().top;
      if (community < (windowHeight / 2)) {
        this.actualBlock = 'community';
      } else if (partners < (windowHeight / 2)) {
        this.actualBlock = 'partners';
      } else if (seasons < (windowHeight / 2)) {
        this.actualBlock = 'seasons';
      } else if (pets < (windowHeight / 2)) {
        this.actualBlock = 'pets';
      } else if (pets >= (windowHeight / 2)) {
        this.actualBlock = 'home';
      }
    }
  }

  changeActualBlock(changeTo: string): void {
    this.ignoreScrollEvent = true;
    this.actualBlock = changeTo;
    const element = document.getElementById(changeTo);
    if (changeTo === 'home') {
      window.scroll({top: 0, left: 0, behavior: 'smooth'});
    } else {
      element.scrollIntoView({behavior: 'smooth'});
    }
    // Avoid scroll event on smooth scrolling
    setTimeout(() => { this.ignoreScrollEvent = false; }, 1000);
    this.responsiveMenuIsVisible = false;
  }

  switchResponsiveMenu(): void {
    this.langMenuIsVisible = false;
    this.responsiveMenuIsVisible = !this.responsiveMenuIsVisible;
  }

  switchLangMenu(): void {
    this.responsiveMenuIsVisible = false;
    this.langMenuIsVisible = !this.langMenuIsVisible;
  }

  setLanguageTo(lang: string): void {
    this.currentLanguage = lang;
    this.translate.use(lang);
    this.langMenuIsVisible = !this.langMenuIsVisible;
  }

}
