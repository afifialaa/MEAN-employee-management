import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material/';


import { TaskComponent } from './task/task.component';

@NgModule({
	declarations: [TaskComponent],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		MatNativeDateModule,
		MatDatepickerModule
	],
	exports: [
		TaskComponent
	]
})
export class TaskManagementModule { }
