import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', component: DashboardhomeComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
