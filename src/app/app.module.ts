import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { SigninComponent } from './signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
	{ path: 'signin',  component: SigninComponent },
	{ path: 'admin', canActivate:[AuthGuard], component: AdminComponent, children:[
		{ path: 'search', component: SearchEmployeeComponent },
		{ path: 'create', component: CreateEmployeeComponent },
		{ path: 'employee-details/:email', component: EmployeeDetailsComponent },
	] },
	{ path: '', redirectTo: '/signin', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		CreateEmployeeComponent,
		EmployeeDetailsComponent,
		SearchEmployeeComponent,
		SigninComponent,
		PageNotFoundComponent,
		AdminComponent,
		NavComponent,
		SignupComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot(appRoutes),
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
