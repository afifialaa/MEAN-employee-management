import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';

@Component({
	selector: 'app-search-employee',
	templateUrl: './search-employee.component.html',
	styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

	errMsg: string;
	singleEmployee: any;

	looking: boolean = false;

	fields = ['First Name', 'Last Name', 'Email', 'Gender', 'Job Title', 'Department', 'Country', 'City', 'Street', 'University'];
	searchEmployeeForm: FormGroup;
	field = new FormControl('');
	empEmail = new FormControl('', [Validators.required]);

	constructor(private http: HttpClient, private empService: EmployeeService, private fb: FormBuilder, private router: Router) { }

	ngOnInit() {
		this.searchEmployeeForm = new FormGroup({
			field: this.field,
			empEmail: this.empEmail
		})
	}

	targetEmployee: any;
	maleAvatar = '../../assets/avatar/maleEmp.png';
	femaleAvatar = '../../assets/avatar/femaleEmp.png';
	img: string;

	// Search button handler
	searchEmployee() {
		console.log('button was pressed');
		this.looking = true;

		if (this.searchEmployeeForm.valid == true) {
			//logging search option
			let option = this.searchEmployeeForm.value.field;

			//seach by email
			if (option == 'Email') {
				let email = this.empEmail.value;
				this.empService.searchByEmail(email).subscribe(result => {
					if (result["err"]) {
						this.targetEmployee = null;
						this.errMsg = result["err"];
						return;
					} else {
						this.errMsg = "";
						this.looking = false;
						this.singleEmployee = result;
						//avatar-based gender
						/*if (this.targetEmployee.gender == 'female') {
							this.img = this.femaleAvatar;
					  } else {
							this.img = this.maleAvatar;
					  }*/
					}
				});
			} else if (option == 'id') {
				let id = this.empEmail.value;
				this.empService.searchById(id).subscribe(result => {
					if (!result) {
						return;
					}
					this.targetEmployee = result;
				})
			} else if (option == 'Gender') {
				let gender = this.empEmail.value;
				this.empService.searchByGender(gender).subscribe(result => {
					if (result["mgs"]) {
						this.targetEmployee = null;
						this.errMsg = result["msg"];
						return;
					} else {
						this.looking = false;
						this.errMsg = null;
						this.targetEmployee = result;
					}
				})
			} else if (option == 'First Name') {
				let firstName = this.empEmail.value;
				this.empService.searchByFirstName(firstName).subscribe(result => {
					if (result["mgs"]) {
						this.targetEmployee = null;
						this.errMsg = result["msg"];
						return;
					} else {
						this.looking = false;
						this.errMsg = null;
						this.targetEmployee = result;
					}
				})
			} else if (option == 'Last Name') {
				let lastName = this.empEmail.value;
				this.empService.searchByLastName(lastName).subscribe(result => {
					if (result["mgs"]) {
						this.targetEmployee = null;
						this.errMsg = result["msg"];
						return;
					} else {
						this.looking = false;
						this.errMsg = null;
						this.targetEmployee = result;
					}
				})
			}

		} else {
			return;
		}
	}

	// View profile button handler
	viewProfile(email: string) {
		this.router.navigate(['/admin/employee/employee-details', { email: email }]);
	}

	// Filter controls
	showFirstName: boolean = true;
	showLastName: boolean = true;
	showEmail: boolean = true;
	showCountry: boolean = false;
	showCity: boolean = false;
	showPhoneNumber: boolean = false;
	showGender:boolean = false;
	showJobTitle: boolean = false;
	showUniversity:boolean = false;
	showDepartment: boolean = false;
	showSalary: boolean = false;

	firstNameChkbx(event) {
		this.showFirstName = event.currentTarget.checked;
	}

	lastNameChkbx(event) {
		this.showLastName = event.currentTarget.checked;
	}

	emailChkbx(event) {
		this.showEmail = event.currentTarget.checked;
	}

	countryChkbx(event) {
		this.showCountry = event.currentTarget.checked;
	}

	cityChkbx(event) {
		this.showCity = event.currentTarget.checked;
	}

	phoneNumberChkbx(event){
		this.showPhoneNumber = event.currentTarget.checked;
	}

	genderChkbx(event) {
		this.showGender = event.currentTarget.checked;
	}

	salaryChkbx(event) {
		this.showSalary = event.currentTarget.checked;
	}

	universityChkbx(event){
		this.showUniversity = event.currentTarget.checked;
	}

	departmentChkbx(event){
		this.showDepartment = event.currentTarget.checked;
	}

	jobTitleChkbx(event){
		this.showJobTitle = event.currentTarget.checked;
	}
}
