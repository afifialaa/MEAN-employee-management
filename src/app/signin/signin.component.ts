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

	flag:boolean;
	message:string = '';
	
	constructor(private fb:FormBuilder, private auth:AuthGuard, private router:Router, private authService:AuthService) { }

	ngOnInit() {
		this.signinForm = new FormGroup({
			email: this.email,
			password: this.password
		})
	}

	//button handler
	login(){
		console.log('login button was pressed');
		var user = {
			email: this.signinForm.value.email,
			password: this.signinForm.value.password
		}

		if(user.email === null || user.password === null){
			console.log('empty fields');
			return false;
		}

		if(user.email.length < 4){
			console.log('not a valid email');
			return false;
		}

		//log user in
		this.authService.login(user);
		if(this.authService.loggedIn == false){
			this.message = 'Wrong email or password';
			this.signinForm.reset();
		}
	}

}
