import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import {AdminGuard} from './guards/admin.guard';

/* Components */
import { EmployeeComponent } from './employee-management/employee/employee.component';
import { CreateEmployeeComponent } from './employee-management/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-management/employee-details/employee-details.component';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';
import { UserComponent } from './user-management/user/user.component';
import { CreateUserComponent } from './user-management/create-user/create-user.component';
import { SearchUserComponent } from './user-management/search-user/search-user.component';
import { SearchEmployeeComponent } from './employee-management/search-employee/search-employee.component';
import { SigninComponent } from './account-management/signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin/admin.component';
import {ForgotComponent} from './account-management/forgot/forgot.component';
import {ResetPasswordComponent} from './account-management/reset-password/reset-password.component';
import {TaskComponent} from './task-management/task/task.component';

// Inventory
import {CreateItemComponent} from './inventory-management/create-item/create-item.component';
import {SearchItemComponent} from './inventory-management/search-item/search-item.component';
import {InventoryComponent} from './inventory-management/inventory/inventory.component';
import {InventoryDashboardComponent} from './inventory-management/inventory-dashboard/inventory-dashboard.component';

// Blog
import {BlogComponent} from './blog/blog/blog.component';
import {CreatePostComponent} from './blog/create-post/create-post.component';
import {PostsComponent} from './blog/posts/posts.component';
import {MyBlogComponent} from './blog/my-blog/my-blog.component';
import {PostDetailsComponent} from './blog/post-details/post-details.component';

const appRoutes: Routes = [

	{ path: 'account', children: [
		{ path: 'signin', component: SigninComponent },
		{ path: 'forgot', component: ForgotComponent },
		{ path: 'resetPassword/:resetToken', component: ResetPasswordComponent },
	]},
	{
		path: 'admin', canActivate: [AuthGuard], component: AdminComponent, children: [
			{
				path: 'employee', canActivate: [AuthGuard, AdminGuard], component: EmployeeComponent, children: [
					{ path: 'create',canActivate: [AuthGuard, AdminGuard], component: CreateEmployeeComponent },
					{ path: 'search', canActivate: [AuthGuard, AdminGuard], component: SearchEmployeeComponent },
					{ path: 'employee-details', canActivate: [AuthGuard, AdminGuard], component: EmployeeDetailsComponent }
				]
			},
			{ path: 'dashboard', component: DashboardComponent },
			{
				path: 'user', canActivate: [AuthGuard, AdminGuard], component: UserComponent, children: [
					{ path: 'create', canActivate: [AuthGuard, AdminGuard], component: CreateUserComponent },
					{ path: 'search', canActivate: [AuthGuard, AdminGuard], component: SearchUserComponent },
				]
			},
			{ path: 'task', component: TaskComponent},
            { path: 'inventory', canActivate: [AuthGuard, AdminGuard], component: InventoryComponent, children: [
                {path: 'dashboard', component: InventoryDashboardComponent},
                {path: 'create', component: CreateItemComponent},
                {path: 'search', component: SearchItemComponent},
            ]},
            { path: 'blog', canActivate: [AuthGuard, AdminGuard], component: BlogComponent, children: [
                {path: 'create', component: CreatePostComponent},
                {path: 'myblog', component: MyBlogComponent},
                {path: 'allBlogs', component: PostsComponent },
                {path: 'post/:id', component: PostDetailsComponent },
            ]}

		]
	},
	{ path: '', redirectTo: '/account/signin', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
