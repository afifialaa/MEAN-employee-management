import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { FormGroup, FormControl } from '@angular/forms';

import { Iemployee } from '../../models/iemployee';

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
    newEmpData: Iemployee;

    // Messages
    errMsg: string;
    msg: string;

    constructor(private route: ActivatedRoute, private router: Router, private empService: EmployeeService) {
    }

    ngOnInit() {
        // Form group
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
        
    }


    /**
     * Edit button handler
     */
    editEmployee() {
        this.isShown = true;
        this.editEmployeeForm.enable();
    }


    /**
     * Save button handler
     */
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

    /**
     * 
     * @param {Employee} targetEmp 
     */
    updateEmployee(targetEmp) {
        this.empService.updateEmployee(targetEmp).subscribe((data)=>{
            this.errMsg = '';
            this.msg = 'Employee was updated';
        },
        (error)=>{
            this.msg = '';
            this.errMsg = 'Failed to update employee';

        })
    }

    /**
     * Cancel button handler
     */
    cancelEdit() {

        // Reset form to old data
        this.editEmployeeForm.controls.firstName.setValue(this.oldData.first_name);
        this.editEmployeeForm.controls.lastName.setValue(this.oldData.last_name);
        this.editEmployeeForm.controls.email.setValue(this.oldData.email);
        this.editEmployeeForm.controls.gender.setValue(this.oldData.gender);
        this.editEmployeeForm.controls.phoneNumber.setValue(this.oldData.phone_number);
        this.editEmployeeForm.controls.university.setValue(this.oldData.university);
        this.editEmployeeForm.controls.jobTitle.setValue(this.oldData.job_title);

        this.editEmployeeForm.controls.country.setValue(this.oldData.address.country);
        this.editEmployeeForm.controls.city.setValue(this.oldData.address.city);
        this.editEmployeeForm.controls.street.setValue(this.oldData.address.street_address);

        this.editEmployeeForm.controls.hiringDate.setValue(this.oldData.contract.hiringDate);
        this.editEmployeeForm.controls.terminatingDate.setValue(this.oldData.contract.terminatingDate);
        this.editEmployeeForm.controls.bank.setValue(this.oldData.contract.bank);
        this.editEmployeeForm.controls.bankAccount.setValue(this.oldData.contract.bankAccount);
        this.editEmployeeForm.controls.salary.setValue(this.oldData.contract.salary);

        this.editEmployeeForm.disable();
        this.isShown = false;
    }

    /**
     * Delete button handler
     */
    deleteEmployee() {
        let employee = this.employee;
        this.empService.deleteEmployee(employee).subscribe(
            data => {
                this.errMsg = '';
                this.msg = 'Employee was deleted';

            },
            error => {
                this.msg = '';
                if(error.status == 429){
                    this.errMsg = 'Too many delete requests, try again in a few minutes';
                }else{
                    this.errMsg = 'Failed to delete employee';
                }
            }
        )
    }

}
