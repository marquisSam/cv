import { NgModule } from '@angular/core';
import { UserDescriptionComponent } from './user-description/user-description.component';
import { WorkExperiencesComponent } from './work-experiences/work-experiences.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [],
  imports: [
    UserDescriptionComponent,
    WorkExperiencesComponent,
    SidebarComponent,
  ],
  exports: [
    UserDescriptionComponent,
    WorkExperiencesComponent,
    SidebarComponent,
  ],
})
export class UisModule {}
