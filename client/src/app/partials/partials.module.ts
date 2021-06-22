import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material';

@NgModule({
	declarations: [HeaderComponent],
	imports: [
		CommonModule,
		MatSidenavModule
	],
	exports:[
		HeaderComponent
	]
})
export class PartialsModule { }
