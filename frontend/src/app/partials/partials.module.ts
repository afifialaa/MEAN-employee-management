import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [HeaderComponent, NavbarComponent],
	imports: [
		CommonModule,
		MatSidenavModule,
		RouterModule
	],
	exports:[
		HeaderComponent,
		NavbarComponent,
	]
})
export class PartialsModule { }
