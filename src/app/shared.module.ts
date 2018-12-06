import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './core/header/header.component';
import { MainMenuComponent } from './core/main-menu/main-menu.component';
import { BtnBlueComponent } from './core/buttons/btn-blue/btn-blue.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';

@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    HeaderComponent,
    BtnBlueComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    MainMenuComponent,
    BtnBlueComponent,
    SidebarComponent
  ],
  providers: []
})
export class SharedModule {}
