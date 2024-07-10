import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, concatMap, map, Observable, timer } from 'rxjs';
import { LocaleSwitcherService } from './locale-switcher.service';
import { SupportedLanguage } from './model';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  localeService = inject(LocaleSwitcherService);
  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {
    const browserLang = navigator.language.toLocaleLowerCase();
    this.setCurrentLanguage(browserLang, true);

    this.translate.addLangs([SupportedLanguage.EN, SupportedLanguage.FR]);
    this.routerParams$.subscribe(this.#routerMethod);
  }

  currentLanguage$: BehaviorSubject<SupportedLanguage> =
    new BehaviorSubject<SupportedLanguage>(SupportedLanguage.FR);

  routerParams$: Observable<Params> = this.route.queryParams.pipe(
    concatMap((params) => timer(100).pipe(map(() => params))),
    takeUntilDestroyed(inject(DestroyRef))
  );

  get getCurrentLanguageStr(): string {
    return this.currentLanguage$.value;
  }
  get supportedLanguages(): string[] {
    return Object.values(SupportedLanguage);
  }

  setCurrentLanguage = (lang: string, setDefaultLang = false): void => {
    switch (true) {
      case /en/.test(lang):
        this.#setLang(SupportedLanguage.EN, setDefaultLang);
        break;

      default:
        this.#setLang(SupportedLanguage.FR, setDefaultLang);
    }
  };

  #routerMethod = (params: Params): void => {
    const lang = params['lang'];
    if (lang) {
      this.setCurrentLanguage(lang as string);
    } else {
      const browserLang = navigator.language.toLocaleLowerCase();
      this.setCurrentLanguage(browserLang);
    }
  };

  #setLang = (lang: SupportedLanguage, setDefaultLang = false): void => {
    setDefaultLang
      ? this.translate.setDefaultLang(lang)
      : this.translate.use(lang);
    this.currentLanguage$.next(lang);
    this.localeService.setLocale(lang);
  };
}
