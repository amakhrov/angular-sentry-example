import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1RoutingModule } from './page1-routing.module';
import { Page1Component } from './page1.component';
import { Page1ErrorComponent } from './page1-error/page1-error.component';
import {SharedErrorModule} from '../shared/shared-error/shared-error.module';


@NgModule({
  declarations: [Page1Component, Page1ErrorComponent],
  imports: [
    CommonModule,
    Page1RoutingModule,
    SharedErrorModule
  ]
})
export class Page1Module { }
