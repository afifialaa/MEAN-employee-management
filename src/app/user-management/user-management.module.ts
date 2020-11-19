import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserComponent } from './user/user.component';
import {PartialsModule} from '../partials/partials.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
	  declarations: [CreateUserComponent, SearchUserComponent, UserComponent],
	  imports: [
		    CommonModule,
		    PartialsModule,
		    FormsModule,
		    ReactiveFormsModule,
		    RouterModule
	  ],
	  exports: [
		    UserComponent,
		    CreateUserComponent,
		    SearchUserComponent
	  ]
})
export class UserManagementModule { }
