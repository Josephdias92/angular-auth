import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [{
  path: 'admin',
  canActivate: [AuthGuardService],
  data: {
    roles: ['ADMIN'],
  },
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
}, {
  path: 'user',
  canActivate: [AuthGuardService],
  data: {
    roles: ['ADMIN', 'USER'],
  },
  loadChildren: () => import('./user/user.module').then(m => m.UserModule)
}, {
  path: 'unsecure',
  loadChildren: () => import('./unsecure/unsecure.module').then(m => m.UnsecureModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
