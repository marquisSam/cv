import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainTemplateComponent } from './templates/main-template/main-template.component';
interface Locale {
  localeCode: string;
  label: string;
}

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
