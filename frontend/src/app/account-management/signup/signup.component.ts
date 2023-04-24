import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {AccountService} from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	constructor(private accountSrvc:AccountService, private router:Router) { }

	signupForm: FormGroup;
	token:string = null;
	errMsg: string;

	ngOnInit() {
		this.signupForm = new FormGroup({
			firstName: new FormControl('', [
				Validators.required,
				Validators.minLength(3)
			]),
			lastName: new FormControl('', [
				Validators.required,
				Validators.minLength(3)
			]),
			email: new FormControl('', [
				Validators.required,
				Validators.minLength(11),
				Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
			]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(6),
			])
		})
	}

	get firstName(){
		return this.signupForm.get('firstName');
	}

	get lastName(){
		return this.signupForm.get('lastName');
	}

	get email(){
		return this.signupForm.get('email');
	}

	get password(){
		return this.signupForm.get('password');
	}

	signup(){
		let user = {
			firstName: this.signupForm.value.firstName,
			lastName: this.signupForm.value.lastName,
			password: this.signupForm.value.password,
			email: this.signupForm.value.email
		}

		this.accountSrvc.signupUser(user).subscribe((data)=>{
			if(data['token']){
				this.router.navigate(['/admin']);
			}else if(data['err']){
				this.errMsg = data['err'];
				return false;
			}
		})
	}
}


