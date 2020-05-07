import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class SignupService {

	constructor(private httpClient: HttpClient) { }

	signupUrl = 'http://localhost:8080/user/signup';
	
	signupUser(user){
		return this.httpClient.post(this.signupUrl, JSON.stringify(user));
	}
}
