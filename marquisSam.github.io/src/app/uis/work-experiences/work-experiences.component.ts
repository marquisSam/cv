import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.scss'],
})
export class WorkExperiencesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
