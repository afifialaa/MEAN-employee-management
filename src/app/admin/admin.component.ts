import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	currentUser: string;
	
	constructor(private router:Router) { 
		this.currentUser = localStorage.getItem('email');
	}

	ngOnInit() {
	}

	goHome(){
		this.router.navigate(['/admin/dashboard']);
	}

}
