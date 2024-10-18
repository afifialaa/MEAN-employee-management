import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Iuser} from '../models/iuser';
import {environment} from '../../environments/environment.development';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private httpClient:HttpClient) { }

	/* Create user */
	create(user:Iuser){
		return this.httpClient.post(environment.userURL, user);
	}

	/* Search by email */
	searchByEmail(email:string){
		let params = new HttpParams().set('email', email);
		return this.httpClient.get(environment.getUser, {params:params});
	}
}
