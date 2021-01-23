import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './admin/employee-management/create-employee/create-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './admin/employee-management/employee-details/employee-details.component';
import { HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { EmployeeModule } from './admin/employee-management/employee-management.module';
import { QuillModule } from 'ngx-quill';

// Components
import { EmployeeComponent } from './admin/employee-management/employee/employee.component';
import {DashboardComponent} from './admin/dashboard/dashboard/dashboard.component';
import {UserComponent} from './admin/user-management/user/user.component';
import {CreateUserComponent} from './admin/user-management/create-user/create-user.component';
import {SearchUserComponent} from './admin/user-management/search-user/search-user.component';
import { SearchEmployeeComponent } from './admin/employee-management/search-employee/search-employee.component';
import { SigninComponent } from './account/signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin/admin.component';


// Modules
import { AccountModule } from './account/account.module';
import {PartialsModule} from './partials/partials.module';
import {DashboardModule} from './admin/dashboard/dashboard.module';
import {UserManagementModule} from './admin/user-management/user-management.module';

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
