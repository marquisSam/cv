import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cv-main-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-template.component.html',
  styleUrl: './main-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainTemplateComponent {}
