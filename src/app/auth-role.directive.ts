import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { UserService } from './user-service';

@Directive({
  selector: '[appAuthRole]'
})
export class AuthRoleDirective implements OnInit {
  private _appAuthRole;

  @Input()
  set appAuthRole(roles) {
    if (!roles || !roles.length) {
      throw Error("Roles needs to be specified");
    }
    this._appAuthRole = roles;
  }

  get appAuthRole() {
    return this._appAuthRole;
  };

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.isAuthorize(this.appAuthRole).subscribe(isAuth => {
      if (isAuth) {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    })
  }




}
