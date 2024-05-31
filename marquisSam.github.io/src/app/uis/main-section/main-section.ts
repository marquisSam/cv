import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cv-main-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-section.html',
  styleUrl: './main-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSectionComponent {}
