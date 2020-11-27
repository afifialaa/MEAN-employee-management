import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DashboardServicesService {

	constructor(private httpClient:HttpClient) { }

	private getEmployeesNumUrl: string = '/dashboard/getEmployeesNum';
	private getUsersNumUrl: string = '/dashboard/getUsersNum';
	private getDepartmentsNumUrl: string = '/dashboard/getDepartmentsNum';

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
