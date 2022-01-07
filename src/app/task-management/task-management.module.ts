import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material/';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {PartialsModule} from '../partials/partials.module';

import { TaskComponent } from './task/task.component';

@NgModule({
	declarations: [TaskComponent],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		MatNativeDateModule,
		MatDatepickerModule,
		BrowserModule,
		BrowserAnimationsModule,
		PartialsModule
	],
	exports: [
		TaskComponent
	]
})
export class TaskManagementModule { }
