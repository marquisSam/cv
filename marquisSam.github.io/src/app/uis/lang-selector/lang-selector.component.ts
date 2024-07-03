import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'cv-lang-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangSelectorComponent implements OnInit {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');
  }

  lang = 'en';

  ngOnInit(): void {
    this.#selectLangFromBrowser();
  }

  updateLang(lang: string): void {
    console.log('lang', lang);
    this.translate.use(lang);
  }

  #selectLangFromBrowser(): void {
    const browserLang = navigator.language.toLocaleLowerCase();

    if (browserLang.match(/en/)) {
      this.translate.use('en');
      this.lang = 'en';
    } else if (browserLang.match(/fr/)) {
      this.translate.use('fr');
      this.lang = 'fr';
    } else {
      this.translate.use('fr');
      this.lang = 'fr';
    }
  }
}
