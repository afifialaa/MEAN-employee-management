import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {AuthService} from '../auth-service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	constructor(private authService:AuthService) { }

	signupForm: FormGroup;
	firstName: FormControl = new FormControl();
	lastName: FormControl = new FormControl();
	email: FormControl = new FormControl();
	password: FormControl = new FormControl();

	status:string = null

	ngOnInit() {
		this.signupForm = new FormGroup({
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			password: this.password
		})
	}

	signup(){
		console.log('trying to signup');
		let user = {
			firstName: this.signupForm.value.firstName,
			lastName: this.signupForm.value.lastName,
			password: this.signupForm.value.password,
			email: this.signupForm.value.email
		}
		this.authService.signup(user);
		//status of user creation
		status = this.authService.status;
	}
}


