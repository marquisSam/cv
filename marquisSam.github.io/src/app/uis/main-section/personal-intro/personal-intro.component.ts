import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cv-personal-intro',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './personal-intro.component.html',
  styleUrl: './personal-intro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalIntroComponent {}
