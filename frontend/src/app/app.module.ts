import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AccountModule } from './account/account.module'
import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module'
import { UserModule } from './user/user.module'
import { NormalModule } from './normal/normal.module'
import { DepartmentModule } from './department/department.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatTabsModule } from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatRadioModule } from '@angular/material/radio'

import { AuthInterceptorService } from './interceptors/auth-interceptor.service'
import { UnauthInterceptor } from './interceptors/unauth.interceptor'


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AccountModule,
        HttpClientModule,
        AdminModule,
        BrowserAnimationsModule,
        EmployeeModule,
        MatInputModule,
        MatTabsModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatRadioModule,
        UserModule,
        NormalModule,
        DepartmentModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: UnauthInterceptor,
        multi: true
    }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
