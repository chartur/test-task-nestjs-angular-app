import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from "../../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class IsUnloggedInGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user$.pipe(
      map(state => !!!state),
      map(state => {
        if (!state) {
          this.router.navigate(["files"]);
          return false;
        }

        return true;
      })
    );
  }

}
