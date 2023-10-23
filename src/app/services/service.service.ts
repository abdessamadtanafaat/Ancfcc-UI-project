import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../shared/module/Users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  baseUrl = "https://localhost:44355/authentication/"; 
  constructor(private http: HttpClient, private route : Router) { }

  login(values: any): Observable<string>{
    console.log(values)
    return this.http.post(this.baseUrl +'login', values, { responseType: 'text' });
    
  //   .pipe(

  //     map(users => {
  //       localStorage.setItem('userrname',users.displayName);
  //     })
  //   )
  // }
  }
}