# Authentication

Find the project on https://angular-auth.vercel.app/


# Covers
- Lazy loading of components
generate lazy loaded modules using ng cli `ng g m user/profile --route profile -m user/user.module`
- Hiding elements using `appAuthRole=['ADMIN'// or whatever]` directive. eg 
```
<li *appAuthRole="['ADMIN']">
  <a  [routerLink]="['/admin']" routerLinkActive="router-link-active" >Admin</a>
</li>
```
- Secure routes by using auth guards 
```
  canActivate: [AuthGuardService],
  data: {
    roles: ['ADMIN'],
  },
  ```
