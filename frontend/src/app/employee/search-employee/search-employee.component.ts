import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iemployee } from '../../models/iemployee';

@Component({
	selector: 'app-search-employee',
	templateUrl: './search-employee.component.html',
	styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

	errMsg: string = ''
	singleEmployee: any;
	isGenderField:boolean = false

  showAddress: boolean = true

	looking: boolean = false

	fields:string[] = ['First Name', 'Last Name', 'Email', 'Gender', 'Job Title', 'Department', 'Country', 'City', 'Street', 'University'];
	searchEmployeeForm: FormGroup;

	field = new FormControl('');
	fieldValue = new FormControl('', [Validators.required]);

	constructor(private http: HttpClient, private empService: EmployeeService, private fb: FormBuilder, private router: Router) { 
    this.searchEmployeeForm = new FormGroup({
			field: this.field,
			fieldValue: this.fieldValue
		})
  }

	ngOnInit() {
	}

	onFieldChange(field: any){
		if(field === 'Gender'){
			this.isGenderField = true;
		}else{
			this.isGenderField = false;
		}
	}

	targetEmployee: any;
	maleAvatar = '../../assets/avatar/maleEmp.png';
	femaleAvatar = '../../assets/avatar/femaleEmp.png';
	img: string = ''

	// Search button handler
	searchEmployee() {
		this.looking = true;

		if (this.searchEmployeeForm.valid == true) {
			
			let option = this.searchEmployeeForm.value.field;

			let query:any = {}

			if (option == 'First Name') {
				// Search by first name
				query.first_name = this.fieldValue.value
			} else if (option == 'Last Name') {
				// Search by last name
				query.last_name = this.fieldValue.value
			} else if (option == 'Email') {
				// Search by email
				query.email = this.fieldValue.value;
			} else if (option == 'Gender') {
				// Search by gender
				query.gender = this.fieldValue.value
			} else if (option == 'Job Title') {
				// Search by job title
				query.job_title = this.fieldValue.value;
			} else if (option == 'Country') {
				// Search by country
				query.country = this.fieldValue.value;
			} else if (option == 'City') {
				// Search by city
				query.city = this.fieldValue.value;
			} else if (option == 'Department') {
				// Search by department
				query.department = this.fieldValue.value;
			} else if (option == 'University') {
				// Search by university
				query.university = this.fieldValue.value;
			} 

			this.empService.readEmployees(query).subscribe(
				(data: any) => {
					this.looking = false
					this.targetEmployee = data['data']
				},
				error => {
					console.log(error)
				}
			)

		} else {
			return;
		}
	}

	// View profile button handler
	viewProfile(employee: any) {
		// Cache employee in LocalStorage
		localStorage.setItem('cachedEmp', JSON.stringify(employee))

		this.router.navigate(['/admin/employee/employee-details', { email: employee.email }])
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

	firstNameChkbx(event:any) {
		this.showFirstName = event.currentTarget.checked;
	}

	lastNameChkbx(event: any) {
		this.showLastName = event.currentTarget.checked;
	}

	emailChkbx(event: any) {
		this.showEmail = event.currentTarget.checked;
	}

	countryChkbx(event: any) {
		this.showCountry = event.currentTarget.checked;
	}

	cityChkbx(event: any) {
		this.showCity = event.currentTarget.checked;
	}

	phoneNumberChkbx(event: any){
		this.showPhoneNumber = event.currentTarget.checked;
	}

	genderChkbx(event: any) {
		this.showGender = event.currentTarget.checked;
	}

	salaryChkbx(event: any) {
		this.showSalary = event.currentTarget.checked;
	}

	universityChkbx(event: any){
		this.showUniversity = event.currentTarget.checked;
	}

	departmentChkbx(event: any){
		this.showDepartment = event.currentTarget.checked;
	}

	jobTitleChkbx(event: any){
		this.showJobTitle = event.currentTarget.checked;
	}
}
