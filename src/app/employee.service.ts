import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  addEmployee(employee:Employee){
    this.http.post('http://localhost:80/addEmp', employee).subscribe(res => {
      console.log('employee was added');
    }, err => {
      console.log(err);
    })
  }

  searchById(id:string){
    let params = new HttpParams().set('id', id);
    return this.http.get('http://localhost:80/searchId', {params:params});
  }

  searchByEmail(email:string){
    let params = new HttpParams().set('email', email);
    return this.http.get('http://localhost:80/searchEmail', {params:params});
  }

  generateId():number{
    let id = Math.floor(Date.now() / 100);
    return id;
  }

}
