import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CvWorkExperience } from '../../../data/model';

@Component({
  selector: 'cv-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-Experience.component.html',
  styleUrl: './work-Experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceComponent {
  @Input() workExperiences: CvWorkExperience[] = [];
}
