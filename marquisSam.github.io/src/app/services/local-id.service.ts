import { Injectable } from '@angular/core';
import { LocaleSwitcherService } from './locale-switcher.service';

@Injectable({
  providedIn: 'root',
})
export class LocaleId extends String {
  constructor(private localeService: LocaleSwitcherService) {
    super();
  }

  override toString(): string {
    return this.localeService.getLocale();
  }

  override valueOf(): string {
    return this.toString();
  }
}
