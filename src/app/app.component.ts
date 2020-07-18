import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from './user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Authentication';
  user: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,) {
    this.user = this.fb.group({
      roles: this.fb.control(null),
    });
    this.user.valueChanges.subscribe(u => {
      localStorage.setItem('roles', JSON.stringify(u.roles));
      this.userService.roles$.next(u.roles);
    });
  }
}
