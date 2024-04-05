import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { EmployeeService } from '../../services/employee.service'
import { FormGroup, FormControl } from '@angular/forms'

import { Iemployee } from '../../models/iemployee'

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

    employee: string = ''

    // Employee form
    editEmployeeForm: FormGroup

    isShown: boolean = false
    fetchedData
    newEmpData: Iemployee

    // Messages
    errMsg: string = ''
    msg: string = ''

    constructor(private route: ActivatedRoute, private router: Router, private empService: EmployeeService) {
        this.newEmpData = {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            phoneNumber: '',
            jobTitle: '',
            department: '',
            university: '',
            country: '',
            city: '',
            street: '',
            hiringDate: new Date(0),
            terminatingDate: new Date(0),
            bank: '',
            bankAccount: '',
            salary: 0
        }


        let cachedEmp = localStorage.getItem('cachedEmp')

        // Variable to store fetched data
        this.fetchedData = {
            first_name: '',
            last_name: '',
            email: '',
            gender: '',
            phone_number: '',
            job_title: '',
            country: '',
            department: '',
            university: '',
            address: {
                country: '',
                city: '',
                street: ''
            },
            contract: {
                hiring_date: '',
                terminating_date: '',
                bank: '',
                bank_account: '',
                salary: ''
            }
        }

        if(cachedEmp == null){
            this.router.navigate(['/admin/employee/search'])
        }else{
            this.fetchedData  = JSON.parse(cachedEmp)
        }


        this.editEmployeeForm = new FormGroup({
            firstName: new FormControl(this.fetchedData.first_name),
            lastName: new FormControl(this.fetchedData.last_name),
            email: new FormControl(this.fetchedData.email),
            phoneNumber: new FormControl(this.fetchedData.phone_number),
            gender: new FormControl(this.fetchedData.gender),
            jobTitle: new FormControl(this.fetchedData.job_title),
            department: new FormControl(this.fetchedData.department),
            university: new FormControl(this.fetchedData.university),

            // Address controls
            country: new FormControl(this.fetchedData.address.country),
            city: new FormControl(this.fetchedData.address.city),
            street: new FormControl(this.fetchedData.address.street),

            // Contract controls
            hiringDate: new FormControl(this.fetchedData.contract.hiring_date),
            terminatingDate: new FormControl(this.fetchedData.contract.terminating_date),
            bank: new FormControl(this.fetchedData.contract.bank),
            bankAccount: new FormControl(this.fetchedData.contract.bank_account),
            salary: new FormControl(this.fetchedData.contract.salary)
        })
    }

    ngOnInit() {
        this.editEmployeeForm.disable()
    }


    /**
     * Edit button handler
     */
    editEmployee() {
        this.isShown = true
        this.editEmployeeForm.enable()
    }


    /**
     * Save button handler
     */
    saveBtn() {

        this.isShown = false
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

        this.updateEmployee(this.newEmpData)

    }

    /**
     *
     * @param {Employee} targetEmp
     */
    updateEmployee(targetEmp: Iemployee) {
        this.empService.updateEmployee(targetEmp).subscribe((data)=>{
            this.errMsg = ''
            this.msg = 'Employee was updated'
        },
        (error)=>{
            this.msg = ''
            this.errMsg = 'Failed to update employee'

        })
    }

    /**
     * Cancel button handler
     */
    cancelEdit() {

        // Reset form to old data
        this.editEmployeeForm.controls.firstName.setValue(this.fetchedData.first_name)
        this.editEmployeeForm.controls.lastName.setValue(this.fetchedData.last_name)
        this.editEmployeeForm.controls.email.setValue(this.fetchedData.email)
        this.editEmployeeForm.controls.gender.setValue(this.fetchedData.gender)
        this.editEmployeeForm.controls.phoneNumber.setValue(this.fetchedData.phone_number)
        this.editEmployeeForm.controls.university.setValue(this.fetchedData.university)
        this.editEmployeeForm.controls.jobTitle.setValue(this.fetchedData.job_title)

        this.editEmployeeForm.controls.country.setValue(this.fetchedData.address.country)
        this.editEmployeeForm.controls.city.setValue(this.fetchedData.address.city)
        this.editEmployeeForm.controls.street.setValue(this.fetchedData.address.street)

        this.editEmployeeForm.controls.hiringDate.setValue(this.fetchedData.contract.hiring_date)
        this.editEmployeeForm.controls.terminatingDate.setValue(this.fetchedData.contract.terminating_date)
        this.editEmployeeForm.controls.bank.setValue(this.fetchedData.contract.bank)
        this.editEmployeeForm.controls.bankAccount.setValue(this.fetchedData.contract.bank_account)
        this.editEmployeeForm.controls.salary.setValue(this.fetchedData.contract.salary)

        this.editEmployeeForm.disable()
        this.isShown = false
    }

    /**
     * Delete button handler
     */
    deleteEmployee() {
        console.log('deleting employee')

        let employeeID:string = this.fetchedData._id

        this.empService.deleteEmployee(employeeID).subscribe(
            data => {
                this.errMsg = ''
                this.msg = 'Employee was deleted'

            },
            error => {
                this.msg = ''
                if(error.status == 429){
                    this.errMsg = 'Too many delete requests, try again in a few minutes'
                }else{
                    console.log(error)
                    this.errMsg = 'Failed to delete employee'
                }
            }
        )
    }

}
