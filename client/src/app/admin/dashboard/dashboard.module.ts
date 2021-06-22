import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentCardComponent } from './department-card/department-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { PayrollCardComponent } from './payroll-card/payroll-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {PartialsModule} from '../../partials/partials.module';
import {TaskManagementModule} from '../../task-management/task-management.module';
import { TaskCardComponent } from './task-card/task-card.component';

@NgModule({
	declarations: [DepartmentCardComponent, UserCardComponent, EmployeeCardComponent, PayrollCardComponent, DashboardComponent, TaskCardComponent],
	imports: [
		CommonModule,
		PartialsModule,
		TaskManagementModule
	],
	exports: [
		DashboardComponent
	]
})
export class DashboardModule { }
