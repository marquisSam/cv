import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UisModule } from 'src/app/uis/uis.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreSkill } from 'src/app/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-template-main',
  standalone: true,
  imports: [CommonModule, UisModule, HttpClientModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainTemplateComponent implements OnInit {
  constructor(private http: HttpClient) {}

  coreSkills: CoreSkill[] = [];

  ngOnInit(): void {
    this.http.get('assets/json/core-skills.json').subscribe((data: any) => {
      console.log(data);
      this.coreSkills = data;
    });
  }
}
