import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const AppRouter: Routes = [
  {
    path: 'user', loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: '', pathMatch: 'full', redirectTo: '/user'
  },
  {
    path: '**', redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRouter)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
