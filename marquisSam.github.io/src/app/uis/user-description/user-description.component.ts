import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.scss'],
})
export class UserDescriptionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
