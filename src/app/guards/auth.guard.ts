import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateFn, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Injectable } from '@angular/core';


@Injectable()

export class authGuard  implements CanActivate  {

  constructor(private auth: ServiceService, private router: Router){ }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot
    ): boolean {
      if (this.auth.isTokenValid())  {
        return true; 
      }
      this.router.navigate(['login']);
      return false; 
      

    }
}

