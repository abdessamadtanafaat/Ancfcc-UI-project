import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt'
import { RegistrationResult } from '../components/login/user';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  isLoggedIn = false; 
  
  baseUrl = "https://localhost:44355/authentication/"; 
  constructor(private http: HttpClient, private route : Router, private jwtHelper: JwtHelperService) { }
   

  login(values: any): Observable<string>{
    console.log(values)
    return this.http.post(this.baseUrl +'login', values, { responseType: 'text' });
  }

  register(values: any): Observable<RegistrationResult>{
    console.log(values)
    return this.http.post<RegistrationResult>(this.baseUrl +'register', values);

  }

  isTokenValid(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Return true if a token exists
    //return false; 
  }

    }
  

