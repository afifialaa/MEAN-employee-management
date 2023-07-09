import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserComponent } from './user/user.component';

import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'


@NgModule({
  declarations: [
    CreateUserComponent,
    SearchUserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CreateUserComponent,
    SearchUserComponent,
    UserComponent
  ]
})
export class UserModule { }
