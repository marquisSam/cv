import { LangSelectorComponent } from './../../lang-selector/lang-selector.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'cv-quick-info',
  standalone: true,
  imports: [CommonModule, TranslateModule, LangSelectorComponent],
  templateUrl: './quick-info.component.html',
  styleUrls: ['./quick-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickInfoComponent {}
