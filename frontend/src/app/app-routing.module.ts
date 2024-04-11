import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './account/login/login.component'
import { AdminComponent } from './admin/admin/admin.component'
import { DashboardComponent } from './admin/dashboard/dashboard.component'
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component'
import { SearchEmployeeComponent } from './employee/search-employee/search-employee.component'
import { EmployeeComponent } from './employee/employee/employee.component'
import { EmployeeDashboardComponent } from './employee/employee-dashboard/employee-dashboard.component'
import { UserComponent } from './user/user/user.component'
import { CreateUserComponent } from './user/create-user/create-user.component'
import { SearchUserComponent } from './user/search-user/search-user.component'
import {EmployeeDetailsComponent} from './employee/employee-details/employee-details.component'

/* Normal Module */
import {NormalComponent} from './normal/normal/normal.component'
import {NormalDashboardComponent} from './normal/normal-dashboard/normal-dashboard.component'



import { AdminGuard } from './guards/admin.guard'
import { AuthGuard } from './guards/auth.guard'
import {normalGuard} from './guards/normal.guard'

const routes: Routes = [
    {
        path: 'account', children: [
            { path: 'login', component: LoginComponent }
        ]
    },
    {
        path: 'admin', canActivate: [AuthGuard, AdminGuard], component: AdminComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            {
                path: 'employee', component: EmployeeComponent, children: [
                    { path: 'dashboard', component: EmployeeDashboardComponent },
                    { path: 'create', component: CreateEmployeeComponent },
                    { path: 'search', component: SearchEmployeeComponent },
                    { path: 'details', component: EmployeeDetailsComponent },
                ]
            },
            {
                path: 'user', canActivate: [AuthGuard, AdminGuard], component: UserComponent, children: [
                    { path: 'create', component: CreateUserComponent },
                    { path: 'search', component: SearchUserComponent }
                ]
            }
        ],
    },
    {
        path: 'normal', canActivate: [normalGuard], component: NormalComponent, children: [
            {path: 'dashboard', component: NormalDashboardComponent}
        ]
    },
    { path: '', redirectTo: '/account/login', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AdminGuard]
})
export class AppRoutingModule { }
