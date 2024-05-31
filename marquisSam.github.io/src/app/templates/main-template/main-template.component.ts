import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainSectionComponent } from '../../uis/main-section/main-section';
import { SidebarComponent } from '../../uis/sidebar/sidebar.component';

@Component({
  selector: 'cv-main-template',
  standalone: true,
  imports: [CommonModule, SidebarComponent, MainSectionComponent],
  templateUrl: './main-template.component.html',
  styleUrl: './main-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainTemplateComponent {}
