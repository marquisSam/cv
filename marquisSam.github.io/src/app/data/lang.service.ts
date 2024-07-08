import { TranslateService } from '@ngx-translate/core';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, map, Observable, timer } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export enum Language {
  EN = 'en',
  FR = 'fr',
}

@Injectable({
  providedIn: 'root',
})
export class LangService {
  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {
    const browserLang = navigator.language.toLocaleLowerCase();
    this.#setCurrentLanguage(browserLang, true);

    this.translate.addLangs(['en', 'fr']);
    this.routerParams$.subscribe(this.#routerMethod);
  }
  currentLanguage$: BehaviorSubject<string> = new BehaviorSubject<string>('fr');

  routerParams$: Observable<Params> = this.route.queryParams.pipe(
    concatMap((params) => timer(100).pipe(map(() => params))),
    takeUntilDestroyed(inject(DestroyRef))
  );

  get getCurrentLanguageStr(): string {
    return this.currentLanguage$.value;
  }
  get supportedLanguages(): string[] {
    return Object.values(Language);
  }

  #routerMethod = (params: Params): void => {
    const lang = params['lang'];
    console.log('langette', lang);
    if (lang) {
      this.#setCurrentLanguage(lang as string);
    } else {
      const browserLang = navigator.language.toLocaleLowerCase();
      console.log('browserLang', browserLang);
      this.#setCurrentLanguage(browserLang);
    }
  };

  #setCurrentLanguage(lang: string, setDefaultLang = false): void {
    switch (true) {
      case /en/.test(lang):
        this.currentLanguage$.next('en');
        setDefaultLang
          ? this.translate.setDefaultLang('en')
          : this.translate.use('en');
        break;

      default:
        this.currentLanguage$.next('fr');
        setDefaultLang
          ? this.translate.setDefaultLang('fr')
          : this.translate.use('fr');
    }
  }
}
