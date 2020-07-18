import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnsecureComponent } from './unsecure.component';

const routes: Routes = [{ path: '', component: UnsecureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnsecureRoutingModule { }
