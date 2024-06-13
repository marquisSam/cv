import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainTemplateComponent } from './templates/main-template/main-template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //inject http client

  imports: [RouterOutlet, MainTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'marquisSam.github.io';
}
