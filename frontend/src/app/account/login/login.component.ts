import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

import { Iuser } from '../../models/iuser';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public signinForm: FormGroup = new FormGroup({
        email: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(8),
                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
            ],
            updateOn: "blur"
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)],
            updateOn: "blur"
        }),
    })
    private currentUser: boolean
    protected message: string


    constructor(private fb: FormBuilder, private accountSrvc: AccountService, private router: Router) {
        this.currentUser = false
        this.message = ''
    }

    ngOnInit() {
        this.signinForm = new FormGroup({
            email: new FormControl('', {
                validators: [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
                ],
                updateOn: "blur"
            }),
            password: new FormControl('', {
                validators: [Validators.required, Validators.minLength(6)],
                updateOn: "blur"
            }),
        })
    }

    // Getters
    get f() {
        return this.signinForm.controls
    }

    get email() {
        return this.signinForm.get('email');
    }

    get password() {
        return this.signinForm.get('password');
    }

    // Login button handler
    login() {
        let user: Iuser = {
            email: this.signinForm.value.email,
            password: this.signinForm.value.password
        }

        // Logging user in
        this.accountSrvc.loginUser(user).subscribe(
            (data: any) => {

                // Login successfully
                localStorage.setItem('token', data['token']);
                localStorage.setItem('email', user.email);
                // localStorage.setItem('role', data['role']);
                localStorage.setItem('role', data['role']);


                // Redirect
                if (data['role'] == 'admin') {
                    this.router.navigate(['/admin/dashboard'])
                }else if(data['role'] == 'normal'){
                    this.router.navigate(['/normal/dashboard'])
                }

            },
            (error) => {
                console.log(error)
                this.signinForm.reset();
                this.message = "Wrong email or password";
            }
        )
    }
}
