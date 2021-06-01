import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { FormGroup, FormControl } from '@angular/forms';

import {Iemployee} from '../../models/iemployee';

@Component({
	selector: 'app-employee-details',
	templateUrl: './employee-details.component.html',
	styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

	employee;

	// Employee form
	editEmployeeForm: FormGroup;

	isShown: boolean = false;
	oldData;
	newEmpData:Iemployee;

    errMsg: string;
    msg: string;

	constructor(private route: ActivatedRoute, private router: Router, private empService: EmployeeService) {
	}

	ngOnInit() {
		//form group
		this.editEmployeeForm = new FormGroup({
			firstName: new FormControl(''),
			lastName: new FormControl(''),
			email: new FormControl(''),
			phoneNumber: new FormControl(''),
			gender: new FormControl(''),
			jobTitle: new FormControl(''),
			department: new FormControl(''),
			university: new FormControl(''),

			// Address controls
			country: new FormControl(''),
			city: new FormControl(''),
			street: new FormControl(''),

			// Contract controls
			hiringDate: new FormControl(''),
			terminatingDate: new FormControl(''),
			bank: new FormControl(''),
			bankAccount: new FormControl(''),
			salary: new FormControl('')
		});

		// Disable form controls
		this.editEmployeeForm.disable();

		// Get email
		let email = this.route.snapshot.paramMap.get('email');
		// Get employee 
		this.empService.searchByEmail(email).subscribe((data) => {
			console.log(data['emp']);
			this.employee = data['emp'];

			// Populate old data array
			this.oldData = data['emp'];

			// Setting form value with employee data
			this.editEmployeeForm.controls.firstName.setValue(data['emp'].first_name);
			this.editEmployeeForm.controls.lastName.setValue(data['emp'].last_name);
			this.editEmployeeForm.controls.email.setValue(data['emp'].email);
			this.editEmployeeForm.controls.gender.setValue(data['emp'].gender);
			this.editEmployeeForm.controls.phoneNumber.setValue(data['emp'].phone_number);
			this.editEmployeeForm.controls.university.setValue(data['emp'].university);
			this.editEmployeeForm.controls.jobTitle.setValue(data['emp'].job_title);

			this.editEmployeeForm.controls.country.setValue(data['emp'].address.country);
			this.editEmployeeForm.controls.city.setValue(data['emp'].address.city);
			this.editEmployeeForm.controls.street.setValue(data['emp'].address.street_address);

			this.editEmployeeForm.controls.hiringDate.setValue(data['emp'].contract.hiringDate);
			this.editEmployeeForm.controls.terminatingDate.setValue(data['emp'].contract.terminatingDate);
			this.editEmployeeForm.controls.bank.setValue(data['emp'].contract.bank);
			this.editEmployeeForm.controls.bankAccount.setValue(data['emp'].contract.bankAccount);
			this.editEmployeeForm.controls.salary.setValue(data['emp'].contract.salary);

		}), error => {
			// Error
			console.log(error);
		}
	}

	// Button handler
	editEmployee() {
		this.isShown = true;
		this.editEmployeeForm.enable();
	}

	saveBtn() {

		this.isShown = false;
		this.editEmployeeForm.disable()

		// Populate new data array
		this.newEmpData = {
			firstName: this.editEmployeeForm.value.firstName,
			lastName: this.editEmployeeForm.value.lastName,
			email: this.editEmployeeForm.value.email,
			phoneNumber: this.editEmployeeForm.value.phoneNumber,
			gender: this.editEmployeeForm.value.gender,
			jobTitle: this.editEmployeeForm.value.jobTitle,
			department: this.editEmployeeForm.value.department,
			university: this.editEmployeeForm.value.university,

			country: this.editEmployeeForm.value.country,
			city: this.editEmployeeForm.value.city,
			street: this.editEmployeeForm.value.street,

			hiringDate: this.editEmployeeForm.value.hiringDate,
			terminatingDate: this.editEmployeeForm.value.terminatingDate,
			bank: this.editEmployeeForm.value.bank,
			bankAccount: this.editEmployeeForm.value.bankAccount,
			salary: this.editEmployeeForm.value.salary,
		}

		this.updateEmployee(this.newEmpData);

	}

	updateEmployee(targetEmp) {
		this.empService.updateEmployee(targetEmp);
	}

	// Cancel button handler
	cancelEdit() {
		this.editEmployeeForm.disable();
		this.isShown = false;
	}

	deleteEmployee() {
		let employee = this.employee;
		this.empService.deleteEmployee(employee).subscribe(
            data => {
                this.errMsg = '';
                this.msg = 'Employee updated';

            },
            error => {
                this.msg = '';
                this.errMsg = 'Failed to update employee';
            }
        )
	}

}
