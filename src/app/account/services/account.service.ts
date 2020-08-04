import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AccountService {

	private signupUrl = 'http://localhost:8080/user/signup';
	private loginUrl: string = 'http://localhost:8080/user/signin';

	constructor(private httpClient:HttpClient) { }

	signupUser(user) {
		return this.httpClient.post(this.signupUrl, JSON.stringify(user));
	}

	loginUser(user){
		return this.httpClient.post(this.loginUrl, user);
	}
}
