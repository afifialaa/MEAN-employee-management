import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component'

import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatTabsModule} from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select'
import {MatRadioModule} from '@angular/material/radio'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule } from '@angular/material/progress-bar';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component'
import {PartialsModule} from '../partials/partials.module';
import {RouterModule} from '@angular/router'


@NgModule({
  declarations: [
    CreateEmployeeComponent,
    SearchEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeDashboardComponent,
    EmployeeComponent
  ],
  imports: [
    MatProgressBarModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    PartialsModule,
    RouterModule
  ],
  exports: [
    CreateEmployeeComponent,
    SearchEmployeeComponent,
    EmployeeComponent,
    EmployeeDashboardComponent,
    EmployeeDetailsComponent
  ]
})
export class EmployeeModule { }
