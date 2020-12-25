import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http:HttpClient) { }

	private createUserUrl:string = 'http://localhost:8080/user/createUser';
	private searchUserUrl:string = 'http://localhost:8080/user/searchUser';

	createUser(user){
		return this.http.post(this.createUserUrl, user);
	}
}
