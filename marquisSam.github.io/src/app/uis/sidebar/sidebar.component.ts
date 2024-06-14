import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { QuickInfoComponent } from './quick-info/quick-info.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { CvSkill } from '../../data/model';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cv-sidebar',
  standalone: true,
  imports: [CommonModule, QuickInfoComponent, SkillListComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  constructor(private dataService: DataService) {}

  hardSkills: Observable<CvSkill[]> = this.dataService.getHardSkills;
  softSkill: Observable<CvSkill[]> = this.dataService.getSoftSkills;
  transferableAsset: Observable<CvSkill[]> =
    this.dataService.getTransferableAssets;
}
