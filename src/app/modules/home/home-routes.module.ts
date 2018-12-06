import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { UserMainComponent } from './user-main/user-main.component';
import { UserExperienceComponent } from './user-experience/user-experience.component';
import { UserEducationComponent } from './user-education/user-education.component';
import { UserAchievementsComponent } from './user-achievements/user-achievements.component';
import { UserSkillsComponent } from './user-skills/user-skills.component';
import { UserContactsComponent } from './user-contacts/user-contacts.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: '', component: UserMainComponent
      },
      {
        path: 'experience', component: UserExperienceComponent
      },
      {
        path: 'education', component: UserEducationComponent
      },
      {
        path: 'achievements', component: UserAchievementsComponent
      },
      {
        path: 'skills', component: UserSkillsComponent
      },
      {
        path: 'contacts', component: UserContactsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutesModule {}
