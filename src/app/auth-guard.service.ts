import { Injectable } from '@angular/core';
import { UserService } from './user-service';
import { CanActivateChild, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route, UrlSegment, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivateChild, CanLoad, CanActivate{

  constructor(private userService: UserService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.userService.isAuthorize(route.data.roles);
  }
  canLoad(route: Route, segments: UrlSegment[] ): boolean | Observable<boolean> | Promise<boolean> {
    return this.userService.isAuthorize(route.data.roles);
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.userService.isAuthorize(childRoute.data.roles);
  }
}
