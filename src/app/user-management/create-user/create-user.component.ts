import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
	selector: 'app-create-user',
	templateUrl: './create-user.component.html',
	styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
	constructor(private httpClient:HttpClient) { }

	createUserForm:FormGroup;

	ngOnInit() {
		this.createUserForm = new FormGroup({
			email: new FormControl(''),
			password: new FormControl(''),
			confirmPassword: new FormControl('')
		});
	}

	createUser() {

	}


}
