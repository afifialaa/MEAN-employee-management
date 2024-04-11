import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { HeaderComponent } from './header/header.component'
import { CardComponent } from './card/card.component'
import { SidenavComponent } from './sidenav/sidenav.component'


@NgModule({
    declarations: [
        HeaderComponent,
        CardComponent,
        SidenavComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        CardComponent,
        SidenavComponent
    ]
})
export class PartialsModule { }
