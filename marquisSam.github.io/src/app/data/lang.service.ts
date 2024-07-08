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
    this.setCurrentLanguage(browserLang, true);

    this.translate.addLangs([Language.EN, Language.FR]);
    this.routerParams$.subscribe(this.#routerMethod);
  }
  currentLanguage$: BehaviorSubject<Language> = new BehaviorSubject<Language>(
    Language.FR
  );

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
      this.setCurrentLanguage(lang as string);
    } else {
      const browserLang = navigator.language.toLocaleLowerCase();
      console.log('browserLang', browserLang);
      this.setCurrentLanguage(browserLang);
    }
  };

  setCurrentLanguage(lang: string, setDefaultLang = false): void {
    switch (true) {
      case /en/.test(lang):
        console.log('EN');
        this.currentLanguage$.next(Language.EN);
        setDefaultLang
          ? this.translate.setDefaultLang(Language.EN)
          : this.translate.use(Language.EN);
        break;

      default:
        console.log('FR');
        this.currentLanguage$.next(Language.FR);
        setDefaultLang
          ? this.translate.setDefaultLang(Language.FR)
          : this.translate.use(Language.FR);
    }
  }
}
