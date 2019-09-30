import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthGuard} from '../auth.guard';
import { Router } from '@angular/router';
import {AuthService} from '../auth-service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	signinForm:FormGroup;
	email:FormControl = new FormControl('');
	password: FormControl = new FormControl('');
	
	constructor(private fb:FormBuilder, private auth:AuthGuard, private router:Router, private authService:AuthService) { }

	ngOnInit() {
		this.signinForm = new FormGroup({
			email: this.email,
			password: this.password
		})
	}

	login(){
		console.log('login button was pressed');
		var user = {
			email: this.signinForm.value.email,
			password: this.signinForm.value.password
		}

		this.authService.login(user);
	}

}
