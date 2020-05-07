import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../employee.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validateEmail } from '../../shared/validator-email';
import { CountryService } from '../../country.service';


@Component({
	selector: 'app-create-employee',
	templateUrl: './create-employee.component.html',
	styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

	createEmployeeForm: FormGroup;
	firstName = new FormControl('', Validators.required);
	lastName = new FormControl('', Validators.required);
	email = new FormControl('', [Validators.required, validateEmail]);
	phoneNumber = new FormControl('', Validators.required);
	gender = new FormControl('', Validators.required);
	jobTitle = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]);

	countries: any[];

	constructor(private empService: EmployeeService, private fb: FormBuilder, private countryService: CountryService) {
	}

	ngOnInit() {

		//load countries list
		this.countries = this.countryService.countries;

		this.createEmployeeForm = this.fb.group({
			firstName: this.firstName,
			lastName: this.lastName,
			email: this.email,
			phoneNumber: this.phoneNumber,
			gender: this.gender,
			jobTitle: this.jobTitle
		})
	}

	//form button handler
	createEmployee(): void {

		let employee: Employee = {
			firstName: this.createEmployeeForm.value.firstName,
			lastName: this.createEmployeeForm.value.lastName,
			email: this.createEmployeeForm.value.email,
			phoneNumber: this.createEmployeeForm.value.phoneNumber,
			gender: this.createEmployeeForm.value.gender,
			jobTitle: this.createEmployeeForm.value.jobTitle
		}

		if (this.createEmployeeForm.valid == true) {
			this.empService.addEmployee(employee);
			//reset form
			this.createEmployeeForm.reset();
		} else {
			console.log('form is invalid');
			return;
		}
	}

	updateMsg: string = '';
	status: boolean = false;

	//send data to server
}
