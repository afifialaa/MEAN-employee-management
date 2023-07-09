import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { validateEmail } from '../../shared/validator-email';

// Models & Services
import { CountryService } from '../../services/country.service';
import { JobsService } from '../../services/jobs.service';
import { Iemployee } from '../../models/iemployee';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  createEmployeeForm: FormGroup
  countries: any[]
  jobs: any[]

  errMsg: string = ''
  msg: string = ''

  constructor(private empService: EmployeeService, private fb: FormBuilder, private countryService: CountryService, private jobsService: JobsService) {
    this.createEmployeeForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(11)
      ]),
      gender: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(11)
      ]),
      university: new FormControl(''),
      jobTitle: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      department: new FormControl(''),

      country: new FormControl('', []),
      city: new FormControl(''),
      address: new FormControl('', []),


      hiringDate: new FormControl(''),
      terminatingDate: new FormControl(''),
      bank: new FormControl(''),
      bankAccount: new FormControl(''),
      salary: new FormControl(''),

    })

    // Loads countries list
    this.countries = this.countryService.countries;

    // Loads jobs list
    this.jobs = this.jobsService.jobs;
  }

  ngOnInit() {

  }

  // Getters
  get firstName() {
    return this.createEmployeeForm.get('firstName');
  }
  get lastName() {
    return this.createEmployeeForm.get('lastName');
  }
  get email() {
    return this.createEmployeeForm.get('email');
  }
  get phoneNumber() {
    return this.createEmployeeForm.get('phoneNumber');
  }
  get gender() {
    return this.createEmployeeForm.get('gender');
  }
  get jobTitle() {
    return this.createEmployeeForm.get('jobTitle');
  }

  /**
   * Create button handler
   */
  createEmployee(): void {
    let employee: Iemployee = {
      firstName: this.createEmployeeForm.value.firstName,
      lastName: this.createEmployeeForm.value.lastName,
      email: this.createEmployeeForm.value.email,
      gender: this.createEmployeeForm.value.gender,
      phoneNumber: this.createEmployeeForm.value.phoneNumber,
      university: this.createEmployeeForm.value.university,
      jobTitle: this.createEmployeeForm.value.jobTitle,
      department: this.createEmployeeForm.value.department,

      country: this.createEmployeeForm.value.country,
      city: this.createEmployeeForm.value.city,
      street: this.createEmployeeForm.value.address,

      hiringDate: this.createEmployeeForm.value.hiringDate,
      terminatingDate: this.createEmployeeForm.value.terminatingDate,
      bank: this.createEmployeeForm.value.bank,
      bankAccount: this.createEmployeeForm.value.bankAccount,
      salary: this.createEmployeeForm.value.salary,
    }

    this.empService.createEmployee(employee).subscribe(
      (data) => {
        this.errMsg = ''
        this.msg = 'Employee was created'
        this.createEmployeeForm.reset()
      },
      (error) => {
        this.msg = '';
        if (error.status == 409) {
          this.errMsg = 'Email already exists'
        } else if (error.status == 500) {
          this.errMsg = 'Failed to add employee'
        } else if (error.status == 429) {
          this.errMsg = 'Too many requests'
        }
      }
    )
    // Reset form
    // this.createEmployeeForm.reset();
  }

  updateMsg: string = '';
  status: boolean = false;
}
