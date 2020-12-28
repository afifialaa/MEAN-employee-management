import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { EmployeeComponent } from './employee-management/employee/employee.component';
import { CreateEmployeeComponent } from './employee-management/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-management/employee-details/employee-details.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UserComponent } from './user-management/user/user.component';
import { CreateUserComponent } from './user-management/create-user/create-user.component';
import { SearchUserComponent } from './user-management/search-user/search-user.component';
import { SearchEmployeeComponent } from './employee-management/search-employee/search-employee.component';
import { SigninComponent } from './account/signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [
	{ path: 'signin', component: SigninComponent },
	{
		path: 'admin', canActivate: [AuthGuard], component: AdminComponent, children: [
			{
				path: 'employee', component: EmployeeComponent, children: [
					{ path: 'create', component: CreateEmployeeComponent },
					{ path: 'search', component: SearchEmployeeComponent },
					{ path: 'employee-details', component: EmployeeDetailsComponent }
				]
			},
			{ path: 'dashboard', component: DashboardComponent },
			{
				path: 'user', component: UserComponent, children: [
					{ path: 'create', component: CreateUserComponent },
					{ path: 'search', component: SearchUserComponent },
				]
			},
		]
	},
	{ path: '', redirectTo: '/signin', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
