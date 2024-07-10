import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocaleSwitcherService {
  locale: string = 'fr-FR';

  setLocale(locale: string): void {
    this.locale = locale;
  }

  getLocale(): string {
    return this.locale;
  }
}
