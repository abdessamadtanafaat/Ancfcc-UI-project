import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CoupensComponent } from './components/coupens/coupens.component';
import { PagesComponent } from './components/pages/pages.component';
import { MediaComponent } from './components/media/media.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  {path : '', redirectTo : 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'gestionscandidatures', component:StatisticsComponent},
  {path: 'mesCandidatures', component: CoupensComponent},
  {path: 'statistiques', component: PagesComponent},
  {path: 'concours', component: MediaComponent},
  {path: 'settings', component: SettingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
