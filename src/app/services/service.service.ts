import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt'
import * as jwt_decode from '@auth0/angular-jwt'


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
  // isTokenValid(): boolean {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     try {
  //       const decoded = jwt_decode(token);
  //       const now = Date.now() / 1000;
  //       return decoded.exp > now;
  //     } catch (error) {
  //       // Handle invalid tokens or other errors
  //       console.error('Token validation error', error);
  //       return false;
  //     }
  //   }
  //   return false;
  // }

  isTokenValid(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      // Add your validation logic here
      // You can use libraries like jwt-decode to verify the token's expiration date.
      // Example: const decoded = jwt_decode(token);
      // You may check if the token has expired and return true/false accordingly.
      return true; // Replace with your actual validation logic
    }
    return false;
  }

    }
  

