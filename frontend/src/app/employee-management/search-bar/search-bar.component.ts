import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

    searchForm: FormGroup;
    errMsg: string;

    constructor(private empSrvc:EmployeeService, private router:Router) { 
        this.searchForm = new FormGroup({
            email: new FormControl('')
        })
    }

    ngOnInit() {
    }

    search(){
        let email:string = this.searchForm.value.email;
        this.empSrvc.readEmployee(email).subscribe( data => {
            this.router.navigate(['/admin/employee/employee-details', { email: email }]);
        },
        error => {
            this.errMsg = 'Employee not found';
        })
    }

}
