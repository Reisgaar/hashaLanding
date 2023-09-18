import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hashaponLanding';
  supportedLanguages: Array<string> = ['en', 'es'];

  constructor(
    public translate: TranslateService
  ){
    this.userLanguage();
  }

  userLanguage(): void {
    // Register translation languages
    this.translate.addLangs(this.supportedLanguages);
    // Gel navigation language and selectedLanguage
    const navigatorLanguage = this.getNavigatorLanguage();
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    // Set default language
    if (selectedLanguage) {
      this.setLanguage(selectedLanguage);
    } else if (navigatorLanguage !== '') {
      this.setLanguage(navigatorLanguage);
    } else {
      this.setLanguage('en');
    }
  }

  setLanguage(lang: string): void {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  getNavigatorLanguage(): string {
    const navLang = navigator.language.substring(0, 2);
    if (this.supportedLanguages.includes(navLang)) {
      return navLang;
    } else {
      return '';
    }
  }
}
