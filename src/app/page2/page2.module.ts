import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2Component } from './page2.component';
import { Page2ErrorComponent } from './page2-error/page2-error.component';
import {SharedErrorModule} from '../shared/shared-error/shared-error.module';


@NgModule({
  declarations: [Page2Component, Page2ErrorComponent],
  imports: [
    CommonModule,
    Page2RoutingModule,
    SharedErrorModule,
  ]
})
export class Page2Module { }
