import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthGuard} from '../auth.guard';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	signinForm:FormGroup;
	email:FormControl = new FormControl('');
	password: FormControl = new FormControl('');
	
	constructor(private fb:FormBuilder, private auth:AuthGuard, private router:Router) { }

	ngOnInit() {
		this.signinForm = new FormGroup({
			email: this.email,
			password: this.password
		})
	}

	login(){
		console.log('login button was pressed');
		this.router.navigateByUrl('/admin');
		console.log(this.router.navigateByUrl('/admin'));
	}

}
