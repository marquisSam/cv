import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cv-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-Experience.component.html',
  styleUrl: './work-Experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceComponent {}
