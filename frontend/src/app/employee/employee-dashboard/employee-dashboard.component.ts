import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-employee-dashboard',
	templateUrl: './employee-dashboard.component.html',
	styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
     
    card1Title = 'Total Employees'
    card1Data = 100

    card2Title = 'Absent'
    card2Data = 100

    card3Title = 'On Leave'
    card3Data = 100

    card4Title = 'Out Office'
    card4Data = 100

    card5Title = 'Total Employees'
    card5Data = 100

    card6Title = 'Total Employees'
    card6Data = 100

	constructor() { }

	ngOnInit() {
	}

}
