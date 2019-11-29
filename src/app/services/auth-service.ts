import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    loggedIn:boolean = false;
    userEmail:string = null;
    token:string = null;
    status:string = null

    constructor(private httpClient:HttpClient, private router:Router){}

    isAuthenticated():boolean{
        return this.loggedIn;
    }

    //log user in
    login(user){
        this.httpClient.post('http://localhost:8080/user/signin', user).subscribe(res => {
            if(res == false){
                console.log('wrong email or password');
                this.loggedIn = false;
                return;
            }else{
                //reading json reposne
                this.loggedIn = true;
                this.token = res['token'];
                this.userEmail = res['email'];
                localStorage.setItem('user', this.userEmail);
                localStorage.setItem('secret', this.token);
                this.router.navigate(['/admin'])
                return;
            }
		}, err => {
            console.log(err);
            return;
		});
    }

    signup(user){
        return this.httpClient.post('http://localhost:8080/user/signup', user).subscribe(res => {
            if(res == false){
                console.log('failed to signup');
                this.status = 'Failed to create user';
            }else{
            }
        }, err => {
            console.log(err);
        })
    }

    //log user out
    logout(){
        this.loggedIn = false;
    }
}
