import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {

	constructor(private http: HttpClient) { }

	addEmployee(employee: Employee) {
		this.http.post('http://localhost:8080/employee/addEmp', employee).subscribe(res => {
			console.log('employee was added');
		}, err => {
			console.log(err);
		})
	}

	searchById(id: string) {
		let params = new HttpParams().set('id', id);
		return this.http.get('http://localhost:8080/employee/searchById', { params: params });
	}

	searchByEmail(email: string) {
		console.log('searching by email');
		let params = new HttpParams().set('email', email);
		return this.http.get('http://localhost:8080/employee/searchByEmail', { params: params });
	}

	generateId(): number {
		let id = Math.floor(Date.now() / 100);
		return id;
	}

	updateEmployee(employee){
		this.http.post('http://localhost:8080/employee/updateEmployee', employee).subscribe(res => {
			console.log('employee info was updated');
		}, err => {
			console.log(err);
		})
	}

	deleteEmployee(employee){
		this.http.post('http://localhost:8080/employee/deleteEmployee', employee).subscribe( res => {
			console.log('employee was deleted');
		}, err => {
			console.log(err);
		})
	}

}
