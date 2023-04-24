import { Component, OnInit } from '@angular/core';
import {DashboardServices} from '../services/dashboard.service';
import { HostListener  } from "@angular/core";
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-card',
	templateUrl: './user-card.component.html',
	styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

	constructor(private dashSrvc:DashboardServices, private router:Router) { }

	userNum:number;

	ngOnInit() {
	}

	@HostListener("click") onClick(){
		this.router.navigate(['/admin/user/create']);
	}

}
