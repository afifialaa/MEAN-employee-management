import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Iemployee } from '../../models/iemployee';

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {

	private createEmpURL:string = "http://localhost:8080/employee/addEmp";
	private updateEmpURL:string = "http://localhost:8080/employee/updateEmployee";
	private deleteEmpURL:string = "http://localhost:8080/employee/deleteEmp";


	private searchByFirstNameURL:string = "http://localhost:8080/employee/searchByFirstName";
	private searchByLastNameURL:string = "http://localhost:8080/employee/searchByLastName";
	private searchByGenderURL:string = "http://localhost:8080/employee/searchByGender";
	private searchByEmailURL:string = "http://localhost:8080/employee/searchByEmail";
	private searchByJobTitleURL:string = "http://localhost:8080/employee/searchByJobTitle";
	private searchByDepartmentURL:string = "http://localhost:8080/employee/searchByDepartmentURL";
	private searchByCountryURL:string = "http://localhost:8080/employee/searchByCountry";
	private searchByCityURL:string = "http://localhost:8080/employee/searchByCity";
	private searchByUniversityURL:string = "http://localhost:8080/employee/searchByUniversity";

	constructor(private http: HttpClient) { }

	addEmployee(employee: Iemployee) {
		this.http.post(this.createEmpURL, employee).subscribe(res => {
			console.log('employee was added');
		}, err => {
			console.log(err);
		})
	}

	updateEmployee(employee:Iemployee) {
		this.http.post(this.updateEmpURL, employee).subscribe(res => {
			console.log('employee info was updated');
		}, err => {
			console.log(err);
		})
	}

	deleteEmployee(employee:Iemployee) {
		this.http.post(this.deleteEmpURL, employee).subscribe(res => {
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
		return this.http.get(this.searchByFirstNameURL, { params: params })
	}

	searchByLastName(lastName: string) {
		let params = new HttpParams().set('lastName', lastName);
		return this.http.get(this.searchByLastNameURL, { params: params })
	}

	searchByEmail(email: string) {
		console.log('searching by email');
		let params = new HttpParams().set('email', email);
		return this.http.get(this.searchByEmailURL, { params: params });
	}

	searchByGender(gender: string) {
		console.log('service gender: ' + gender);
		let params = new HttpParams().set('gender', gender);
		return this.http.get(this.searchByGenderURL, { params: params })
	}

	searchByJobTitle(jobTitle: string) {
		let params = new HttpParams().set('jobTitle', jobTitle);
		return this.http.get(this.searchByJobTitleURL, { params: params });
	}

	searchByCountry(country: string) {
		let params = new HttpParams().set('country', country);
		return this.http.get(this.searchByCountryURL, { params: params });
	}

	searchByCity(city: string) {
		let params = new HttpParams().set('city', city);
		return this.http.get(this.searchByCityURL, { params: params });
	}

	searchByDepartment(department: string) {
		let params = new HttpParams().set('department', department);
		return this.http.get(this.searchByDepartmentURL, { params: params });
	}

	searchByUniversity(university: string) {
		let params = new HttpParams().set('university', university);
		return this.http.get(this.searchByUniversityURL, { params: params });
	}


	generateId(): number {
		let id = Math.floor(Date.now() / 100);
		return id;
	}

	

}
