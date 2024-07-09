import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SafeHtmlPipe } from '../../../custom-pipes/safeHtml.pipe';

@Component({
  selector: 'cv-personal-intro',
  standalone: true,
  imports: [CommonModule, TranslateModule, SafeHtmlPipe],
  templateUrl: './personal-intro.component.html',
  styleUrl: './personal-intro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalIntroComponent {}
