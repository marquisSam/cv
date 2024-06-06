import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cv-career-objective',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career-objective.component.html',
  styleUrl: './career-objective.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerObjectiveComponent {}
