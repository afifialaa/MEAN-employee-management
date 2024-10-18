import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Iemployee } from '../models/iemployee'
import {environment} from '../../environments/environment.development'

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {

	constructor(private http: HttpClient) { }

	createEmployee(employee: Iemployee) {
		return this.http.post(environment.employeeURL, employee)
	}

	updateEmployee(employee:Iemployee) {
		return this.http.put(environment.employeeURL, employee)
	}

	deleteEmployee(id:string) {
        let obj = {id: id}
		let params = new HttpParams({fromObject: obj})
		return this.http.delete(environment.employeeURL, {params:params})
	}

	readEmployees(obj:any){
		let params = new HttpParams({fromObject: obj})
		return this.http.get(environment.employeeURL, {params:params})
	}

	readEmployee(id: string) {
		let params = new HttpParams().set('id', id)
		return this.http.get(environment.employeeURL, {params:params})
	}

	generateId(): number {
		let id = Math.floor(Date.now() / 100)
		return id
	}

}
