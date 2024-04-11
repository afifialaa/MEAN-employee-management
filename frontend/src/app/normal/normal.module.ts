import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {PartialsModule} from '../partials/partials.module'
import {RouterModule} from '@angular/router'

import { NormalComponent } from './normal/normal.component';
import { NormalDashboardComponent } from './normal-dashboard/normal-dashboard.component';
import { NormalSidenavComponent } from './normal-sidenav/normal-sidenav.component';

@NgModule({
    declarations: [
        NormalComponent,
        NormalDashboardComponent,
        NormalSidenavComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        PartialsModule,
    ],
    exports: [
        NormalComponent,
        NormalDashboardComponent
    ]
})
export class NormalModule { }
