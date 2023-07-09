import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

import {Iuser} from '../models/iuser'

@Injectable({
	providedIn: 'root'
})
export class AccountService {

	constructor(private httpClient:HttpClient) { }

	signupUser(user: Iuser) {
		return this.httpClient.post(environment.signupUrl, user, {responseType: 'json'});
	}

	loginUser(user: Iuser){
		return this.httpClient.post(environment.loginUrl, user, {responseType: 'json'});
	}

	forgotUser(user: Iuser){
		return this.httpClient.post(environment.forgotUrl, user, {responseType: 'json'});
	}

	checkResetToken(resetToken: any){
		return this.httpClient.post(environment.checkResetTokenUrl, resetToken );
	}

	resetPassword(user: Iuser){
		return this.httpClient.post(environment.resetPasswordUrl, user, {responseType: 'json'});
	}
}

