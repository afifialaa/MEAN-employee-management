import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';

@Injectable({
	providedIn: 'root'
})
export class DashboardServices{

	constructor(private httpClient:HttpClient) { }

	getEmployeesNum(){
		return this.httpClient.get(environment.getEmployeesNumUrl);
	}
	
	getUsersNum(){
		return this.httpClient.get(environment.getUsersNumUrl);
	}

	getDepartmentsNum(){
		return this.httpClient.get(environment.getDepartmentsNumUrl);
	}
}
