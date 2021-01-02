import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule, MatButtonModule, MatTabsModule, MatCardModule, MatIconModule} from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {AuthInterceptorService} from '../../interceptors/auth-interceptor.service';
import {MatProgressSpinnerModule} from '@angular/material'

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { EmployeeComponent } from './employee/employee.component';

import {EmployeeRoutingModule} from './employee-routing.module';

@NgModule({
	declarations: [
		CreateEmployeeComponent,
		EmployeeDetailsComponent,
		SearchEmployeeComponent,
		EmployeeComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatInputModule,
		MatRadioModule,
		MatSelectModule,
		MatTabsModule,
		MatCardModule,
		MatIconModule,
		RouterModule,
		MatProgressSpinnerModule,
		EmployeeRoutingModule
	],
	exports: [
		EmployeeComponent
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorService,
			multi: true
		}
	],
})
export class EmployeeModule { }
