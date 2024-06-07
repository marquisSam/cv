import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PersonalIntroComponent } from './personal-intro/personal-intro.component';
import { WorkExperienceComponent } from './work-Experience/work-Experience.component';
import { Observable, of, startWith } from 'rxjs';
import { workExperiences } from '../../data/work-exp';
import { CvWorkExperience } from '../../data/model';

@Component({
  selector: 'cv-main-section',
  standalone: true,
  imports: [CommonModule, PersonalIntroComponent, WorkExperienceComponent],
  templateUrl: './main-section.html',
  styleUrl: './main-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSectionComponent {
  workExperiences$: Observable<CvWorkExperience[]> = of(workExperiences).pipe(
    startWith([])
  );
}
