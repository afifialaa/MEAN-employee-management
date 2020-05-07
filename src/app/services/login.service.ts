import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	private loginUrl: string = 'http://localhost:8080/user/signin';

	constructor(private httpClient:HttpClient) {
	}

	loginUser(user){
		return this.httpClient.post(this.loginUrl, user);
	}

}
