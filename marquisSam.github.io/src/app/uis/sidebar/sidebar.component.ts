import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CoreSkill } from 'src/app/models';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() coreSkills: CoreSkill[] = [];

  constructor() {}

  ngOnInit(): void {}
}
