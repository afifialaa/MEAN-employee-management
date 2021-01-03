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
		console.log('user card init');
		this.dashSrvc.getUsersNum().subscribe( (data)=>{
			console.log('user subscribe cb: ', data);
			this.userNum = data['number']
		})
	}

	@HostListener("click") onClick(){
		this.router.navigate(['/admin/user']);
	}

}
