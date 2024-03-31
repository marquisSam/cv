import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainTemplateComponent } from './templates/main/main.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MainTemplateComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
