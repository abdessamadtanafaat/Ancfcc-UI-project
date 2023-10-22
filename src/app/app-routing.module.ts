import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/admin/components/dashboard/dashboard.component';
import { StatisticsComponent } from './modules/admin/components/statistics/statistics.component';
import { CoupensComponent } from './modules/admin/components/coupens/coupens.component';
import { PagesComponent } from './modules/admin/components/pages/pages.component';
import { MediaComponent } from './modules/admin/components/media/media.component';
import { SettingsComponent } from './modules/admin/components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidenavComponent } from './modules/admin/components/sidenav/sidenav.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


const routes: Routes = [
  {path : '', redirectTo : 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password',component:ForgotPasswordComponent},
  {path:'', component: LoginComponent},
  // {path: 'dashboard', component: DashboardComponent},
  // {path: 'gestionscandidatures', component:StatisticsComponent},
  // {path: 'mesCandidatures', component: CoupensComponent},
  // {path: 'statistiques', component: PagesComponent},
  // {path: 'concours', component: MediaComponent},
  // {path: 'settings', component: SettingsComponent},
  // {path: 'sidenav', component: SidenavComponent},
  {
    path:'admin', loadChildren: ()=> 
    import('./modules/admin/admin.module').then((m)=> m.AdminModule)
  },
  //lazy loading ...
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
