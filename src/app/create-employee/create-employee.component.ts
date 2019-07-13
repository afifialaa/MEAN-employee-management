import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {HttpClient} from '@angular/common/http';
import {EmployeeService} from '../employee.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  createEmployeeForm:FormGroup;
  id = new FormControl('', Validators.required);
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  phoneNumber = new FormControl('', Validators.required);
  country = new FormControl('', Validators.required);
  governorate = new FormControl('', Validators.required);
  gender = new FormControl('', Validators.required);
  jobTitle = new FormControl('', Validators.required);

  constructor(private empService:EmployeeService, private fb:FormBuilder) {
  }

  generateIdControl(){
    this.id.setValue(this.empService.generateId().toString());
  }

  ngOnInit() {
    this.generateIdControl();

    this.createEmployeeForm = this.fb.group({
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      country: this.country,
      governorate: this.governorate,
      gender: this.gender,
      jobTitle: this.jobTitle
    })
  }

  //mock data
  /***************** */

  //form button handler
  createEmployee():void{
    console.log(this.id.value);

    let employee:Employee = {
      empId : this.id.value,
      firstName: this.createEmployeeForm.value.firstName,
      lastName: this.createEmployeeForm.value.lastName,
      email: this.createEmployeeForm.value.email,
      phoneNumber: this.createEmployeeForm.value.phoneNumber,
      country: this.createEmployeeForm.value.country,
      governorate: this.createEmployeeForm.value.governorate,
      gender: this.createEmployeeForm.value.gender,
      jobTitle: this.createEmployeeForm.value.jobTitle
    }

    //form status
    console.log(this.createEmployeeForm.valid);

    //touch endpoint
    if(this.createEmployeeForm.valid == true){
      this.empService.addEmployee(employee);
      //reset form
      this.createEmployeeForm.reset();
      this.generateIdControl();
    }else{
      console.log('form is invalid');
      return;
    }
  }

  updateMsg:string  = '';
  status:boolean = false;

  //send data to server
}
