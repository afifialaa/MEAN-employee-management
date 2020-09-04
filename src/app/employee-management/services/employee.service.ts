import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from '../../models/employee';

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

	searchByJobTitle(jobTitle: string) {
		let params = new HttpParams().set('jobTitle', jobTitle);
		return this.http.get('http://localhost:8080/employee/searchByJobTitel', { params: params });
	}

	searchByFirstName(firstName: string) {
		let params = new HttpParams().set('firstName', firstName);
		return this.http.get('http://localhost:8080/employee/searchByFirstName', { params: params })
	}

	searchByLastName(lastName: string) {
		let params = new HttpParams().set('lastName', lastName);
		return this.http.get('http://localhost:8080/employee/searchByLastName', { params: params })
	}

	searchByGender(gender: string) {
		console.log('service gender: ' + gender);
		let params = new HttpParams().set('gender', gender);
		return this.http.get('http://localhost:8080/employee/searchByGender', { params: params })
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

	updateEmployee(employee) {
		this.http.post('http://localhost:8080/employee/updateEmployee', employee).subscribe(res => {
			console.log('employee info was updated');
		}, err => {
			console.log(err);
		})
	}

	deleteEmployee(employee) {
		this.http.post('http://localhost:8080/employee/deleteEmployee', employee).subscribe(res => {
			console.log('employee was deleted');
		}, err => {
			console.log(err);
		})
	}

}
