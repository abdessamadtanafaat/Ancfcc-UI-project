import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule} from '@angular/material/sidenav'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MediaComponent } from './components/media/media.component';
import { PagesComponent } from './components/pages/pages.component';
import { CoupensComponent } from './components/coupens/coupens.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    SettingsComponent,
    MediaComponent,
    PagesComponent,
    CoupensComponent,
    StatisticsComponent,
    SublevelMenuComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,   
    MatListModule, 
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
