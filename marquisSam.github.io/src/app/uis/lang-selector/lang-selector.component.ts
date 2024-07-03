import { CommonModule, Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, timer } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
@Component({
  selector: 'cv-lang-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangSelectorComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private location: Location,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const browserLang = navigator.language.toLocaleLowerCase();
    this.#selectLang(browserLang, true);

    this.translate.addLangs(['en', 'fr']);
    this.routerParams$.subscribe(this.#routerMethod);
  }

  routerParams$: Observable<Params> = this.route.queryParams.pipe(
    concatMap((params) => timer(100).pipe(map(() => params))),
    takeUntilDestroyed(inject(DestroyRef))
  );

  lang = 'en';

  updateLang(lang: string): void {
    this.location.replaceState('/', 'lang=' + lang);
    this.translate.use(lang);
  }

  #routerMethod = (params: Params): void => {
    const lang = params['lang'];
    console.log('langette', lang);
    if (lang) {
      this.#selectLang(lang as string);
    } else {
      const browserLang = navigator.language.toLocaleLowerCase();
      console.log('browserLang', browserLang);
      this.#selectLang(browserLang);
    }
  };

  #selectLang(lang: string, setDefaultLang = false): void {
    switch (true) {
      case /en/.test(lang):
        this.lang = 'en';
        setDefaultLang
          ? this.translate.setDefaultLang('en')
          : this.translate.use('en');
        break;

      default:
        this.lang = 'fr';
        setDefaultLang
          ? this.translate.setDefaultLang('fr')
          : this.translate.use('fr');
    }

    this.cdr.detectChanges();
  }
}
