import { Component, OnInit } from '@angular/core';
import {AccountService} from '../services/account.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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


	ngOnInit() {
		let resetToken = {
			resetToken: this.route.snapshot.paramMap.get('resetToken')
		}

		this.accoutService.checkResetToken(resetToken).subscribe( data => {
			if(data['err']){
				this.showForm = false;
				this.errMsg = 'Not valid token';
			}else{
				this.showForm = true;
				console.log('valid token');
			}
		});
	}


	checkResetToken(){
		let token = this.route.snapshot.paramMap.get('email')
	}
}
