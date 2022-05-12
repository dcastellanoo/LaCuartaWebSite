import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    // Not authenticated, redirect to login
    console.log('User logged in?:', this.authService.isLoggedIn());

    if ( !this.authService.isLoggedIn() ) {
      this.router.navigateByUrl('/login');
      return false;
    }

    return true;
  }
}
