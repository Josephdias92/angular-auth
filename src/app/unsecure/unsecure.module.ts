import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsecureRoutingModule } from './unsecure-routing.module';
import { UnsecureComponent } from './unsecure.component';


@NgModule({
  declarations: [UnsecureComponent],
  imports: [
    CommonModule,
    UnsecureRoutingModule
  ]
})
export class UnsecureModule { }
