import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule} from '@angular/material/sidenav'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { authGuard } from './guards/auth.guard';
import { ServiceService } from './services/service.service';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerificationDialogComponent } from './modules/admin/components/verification-dialog/verification-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


export function tokenGetter(){
  return localStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    VerificationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,   
    MatListModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogRef,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter, 
        allowedDomains: ["localhost:44355"],
        disallowedRoutes:[]
      }
    })
  ],
  providers: [authGuard, ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
