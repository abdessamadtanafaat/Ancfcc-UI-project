import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SidenavComponent } from 'src/app/modules/admin/components/sidenav/sidenav.component';
import { SublevelMenuComponent } from './components/admin-dashboard/sublevel-menu.component';
import { DashboardComponent } from 'src/app/modules/admin/components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MediaComponent } from './components/media/media.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CoupensComponent } from './components/coupens/coupens.component';
import { PagesComponent } from './components/pages/pages.component';
import { BodyComponent } from './components/body/body.component';

interface SidenavToggle {

  screenWidth: number; 
  collapsed: boolean; 
}


@NgModule({
  declarations: [
    AdminDashboardComponent,
    SublevelMenuComponent,
    DashboardComponent,
    SidenavComponent,
    SettingsComponent,
    DashboardComponent,
    MediaComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    BodyComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    
    
  ]
})

export class AdminModule {

  
  title = 'Ancfcc-Front-end-project';
  
  // les valeurs initiales
  isSideNavCollapsed = false; 
  screenWidth = 0;

  onToggleSideNav(data: SidenavToggle): void{
    this.screenWidth = data.screenWidth; 
    this.isSideNavCollapsed = data.collapsed; 
  }
 }
