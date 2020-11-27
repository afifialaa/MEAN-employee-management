import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AccountService {

	private signupUrl: string = '/user/signup';
	private loginUrl: string = '/user/signin';

	constructor(private httpClient:HttpClient) { }

	signupUser(user) {
		console.log('creating user');
		return this.httpClient.post(this.signupUrl, user);
	}

	loginUser(user){
		return this.httpClient.post(this.loginUrl, user);
	}
}
