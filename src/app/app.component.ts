import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'emp-crud';
	signinForm: FormGroup


  	constructor(private http:HttpClient){
  	}



}
