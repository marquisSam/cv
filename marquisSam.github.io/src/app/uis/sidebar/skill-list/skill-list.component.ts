import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CvSkill } from '../../../model';

export type ListStyle = 'icon' | 'basic';

@Component({
  selector: 'cv-skill-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillListComponent {
  @Input() list: CvSkill[] = [];
  @Input() title: string = '';
  @Input() multiColumn: boolean = false;
  @Input() listStyle: ListStyle = 'basic';
}
