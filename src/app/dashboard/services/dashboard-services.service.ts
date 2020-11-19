import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DashboardServicesService {

	constructor(private httpClient:HttpClient) { }

	private getEmployeesNumUrl: string = 'http://localhost:8080/dashboard/getEmployeesNum';
	private getUsersNumUrl: string = 'http://localhost:8080/dashboard/getUsersNum';
	private getDepartmentsNumUrl: string = 'http://localhost:8080/dashboard/getDepartmentsNum';

	getEmployeesNum(){
		return this.httpClient.get(this.getEmployeesNumUrl);
	}
	
	getUsersNum(){
		return this.httpClient.get(this.getUsersNumUrl);
	}

	getDepartmentsNum(){
		return this.httpClient.get(this.getDepartmentsNumUrl);
	}
}
