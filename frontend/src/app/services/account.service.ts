import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.dev';

@Injectable({
	providedIn: 'root'
})
export class AccountService {

	constructor(private httpClient:HttpClient) { }

	signupUser(user) {
		return this.httpClient.post(environment.signupUrl, user, {responseType: 'json'});
	}

	loginUser(user){
		return this.httpClient.post(environment.loginUrl, user, {responseType: 'json'});
	}

	forgotUser(user){
		return this.httpClient.post(environment.forgotUrl, user, {responseType: 'json'});
	}

	checkResetToken(resetToken){
		return this.httpClient.post(environment.checkResetTokenUrl, resetToken );
	}

	resetPassword(user){
		return this.httpClient.post(environment.resetPasswordUrl, user, {responseType: 'json'});
	}
}

