import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	signinForm: FormGroup;
		currentUser: boolean;
	message: string = '';


	constructor(private fb: FormBuilder, private accountSrvc: AccountService, private router: Router) { }

	ngOnInit() {
		this.signinForm = new FormGroup({
			email: new FormControl('', [
				Validators.required,
				Validators.minLength(11),
				Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
			]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(6)
			])
		})
	}

	// Getters
	get email(){
		return this.signinForm.get('email');
	}

	get password(){
		return this.signinForm.get('password');
	}

	// Login button handler
	login() {
		let user = {
			email: this.signinForm.value.email,
			password: this.signinForm.value.password
		}

		// Logging user in
		this.accountSrvc.loginUser(user).subscribe((data) => {
			if (data['msg']) {
				// Failed to login
				this.signinForm.reset();
				this.message = data['msg'];
			} else if (data['token']) {
				// Login successfully
				localStorage.setItem('token', data['token']);
				localStorage.setItem('email', data['email']);
				// Redirect 
				this.router.navigate(['/admin/dashboard']);
			}
		})

	}
}
