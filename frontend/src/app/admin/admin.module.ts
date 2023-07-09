import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router'

import {PartialsModule} from '../partials/partials.module'

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PartialsModule
  ],
  exports: [
    AdminComponent,
    DashboardComponent
  ]
})
export class AdminModule { }
