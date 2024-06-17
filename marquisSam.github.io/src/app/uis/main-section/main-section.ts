import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PersonalIntroComponent } from './personal-intro/personal-intro.component';
import { WorkExperienceComponent } from './work-Experience/work-Experience.component';
import { Observable, of, startWith } from 'rxjs';
import { CvWorkExperience } from '../../data/model';
import { DataService } from '../../data/data.service';

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
    this.dataService.getWorkExperiences;
}
