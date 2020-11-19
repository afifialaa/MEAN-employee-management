import { Component, OnInit } from '@angular/core';
import {DashboardServicesService} from '../services/dashboard-services.service';
import { HostListener  } from "@angular/core";
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-card',
	templateUrl: './user-card.component.html',
	styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

	constructor(private dashSrvc:DashboardServicesService, private router:Router) { }

	userNum:number;

	ngOnInit() {
		this.dashSrvc.getUsersNum().subscribe( (data)=>{
			this.userNum = data['number']
		})
	}

	@HostListener("click") onClick(){
		this.router.navigate(['/admin/user']);
	}

}
