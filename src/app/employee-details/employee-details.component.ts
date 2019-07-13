import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  employee;

  constructor(private route: ActivatedRoute, private router:Router, private empService: EmployeeService) {
   }

  ngOnInit() {
    //get email
    let email = this.route.snapshot.paramMap.get('email');
    //get employee 
    this.empService.searchByEmail(email).subscribe((result) => {
      this.employee = result;
    }), error => {
      console.log('something went horribly wrong');
      console.log(error);
    }
  }

}
