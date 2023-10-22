import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule} from '@angular/material/sidenav'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './modules/admin/components/body/body.component';
import { SettingsComponent } from './modules/admin/components/settings/settings.component';
import { MediaComponent } from './modules/admin/components/media/media.component';
import { PagesComponent } from './modules/admin/components/pages/pages.component';
import { CoupensComponent } from './modules/admin/components/coupens/coupens.component';
import { StatisticsComponent } from './modules/admin/components/statistics/statistics.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
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
