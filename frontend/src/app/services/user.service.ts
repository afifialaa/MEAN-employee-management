import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Iuser} from '../models/iuser';
import {environment} from '../../environments/environment.development';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http:HttpClient) { }

	/* Create user */
	create(user:Iuser){
		return this.http.post(environment.userURL, user);
	}

	/* Search by email */
	searchByEmail(email:string){
		let params = new HttpParams().set('email', email);
		return this.http.get(environment.getUser, {params:params});
	}
}
