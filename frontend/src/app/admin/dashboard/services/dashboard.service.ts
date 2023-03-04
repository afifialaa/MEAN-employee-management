import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.dev';

@Injectable({
	providedIn: 'root'
})
export class DashboardServices{

	constructor(private httpClient:HttpClient) { }

	getEmployeesNum(){
		console.log('get employee number service')
		return this.httpClient.get(environment.employeesNumURL, {responseType:'json'});
	}
	
	getUsersNum(){
		console.log('get user number service');
		return this.httpClient.get(environment.usersNumURL, {responseType: 'json'});
	}

	getDepartmentsNum(){
		return this.httpClient.get(environment.departmentsNumURL);
	}

	getTasksNum(){
		return this.httpClient.get(environment.tasksNumURL);
	}
}
