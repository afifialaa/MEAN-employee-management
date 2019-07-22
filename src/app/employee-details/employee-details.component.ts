import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-employee-details',
	templateUrl: './employee-details.component.html',
	styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

	employee;

	//form controls
	editEmployeeForm: FormGroup;
	firstName = new FormControl();
	lastName = new FormControl();
	email = new FormControl();
	jobTitle = new FormControl();

	isShown: boolean = false;
	oldData;
	newData;

	constructor(private route: ActivatedRoute, private router: Router, private empService: EmployeeService) {
	}

	ngOnInit() {
		//form group
		this.editEmployeeForm = new FormGroup({
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			jobTitle: this.jobTitle
		})

		//disable form controls
		this.editEmployeeForm.disable();

		//get email
		let email = this.route.snapshot.paramMap.get('email');
		//get employee 
		this.empService.searchByEmail(email).subscribe((result) => {
			this.employee = result;

			//populate old data array
			this.oldData = [
				this.employee.firstName,
				this.employee.lastName,
				this.employee.email,
				this.employee.jobTitle
			]

			//setting form value with employee data
			this.firstName.setValue(this.employee.firstName);
			this.lastName.setValue(this.employee.lastName);
			this.email.setValue(this.employee.email);
			this.jobTitle.setValue(this.employee.jobTitle);
		}), error => {

			//error
			console.log('something went horribly wrong');
			console.log(error);
		}
	}

	//button handler
	editEmployee() {
		console.log(Object.keys(this.employee));
		this.isShown = true;
		this.editEmployeeForm.enable();
	}

	saveBtn(){

		//populate new data array
		this.newData = [
			this.firstName.value,
			this.lastName.value,
			this.email.value,
			this.jobTitle.value
		]

		//compare arrays
		var dataFields:number = this.oldData.length;
		var unchangedFields:number = 0;
		for(var i=0; i<this.oldData.length; i++){
			if(this.oldData[i] == this.newData[i]){
				unchangedFields += 1;	
			}
		}

		if(unchangedFields == dataFields){
			//nothing changed
			console.log('nothing changed');
		}else{
			//there was a change
			console.log('sending data to server');

			//updating old employee
			var targetEmp = {
				firstName: this.newData[0],
				lastName: this.newData[1],
				email: this.newData[2],
				jobTitle: this.newData[3]
			}

			this.sendData(targetEmp);

		}
	}

	sendData(targetEmp){
		this.empService.updateEmployee(targetEmp);
	}

	//cancel button handler
	cancelEdit() {
		this.editEmployeeForm.disable();
		this.isShown = false;
	}

	deleteEmployee(){
		console.log('button was pressed');
		var employee = this.employee;
		this.empService.deleteEmployee(employee);
	}

}
