import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from 'src/app/modules/admin/components/dashboard/dashboard.component';
import { StatisticsComponent } from 'src/app/modules/admin/components/statistics/statistics.component';
import { CoupensComponent } from 'src/app/modules/admin/components/coupens/coupens.component';
import { PagesComponent } from 'src/app/modules/admin/components/pages/pages.component';
import { MediaComponent } from 'src/app/modules/admin/components/media/media.component';
import { SettingsComponent } from 'src/app/modules/admin/components/settings/settings.component';
import { SidenavComponent } from 'src/app/modules/admin/components/sidenav/sidenav.component';
import { authGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
{
  path:'',component: AdminDashboardComponent,
  children:[

  {path: 'dashboard', component: DashboardComponent},
  {path: 'gestionscandidatures', component:StatisticsComponent},
  {path: 'mesCandidatures', component: CoupensComponent},
  {path: 'statistiques', component: PagesComponent},
  {path: 'concours', component: MediaComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'sidenav', component: SidenavComponent},
 
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class AdminRoutingModule { }
