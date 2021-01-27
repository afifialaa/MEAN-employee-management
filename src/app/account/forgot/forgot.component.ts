import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AccountService} from '../services/account.service';

@Component({
	selector: 'app-forgot',
	templateUrl: './forgot.component.html',
	styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

	forgotForm:FormGroup;
	msg: string;
	errMsg: string;
	showForm:boolean;

	constructor(private accntSrvc: AccountService) { }

	ngOnInit() {
		this.showForm = true;
		this.forgotForm = new FormGroup({
			email: new FormControl('')
		})
	}

	forgotPassword(){
		let user = {
			email: this.forgotForm.value.email
		}
		this.accntSrvc.forgotUser(user).subscribe( data => {
			if(data['err']){
				this.errMsg = 'Email is not registered';
			}else{
				this.showForm = false;
				this.msg = 'You will recienve and email with link to reset password';
			}
		})
	}

}
