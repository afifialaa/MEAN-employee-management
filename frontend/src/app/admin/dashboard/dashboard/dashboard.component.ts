import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	departmentTitle: string = 'title'
	depItem: string = 'item1'

	constructor() { }

	ngOnInit() {
	}

}
