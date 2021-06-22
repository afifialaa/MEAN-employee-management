import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';


const routes: Routes = [
	{ path: 'create', component: CreateEmployeeComponent },
	{ path: 'search', component: SearchEmployeeComponent },
	{ path: 'employee-details', component: EmployeeDetailsComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EmployeeRoutingModule { }