import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Iuser} from '../../models/iuser';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http:HttpClient) { }

	private createUserUrl:string = 'http://localhost:8080/user/createUser';
	private searchUserUrl:string = 'http://localhost:8080/user/searchUser';

	// Create user
	create(user:Iuser){
		return this.http.post(this.createUserUrl, user);
	}

	// Search user by email
	search(email:string){
		let params = new HttpParams().set('email', email);
		return this.http.get(this.searchUserUrl, {params:params});
	}
}
