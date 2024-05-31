import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cv-quick-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-info.component.html',
  styleUrls: ['./quick-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickInfoComponent {}
