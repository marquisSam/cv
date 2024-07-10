import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  LOCALE_ID,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LocaleId } from '../../../services/local-id.service';
import { LocaleSwitcherService } from '../../../services/locale-switcher.service';
import { CvWorkExperience } from '../../../services/model';
import { SkillListComponent } from '../../sidebar/skill-list/skill-list.component';
import { LangService } from '../../../services/lang.service';

@Component({
  selector: 'cv-work-experience',
  standalone: true,
  imports: [CommonModule, SkillListComponent, TranslateModule],
  templateUrl: './work-Experience.component.html',
  styleUrl: './work-Experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: LOCALE_ID,
      useClass: LocaleId,
      deps: [LocaleSwitcherService],
    },
  ],
})
export class WorkExperienceComponent {
  constructor(private cdr: ChangeDetectorRef, langService: LangService) {
    langService.currentLanguage$.subscribe(() => {
      console.log('work experience component');
      this.cdr.markForCheck();
    });
  }
  @Input() workExperiences: CvWorkExperience[] | null = [];
}
