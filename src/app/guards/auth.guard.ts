import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateFn, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate  {

  constructor(private auth: ServiceService, private router: Router){ }
  canActivate():boolean
     {
      
      if (this.auth.isTokenValid())  {
        return true; 
      }
      else {
        this.router.navigate(['login']);
        return false; 
      }
        
    }

}

