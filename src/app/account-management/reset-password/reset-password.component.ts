import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

	constructor(private accoutService:AccountService, private router:Router, private route:ActivatedRoute) { }

	validToken:boolean;
	showForm:boolean;
	errMsg:string;
	msg:string;
	userEmail:string;

	resetPasswordForm:FormGroup;

	ngOnInit() {
		this.resetPasswordForm = new FormGroup({
			password: new FormControl(''),
			confirmPassword: new FormControl('')
		});


		let resetToken = {
			resetToken: this.route.snapshot.paramMap.get('resetToken')
		}

		this.accoutService.checkResetToken(resetToken).subscribe( data => {
			if(data['err']){
				this.showForm = false;
				this.errMsg = 'Not valid token';
			}else{
				this.userEmail = data['email'];
				this.showForm = true;
				console.log('valid token');
			}
		});
	}


	resetPassword(){
		let user = {
			email: this.userEmail,
			password: this.resetPasswordForm.value.password
		}

		this.accoutService.resetPassword(user).subscribe(data => {
			if(data['err']){
				this.showForm = false;
				this.msg = '';
				this.errMsg = data['err'];
			}else{
				this.showForm = false;
				this.errMsg = '';
				this.msg = data['msg'];
			}
		})
	}

}
