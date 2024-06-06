import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuickInfoComponent } from './quick-info/quick-info.component';

@Component({
  selector: 'cv-sidebar',
  standalone: true,
  imports: [CommonModule, QuickInfoComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {}
