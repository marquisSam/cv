import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../data/data.service';
import { CvWorkExperience } from '../../data/model';
import { PersonalIntroComponent } from './personal-intro/personal-intro.component';
import { WorkExperienceComponent } from './work-Experience/work-Experience.component';

@Component({
  selector: 'cv-main-section',
  standalone: true,
  imports: [CommonModule, PersonalIntroComponent, WorkExperienceComponent],
  templateUrl: './main-section.html',
  styleUrl: './main-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSectionComponent {
  constructor(private dataService: DataService) {}
  workExperiences$: Observable<CvWorkExperience[]> =
    this.dataService.workExperiencesSelector$;
}
