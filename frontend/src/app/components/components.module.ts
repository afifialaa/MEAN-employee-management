import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardComponent} from './card/card.component';
import { ProgressChartComponent } from './progress-chart/progress-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
	declarations: [CardComponent, ProgressChartComponent, BarChartComponent],
	imports: [
		CommonModule
	],
	exports: [
		CardComponent,
        ProgressChartComponent,
        BarChartComponent
	]
})
export class ComponentsModule { }
