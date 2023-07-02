import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-employee-dashboard',
	templateUrl: './employee-dashboard.component.html',
	styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
     
    card1title = 'Total Employees'
    card2title = 'Absent'
    card3title = 'On Leave'
    card4title = 'Out Office'
    card5title = 'Total Employees'
    card6title = 'Total Employees'
    varname = '1000'

	constructor() { }

	ngOnInit() {
	}

}
