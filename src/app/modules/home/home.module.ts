import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutesModule } from './home-routes.module';
import { SharedModule } from '../../shared.module';

import { HomeComponent } from './home.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserMainComponent } from './user-main/user-main.component';
import { UserExperienceComponent } from './user-experience/user-experience.component';
import { UserEducationComponent } from './user-education/user-education.component';
import { UserAchievementsComponent } from './user-achievements/user-achievements.component';
import { UserSkillsComponent } from './user-skills/user-skills.component';
import { UserContactsComponent } from './user-contacts/user-contacts.component';

import { ChartModule } from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutesModule,
    SharedModule,
    ChartModule
  ],
  declarations: [
    HomeComponent,
    UserCardComponent,
    UserMainComponent,
    UserExperienceComponent,
    UserEducationComponent,
    UserAchievementsComponent,
    UserSkillsComponent,
    UserContactsComponent
  ]
})
export class HomeModule {}
