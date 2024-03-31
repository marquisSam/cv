import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UisModule } from 'src/app/uis/uis.module';

@Component({
  selector: 'app-template-main',
  standalone: true,
  imports: [CommonModule, UisModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
