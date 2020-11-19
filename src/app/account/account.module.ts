import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {PartialsModule} from '../partials/partials.module';

import { RouterModule, Routes } from '@angular/router';

@NgModule({
    declarations: [SigninComponent, SignupComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PartialsModule,
        RouterModule
    ],
    exports: [
        SignupComponent,
        SigninComponent
    ]
})
export class AccountModule { }
