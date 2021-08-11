import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateItemComponent } from './create-item/create-item.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
    declarations: [CreateItemComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CreateItemComponent
    ]
})
export class InventoryModule { }
