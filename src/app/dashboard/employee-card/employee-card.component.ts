import { Component, OnInit } from '@angular/core';
import {DashboardServicesService} from '../services/dashboard-services.service';
import { HostListener  } from "@angular/core";
import { Router } from '@angular/router';

@Component({
	selector: 'app-employee-card',
	templateUrl: './employee-card.component.html',
	styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

	constructor(private dashServ:DashboardServicesService, private router:Router) { }

	empNum:number;

	ngOnInit() {
		this.dashServ.getEmployeesNum().subscribe( (data)=>{
			this.empNum = data['number']
		})
	}

	@HostListener("click") onClick(){
		this.router.navigate(['/admin/employee']);
	}

}
