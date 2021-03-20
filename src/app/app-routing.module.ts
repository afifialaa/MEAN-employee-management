import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import {AdminGuard} from './guards/admin.guard';

/* Components */
import { EmployeeComponent } from './employee-management/employee/employee.component';
import { CreateEmployeeComponent } from './employee-management/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-management/employee-details/employee-details.component';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';
import { UserComponent } from './user-management/user/user.component';
import { CreateUserComponent } from './user-management/create-user/create-user.component';
import { SearchUserComponent } from './user-management/search-user/search-user.component';
import { SearchEmployeeComponent } from './employee-management/search-employee/search-employee.component';
import { SigninComponent } from './account/signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin/admin.component';
import {ForgotComponent} from './account/forgot/forgot.component';
import {ResetPasswordComponent} from './account/reset-password/reset-password.component';


const appRoutes: Routes = [

	{ path: 'account', children: [
		{ path: 'signin', component: SigninComponent },
		{ path: 'forgot', component: ForgotComponent },
		{ path: 'resetPassword/:resetToken', component: ResetPasswordComponent },
	]},
	{
		path: 'admin', canActivate: [AuthGuard], component: AdminComponent, children: [
			{
				path: 'employee', canActivate: [AuthGuard, AdminGuard], component: EmployeeComponent, children: [
					{ path: 'create',canActivate: [AuthGuard, AdminGuard], component: CreateEmployeeComponent },
					{ path: 'search', canActivate: [AuthGuard, AdminGuard], component: SearchEmployeeComponent },
					{ path: 'employee-details', canActivate: [AuthGuard, AdminGuard], component: EmployeeDetailsComponent }
				]
			},
			{ path: 'dashboard', component: DashboardComponent },
			{
				path: 'user', canActivate: [AuthGuard, AdminGuard], component: UserComponent, children: [
					{ path: 'create', canActivate: [AuthGuard, AdminGuard], component: CreateUserComponent },
					{ path: 'search', canActivate: [AuthGuard, AdminGuard], component: SearchUserComponent },
				]
			},
		]
	},
	{ path: '', redirectTo: '/account/signin', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
