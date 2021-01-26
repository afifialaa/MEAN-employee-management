import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Iemployee } from '../../../models/iemployee';
import {environment} from '../../../../environments/environment.prod';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {

	constructor(private http: HttpClient) { }

	addEmployee(employee: Iemployee) {
		console.log(employee.country);
		return this.http.post(environment.createEmpURL, employee);
	}

	updateEmployee(employee:Iemployee) {
		this.http.put(environment.updateEmpURL, employee).subscribe(res => {
			console.log('employee info was updated');
		}, err => {
			console.log(err);
		})
	}

	deleteEmployee(employee:Iemployee) {
		this.http.post(environment.deleteEmpURL, employee).subscribe(res => {
			console.log('employee was deleted');
		}, err => {
			console.log(err);
		})
	}

	// ----------- Search services ------------

	searchById(id: string) {
		let params = new HttpParams().set('id', id);
		return this.http.get('http://localhost:8080/employee/searchById', { params: params });
	}

	searchByFirstName(firstName: string) {
		let params = new HttpParams().set('firstName', firstName);
		return this.http.get(environment.searchByFirstNameURL, { params: params })
	}

	searchByLastName(lastName: string) {
		let params = new HttpParams().set('lastName', lastName);
		return this.http.get(environment.searchByLastNameURL, { params: params })
	}

	searchByEmail(email: string) {
		console.log('searching by email');
		let params = new HttpParams().set('email', email);
		return this.http.get(environment.searchByEmailURL, { params: params });
	}

	searchByGender(gender: string) {
		console.log('service gender: ' + gender);
		let params = new HttpParams().set('gender', gender);
		return this.http.get(environment.searchByGenderURL, { params: params })
	}

	searchByJobTitle(jobTitle: string) {
		let params = new HttpParams().set('jobTitle', jobTitle);
		return this.http.get(environment.searchByJobTitleURL, { params: params });
	}

	searchByCountry(country: string) {
		let params = new HttpParams().set('country', country);
		return this.http.get(environment.searchByCountryURL, { params: params });
	}

	searchByCity(city: string) {
		let params = new HttpParams().set('city', city);
		return this.http.get(environment.searchByCityURL, { params: params });
	}

	searchByDepartment(department: string) {
		let params = new HttpParams().set('department', department);
		return this.http.get(environment.searchByDepartmentURL, { params: params });
	}

	searchByUniversity(university: string) {
		let params = new HttpParams().set('university', university);
		return this.http.get(environment.searchByUniversityURL, { params: params });
	}


	generateId(): number {
		let id = Math.floor(Date.now() / 100);
		return id;
	}

}
