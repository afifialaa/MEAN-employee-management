import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee-management/create-employee/create-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-management/employee-details/employee-details.component';
import { HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { EmployeeModule } from './employee-management/employee-management.module';
import { QuillModule } from 'ngx-quill';

// Components
import { EmployeeComponent } from './employee-management/employee/employee.component';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {UserComponent} from './user-management/user/user.component';
import {CreateUserComponent} from './user-management/create-user/create-user.component';
import {SearchUserComponent} from './user-management/search-user/search-user.component';
import { SearchEmployeeComponent } from './employee-management/search-employee/search-employee.component';
import { SigninComponent } from './account/signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';


// Modules
import { AccountModule } from './account/account.module';
import {PartialsModule} from './partials/partials.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {UserManagementModule} from './user-management/user-management.module';

const appRoutes: Routes = [
	{ path: 'signin', component: SigninComponent },
	{
		path: 'admin', canActivate:[AuthGuard], component: AdminComponent, children: [
			{
				path: 'employee', component: EmployeeComponent, children: [
					{ path: 'search', component: SearchEmployeeComponent },
					{ path: 'create', component: CreateEmployeeComponent },
					{ path: 'employee-details', component: EmployeeDetailsComponent },
				],
			},
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'user', component: UserComponent, children: [
				{ path: 'create', component: CreateUserComponent },
				{ path: 'search', component: SearchUserComponent },
			]},
		]
	},
	{ path: '', redirectTo: '/signin', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent,
		AdminComponent,
	],
	imports: [
		AccountModule,
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot(appRoutes),
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatButtonModule,
		MatRadioModule,
		MatSelectModule,
		EmployeeModule,
		QuillModule,
		PartialsModule,
		DashboardModule,
		UserManagementModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
