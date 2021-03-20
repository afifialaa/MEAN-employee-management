import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iemployee } from '../../models/iemployee';

@Component({
	selector: 'app-search-employee',
	templateUrl: './search-employee.component.html',
	styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

	errMsg: string;
	singleEmployee: any;
	isGenderField:boolean;

	looking: boolean = false;

	fields:string[] = ['First Name', 'Last Name', 'Email', 'Gender', 'Job Title', 'Department', 'Country', 'City', 'Street', 'University'];
	searchEmployeeForm: FormGroup;

	field = new FormControl('');
	fieldValue = new FormControl('', [Validators.required]);

	constructor(private http: HttpClient, private empService: EmployeeService, private fb: FormBuilder, private router: Router) { }

	ngOnInit() {
		this.searchEmployeeForm = new FormGroup({
			field: this.field,
			fieldValue: this.fieldValue
		})
	}

	onFieldChange(field){
		console.log(field);
		if(field === 'Gender'){
			this.isGenderField = true;
		}else{
			this.isGenderField = false;
		}
	}

	targetEmployee: any;
	maleAvatar = '../../assets/avatar/maleEmp.png';
	femaleAvatar = '../../assets/avatar/femaleEmp.png';
	img: string;

	// Search button handler
	searchEmployee() {
		this.looking = true;

		if (this.searchEmployeeForm.valid == true) {
			
			let option = this.searchEmployeeForm.value.field;

			if (option == 'First Name') {
				// Search by first name
				let firstName = this.fieldValue.value;
				this.empService.searchByFirstName(firstName).subscribe(result => {
					if (result["err"]) {
						this.targetEmployee = null;
						this.singleEmployee = null;
						this.looking = false;
						this.errMsg = result["err"];
						return;
					} else {
						this.looking = false;
						this.errMsg = null;
						this.singleEmployee = null;
						this.targetEmployee = result['emp'];
					}
				})
			} else if (option == 'Last Name') {
				// Search by last name
				let lastName = this.fieldValue.value;
				this.empService.searchByLastName(lastName).subscribe(result => {
					if (result["err"]) {
						this.targetEmployee = null;
						this.singleEmployee = null;
						this.looking = false;
						this.errMsg = result["err"];
						return;
					} else {
						this.looking = false;
						this.errMsg = null;
						this.singleEmployee = null;
						this.targetEmployee = result['emp'];
					}
				})
			} else if (option == 'Email') {
				// Search by email
				let email = this.fieldValue.value;
				this.empService.searchByEmail(email).subscribe(result => {
					if (result["err"]) {
						this.singleEmployee = null;
						this.targetEmployee = null;
						this.looking = false;
						this.errMsg = result["err"];
						return;
					} else {
						this.errMsg = "";
						this.looking = false;
						this.targetEmployee = null;
						this.singleEmployee = result['emp'];
						//avatar-based gender
						/*if (this.targetEmployee.gender == 'female') {
							this.img = this.femaleAvatar;
					  } else {
							this.img = this.maleAvatar;
					  }*/
					}
				});
			} else if (option == 'Gender') {
				// Search by gender
				let gender = this.fieldValue.value;
				this.empService.searchByGender(gender).subscribe(result => {
					if (result["err"]) {
						this.targetEmployee = null;
						this.singleEmployee = null;
						this.looking = false;
						this.errMsg = result["err"];
						return;
					} else {
						this.looking = false;
						this.errMsg = null;
						this.singleEmployee = null;
						this.targetEmployee = result['emp'];
					}
				})
			} else if (option == 'Job Title') {
				// Search by job title
				let jobTitle = this.fieldValue.value;
				this.empService.searchByJobTitle(jobTitle).subscribe(result => {
					if (result["err"]) {
						this.targetEmployee = null;
						this.singleEmployee = null;
						this.looking = false;
						this.errMsg = result["err"];
						return;
					} else {
						this.looking = false;
						this.errMsg = null;
						this.singleEmployee = null;
						this.targetEmployee = result['emp'];
					}
				})
			} else if (option == 'Country') {
				// Search by country
				let country = this.fieldValue.value;
				this.empService.searchByCountry(country).subscribe(result => {
					if (result["err"]) {
						this.targetEmployee = null;
						this.singleEmployee = null;
						this.looking = false;
						this.errMsg = result["err"];
						return;
					} else {
						this.looking = false;
						this.errMsg = null;
						this.singleEmployee = null;
						this.targetEmployee = result['emp'];
					}
				})
			} else if (option == 'City') {
				// Search by city
				let city = this.fieldValue.value;
				this.empService.searchByCity(city).subscribe(result => {
					if (result["err"]) {
						this.targetEmployee = null;
						this.singleEmployee = null;
						this.looking = false;
						this.errMsg = result["err"];
						return;
					} else {
						this.looking = false;
						this.errMsg = null;
						this.singleEmployee = null;
						this.targetEmployee = result['emp'];
					}
				})
			} else if (option == 'Department') {
				// Search by department
				let department = this.fieldValue.value;
				this.empService.searchByDepartment(department).subscribe(result => {
					if (result["err"]) {
						this.targetEmployee = null;
						this.singleEmployee = null;
						this.looking = false;
						this.errMsg = result["err"];
						return;
					} else {
						this.looking = false;
						this.errMsg = null;
						this.singleEmployee = null;
						this.targetEmployee = result['emp'];
					}
				})
			} else if (option == 'University') {
				// Search by university
				let university = this.fieldValue.value;
				this.empService.searchByUniversity(university).subscribe(result => {
					if (result["err"]) {
						this.targetEmployee = null;
						this.singleEmployee = null;
						this.looking = false;
						this.errMsg = result["err"];
						return;
					} else {
						this.looking = false;
						this.errMsg = null;
						this.singleEmployee = null;
						this.targetEmployee = result['emp'];
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
