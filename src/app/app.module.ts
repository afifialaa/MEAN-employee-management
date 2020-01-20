import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchEmployeeComponent } from './employee/search-employee/search-employee.component';
import { SigninComponent } from './signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { KnowledgeManagementModule } from './knowledge-management/knowledge-management.module';
import { EmployeeModule } from './employee/employee.module';
import { KnowledgeComponent} from './knowledge-management/knowledge/knowledge.component';

import { QuillModule } from 'ngx-quill';
import { EmployeeComponent } from './employee/employee/employee.component';

const appRoutes: Routes = [
	{ path: 'signin', component: SigninComponent },
	{
		path: 'admin', canActivate: [AuthGuard], component: AdminComponent, children: [
			{
				path: 'employee', component: EmployeeComponent, children: [
					{ path: 'search', component: SearchEmployeeComponent },
					{ path: 'create', component: CreateEmployeeComponent },
					{ path: 'employee-details/:email', component: EmployeeDetailsComponent },
				]
			},
			{ path: 'knowledge', component: KnowledgeComponent }
		]
	},
	{ path: '', redirectTo: '/signin', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		SigninComponent,
		PageNotFoundComponent,
		AdminComponent,
		NavComponent,
		SignupComponent,
		HeaderComponent,
	],
	imports: [
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
		KnowledgeManagementModule,
		EmployeeModule,
		QuillModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
