import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {PartialsModule} from '../partials/partials.module';

import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
    declarations: [SigninComponent, SignupComponent, ForgotComponent, ResetComponent, ResetPasswordComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PartialsModule,
        RouterModule
    ],
    exports: [
        SignupComponent,
        SigninComponent,
        ForgotComponent,
        ResetPasswordComponent
    ]
})
export class AccountModule { }
