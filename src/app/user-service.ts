import { of, from, BehaviorSubject } from 'rxjs';
import { map, filter, defaultIfEmpty } from 'rxjs/operators'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  public roles$ = new BehaviorSubject(JSON.parse(localStorage.getItem('roles')) ?? []);
  constructor() {

  }

  isAuthorize(roles: string[]) {
    return this.roles$
      .pipe(
        filter(roles => !!roles),
        map((role) => role.some(
          (r) => roles.includes(r)
        ),
      )
    );
  }
}
