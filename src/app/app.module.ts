import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { EmployeeModule } from './employee-management/employee-management.module';
import { QuillModule } from 'ngx-quill';
import {MatDatepickerModule} from '@angular/material/datepicker';

// Components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin/admin.component';


// Modules
import { AccountModule } from './account-management/account.module';
import {PartialsModule} from './partials/partials.module';
import {DashboardModule} from './admin/dashboard/dashboard.module';
import {UserManagementModule} from './user-management/user-management.module';
import {TaskManagementModule} from './task-management/task-management.module';
import {InventoryModule} from './inventory-management/inventory.module';
import {KnowledgeManagementModule} from './knowledge-management/knowledge-management.module';

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
		UserManagementModule,
		TaskManagementModule,
		MatDatepickerModule,
        InventoryModule,
        KnowledgeManagementModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
