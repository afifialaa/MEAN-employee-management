import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
	declarations: [HeaderComponent, NavbarComponent, SidenavComponent],
	imports: [
		CommonModule,
		MatSidenavModule,
		RouterModule
	],
	exports:[
		HeaderComponent,
		NavbarComponent,
		SidenavComponent,
	]
})
export class PartialsModule { }
