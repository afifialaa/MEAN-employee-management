import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	currentUser: string;
	
	constructor(private loginService:LoginService) { 
		this.currentUser = localStorage.getItem('email');
	}

	ngOnInit() {
	}

}
