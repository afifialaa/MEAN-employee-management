import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	currentUser: string;
	
	constructor() { 
		this.currentUser = localStorage.getItem('email');
	}

	ngOnInit() {
	}

}
