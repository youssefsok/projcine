import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../_service/authentication.service';

@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAdmin = this.authenticationService.isAdmin;
    if (isAdmin.value) {
      return true;
    }

    this.router.navigate(['/auth'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
