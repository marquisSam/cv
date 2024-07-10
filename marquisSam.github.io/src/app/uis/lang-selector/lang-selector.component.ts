import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'cv-lang-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangSelectorComponent {
  constructor(private location: Location, private langService: LangService) {}

  updateLang(lang: string): void {
    this.location.replaceState('/', 'lang=' + lang);
    this.langService.setCurrentLanguage(lang);
  }
}
