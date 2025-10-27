import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languageChange = new Subject<string>();
  private currentLang: string = 'en';

  constructor(private translate: TranslateService) {
    // Initialize with stored language or default
    const storedLang = localStorage.getItem('language') || 'en';
    this.setLanguage(storedLang);
  }

  setLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('language', lang);
    this.languageChange.next(lang);
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  getLanguage(): string {
    return this.currentLang;
  }
} 