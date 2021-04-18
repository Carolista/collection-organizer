import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

import { AuthenticationService } from '../authentication.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {}

  //method from Angular Udemy course
  // canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
  //   boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>{
  //     return this.authService.user.pipe(
  //       take(1), 
  //       map(user => {
  //           const isAuthenticated = !!user;
  //           if(isAuthenticated){
  //             return true;
  //           }
  //         return this.router.createUrlTree(['/auth']);
  //       })
  //     );
  //   }

  //method from PluralSight SpringBoot-Angular course
  canActivate(){
    if(this.authService.isAuthenticated){
      return true;
    }
  }
}