import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  fields = ['first name', 'last name', 'id', 'email'];
  searchEmployeeForm:FormGroup;
  field = new FormControl('');
  empEmail = new FormControl('', [Validators.required]);

  constructor(private http:HttpClient, private empService:EmployeeService, private fb:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.searchEmployeeForm = new FormGroup({
      empEmail: this.empEmail
    })
  }

  targetEmployee: any;
  maleAvatar = '../../assets/avatar/maleEmp.png';
  femaleAvatar = '../../assets/avatar/femaleEmp.png';
  img:string;

  //search button handler
  searchEmployee(){

    if(this.searchEmployeeForm.valid == true){
      //logging search option
      let option = this.field.value;

      //seach by email
      if(option == 'email'){
        let email = this.empEmail.value;
        this.empService.searchByEmail(email).subscribe(result => {
          this.targetEmployee = result;
          //avatar-based gender
          if(this.targetEmployee.gender == 'female'){
            this.img = this.femaleAvatar;
          }else{
            this.img = this.maleAvatar;
          }
        })
      }else if(option == 'id'){
        let id = this.empEmail.value;
        this.empService.searchById(id).subscribe(result => {
          if(!result) {
            console.log('nothing found');
            return;
          }
          this.targetEmployee = result;
          //avatar-based gender
          if(this.targetEmployee.gender == 'female'){
            this.img = this.femaleAvatar;
          }else{
            this.img = this.maleAvatar;
          }
        })
      }
      
    }else{
      console.log('invaid search form');
      console.log(this.searchEmployeeForm.valid);
      return;
    }
  }

  viewProfile(email:string){
    console.log('details button was pressed');
    this.router.navigate(['employee-details', email]);
  }
}
