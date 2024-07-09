import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CvWorkExperience } from '../../../data/model';
import { SkillListComponent } from '../../sidebar/skill-list/skill-list.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'cv-work-experience',
  standalone: true,
  imports: [CommonModule, SkillListComponent, TranslateModule],
  templateUrl: './work-Experience.component.html',
  styleUrl: './work-Experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceComponent {
  @Input() workExperiences: CvWorkExperience[] | null = [];
}
