import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';

@Injectable({
	providedIn: 'root'
})
export class AccountService {

	constructor(private httpClient:HttpClient) { }

	signupUser(user) {
		console.log('creating user');
		return this.httpClient.post(environment.signupUrl, user);
	}

	loginUser(user){
		return this.httpClient.post(environment.loginUrl, user);
	}
}
