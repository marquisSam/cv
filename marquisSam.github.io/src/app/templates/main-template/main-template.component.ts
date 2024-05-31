import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from '../../uis/sidebar/sidebar.component';
import { WorkExperiencesComponent } from '../../uis/work-experiences/work-experiences.component';

@Component({
  selector: 'cv-main-template',
  standalone: true,
  imports: [CommonModule, SidebarComponent, WorkExperiencesComponent],
  templateUrl: './main-template.component.html',
  styleUrl: './main-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainTemplateComponent {}
