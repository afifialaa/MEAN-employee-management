import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';

@Component({
	selector: 'app-search-employee',
	templateUrl: './search-employee.component.html',
	styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

	errMsg:string;
	singleEmployee: any;

	fields = ['First Name', 'Last Name', 'Email', 'Gender', 'Job Title'];
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

	//search button handler
	searchEmployee() {
		console.log('button was pressed');

		if (this.searchEmployeeForm.valid == true) {
			//logging search option
			let option = this.searchEmployeeForm.value.field;

			//seach by email
			if (option == 'Email') {
				let email = this.empEmail.value;
				this.empService.searchByEmail(email).subscribe(result => {
					  if (result["msg"]){
						    this.targetEmployee = null;
						    this.errMsg = result["msg"];
						    return;
					  }else{
						    this.errMsg = "";
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
			}else if(option == 'Gender'){
				let gender = this.empEmail.value;
				this.empService.searchByGender(gender).subscribe(result => {
					if (result["mgs"]){
						this.targetEmployee = null;
						this.errMsg = result["msg"];
						return;
					}else{
						console.log(result);
						this.errMsg = null;
						this.targetEmployee = result;
					}
				})
			}else if(option == 'First Name'){
				let firstName = this.empEmail.value;
				this.empService.searchByFirstName(firstName).subscribe(result => {
					if (result["mgs"]){
						this.targetEmployee = null;
						this.errMsg = result["msg"];
						return;
					}else{
						console.log(result);
						this.errMsg = null;
						this.targetEmployee = result;
					}
				})
			}else if(option == 'Last Name'){
				let lastName = this.empEmail.value;
				this.empService.searchByLastName(lastName).subscribe(result => {
					if (result["mgs"]){
						this.targetEmployee = null;
						this.errMsg = result["msg"];
						return;
					}else{
						console.log(result);
						this.errMsg = null;
						this.targetEmployee = result;
					}
				})
			}

		} else {
			return;
		}
	}

	viewProfile(email: string) {
		console.log('details button was pressed');
		this.router.navigate(['/admin/employee-details', email]);
	}
}
