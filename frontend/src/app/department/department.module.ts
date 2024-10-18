import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDepartmentComponent } from './create-department/create-department.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';

import { MatButtonModule } from '@angular/material/button'
import { MatTabsModule } from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import { MatRadioModule } from '@angular/material/radio'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatInputModule} from '@angular/material/input'
import {MatAutocompleteModule} from '@angular/material/autocomplete' 
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatTableModule} from '@angular/material/table'

import { AsyncPipe } from '@angular/common';


@NgModule({
    declarations: [
        CreateDepartmentComponent,
        DepartmentComponent
    ],
    imports: [
        AsyncPipe,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatTableModule
    ],
    exports: [
        CreateDepartmentComponent,
        DepartmentComponent
    ]
})
export class DepartmentModule { }
