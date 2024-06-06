import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PersonalIntroComponent } from './personal-intro/personal-intro.component';
import { CareerObjectiveComponent } from './career-objective/career-objective.component';
import { WorkExperienceComponent } from './work-Experience/work-Experience.component';

@Component({
  selector: 'cv-main-section',
  standalone: true,
  imports: [
    CommonModule,
    PersonalIntroComponent,
    CareerObjectiveComponent,
    WorkExperienceComponent,
  ],
  templateUrl: './main-section.html',
  styleUrl: './main-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSectionComponent {}
