import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateItemComponent } from './create-item/create-item.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchItemComponent } from './search-item/search-item.component';
import { InventoryComponent } from './inventory/inventory.component'
import { RouterModule, Routes } from '@angular/router';

import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {AuthInterceptorService} from '../interceptors/auth-interceptor.service';

@NgModule({
    declarations: [CreateItemComponent, SearchItemComponent, InventoryComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        CreateItemComponent,
        InventoryComponent,
        SearchItemComponent,
    ],
    providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorService,
			multi: true
		}
	],
})
export class InventoryModule { }
