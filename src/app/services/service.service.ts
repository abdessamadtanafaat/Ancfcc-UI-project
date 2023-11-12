import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt'
import { ForgetPaaswordDto, RegistrationResult, UserForRegistrationDto } from '../components/login/user';


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

  register(userForRegistrationDto: UserForRegistrationDto): Observable<RegistrationResult>{
    // console.log(userForRegistrationDto)
    return this.http.post<any>(this.baseUrl +'register', userForRegistrationDto)
  }

  resetPassword(userForRegistrationDto: ForgetPaaswordDto): Observable<any>{
    console.log(userForRegistrationDto)
    return this.http.post(this.baseUrl +'forgot-password', userForRegistrationDto, {responseType: 'text'}); 
  } 

  
  isTokenValid(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // Return true if a token exists
    //return false; 
  }

    }
  

