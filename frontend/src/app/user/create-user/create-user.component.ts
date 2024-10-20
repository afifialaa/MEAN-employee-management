import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { RoleService } from '../../services/role.service'
import { Iuser } from '../../models/iuser'
import { UserService } from '../../services/user.service'

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

    roles: any[]
    errMsg: string = ''
    msg: string = ''

    createUserForm: FormGroup

    constructor(private roleService: RoleService, private userService: UserService) {
        this.roles = this.roleService.roles

        this.createUserForm = new FormGroup({
            email: new FormControl(''),
            role: new FormControl(''),
            password: new FormControl(''),
            confirmPassword: new FormControl('')
        })
    }


    ngOnInit() {

    }

    /* Confirm passwords */
    confirmPasswords(pass1: string, pass2: string) {
        if (pass1 === pass2) {
            return true
        } else {
            return false
        }
    }

    createUser() {
        let pass1: string = this.createUserForm.value.password;
        let pass2: string = this.createUserForm.value.confirmPassword;
        let match: boolean = this.confirmPasswords(pass1, pass2);
        if (!match) {
            return;
        }

        let user: Iuser = {
            email: this.createUserForm.value.email,
            password: this.createUserForm.value.password,
            role: this.createUserForm.value.role,
        }
        this.userService.create(user).subscribe(
            (data: any) => {
                this.errMsg = '';
                this.msg = data['msg'];
                this.createUserForm.reset();
            },
            error => {
                this.msg = ''
                this.errMsg = error.error['msg']
                this.createUserForm.reset();
            }
        )
    }

}
