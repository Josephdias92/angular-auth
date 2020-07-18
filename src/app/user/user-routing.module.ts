import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [{
      path: 'profile',
      loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
    }, {
      path: '',
      redirectTo: 'profile',
      pathMatch: 'full',
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
