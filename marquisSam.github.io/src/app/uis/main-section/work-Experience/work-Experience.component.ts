import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CvWorkExperience } from '../../../model';
import { SkillListComponent } from '../../sidebar/skill-list/skill-list.component';

@Component({
  selector: 'cv-work-experience',
  standalone: true,
  imports: [CommonModule, SkillListComponent],
  templateUrl: './work-Experience.component.html',
  styleUrl: './work-Experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceComponent {
  @Input() workExperiences: CvWorkExperience[] | null = [];
}
