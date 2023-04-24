import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UserService} from '../../services/user.service'

@Component({
	selector: 'app-search-user',
	templateUrl: './search-user.component.html',
	styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

	searchUserForm: FormGroup

	targetUser:any
	isUserFound: boolean = false

	constructor(private userSrvc: UserService) { 
	}

	ngOnInit() {
		this.searchUserForm = new FormGroup({
			email: new FormControl('')
		})
	}

	searchUser(){
		let email: string = this.searchUserForm.value.email

		this.userSrvc.searchByEmail(email).subscribe(
			data => {
				this.isUserFound = true
				this.targetUser = data['user']
				console.log(data['user'])
			},
			error => {
				console.log(error)
			}
		)


	}

}
