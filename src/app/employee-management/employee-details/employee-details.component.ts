import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
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
	phoneNumber = new FormControl();
	country = new FormControl();
	city = new FormControl();
	street = new FormControl();
	gender = new FormControl();
	jobTitle = new FormControl();
	department = new FormControl();
	salary = new FormControl();
	university = new FormControl();

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
			phoneNumber: this.phoneNumber,
			gender: this.gender,
			country: this.country,
			city: this.city,
			street: this.street,
			jobTitle: this.jobTitle,
			department: this.department,
			university: this.university,
			salary: this.salary
		})

		// Disable form controls
		this.editEmployeeForm.disable();

		// Get email
		let email = this.route.snapshot.paramMap.get('email');
		// Get employee 
		this.empService.searchByEmail(email).subscribe((result) => {
			this.employee = result;

			// populate old data array
			this.oldData = [
				this.employee.first_name,
				this.employee.last_name,
				this.employee.email,
				this.employee.phone_number,
				this.employee.country,
				this.employee.city,
				this.employee.street,
				this.employee.jobTitle,
				this.employee.department,
				this.employee.university,
				this.employee.salary
			]

			// Setting form value with employee data
			this.firstName.setValue(this.employee.first_name);
			this.lastName.setValue(this.employee.last_name);
			this.email.setValue(this.employee.email);
			this.phoneNumber.setValue(this.employee.phone_number);
			this.country.setValue(this.employee.country);
			this.city.setValue(this.employee.city);
			this.street.setValue(this.employee.street_address);
			this.gender.setValue(this.employee.gender);
			this.jobTitle.setValue(this.employee.job_title);
			this.department.setValue(this.employee.department);
			this.university.setValue(this.employee.university);
			this.salary.setValue(this.employee.salary);
		}), error => {
			// Error
			console.log('something went horribly wrong');
			console.log(error);
		}
	}

	// Button handler
	editEmployee() {
		console.log(Object.keys(this.employee));
		this.isShown = true;
		this.editEmployeeForm.enable();
	}

	saveBtn(){

		//
		this.isShown = false;
		this.editEmployeeForm.disable()

		// populate new data array
		this.newData = [
			this.firstName.value,
			this.lastName.value,
			this.email.value,
			this.phoneNumber.value,
			this.country.value,
			this.city.value,
			this.street.value,
			this.gender.value,
			this.jobTitle.value,
			this.department.value,
			this.university.value,
			this.salary.value,
		]

		// Compare arrays
		var dataFields:number = this.oldData.length;
		var unchangedFields:number = 0;
		for(var i=0; i<this.oldData.length; i++){
			if(this.oldData[i] == this.newData[i]){
				unchangedFields += 1;	
			}
		}

		if(unchangedFields == dataFields){
			// Nothing changed
			console.log('nothing changed');
		}else{
			// There was a change
			console.log('sending data to server');

			// Updating old employee
			let targetEmp = {
				firstName: this.newData[0],
				lastName: this.newData[1],
				email: this.newData[2],
				phoneNumber: this.newData[3],
				country: this.newData[4],
				governorate: this.newData[5],
				gender: this.newData[6],
				jobTitle: this.newData[7]
			}

			this.sendData(targetEmp);

		}
	}

	sendData(targetEmp){
		this.empService.updateEmployee(targetEmp);
	}

	// Cancel button handler
	cancelEdit() {
		this.editEmployeeForm.disable();
		this.isShown = false;
	}

	deleteEmployee(){
		let employee = this.employee;
		this.empService.deleteEmployee(employee);
	}

}
