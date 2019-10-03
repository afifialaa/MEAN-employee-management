import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    loggedIn:boolean = false;
    userEmail:string = null;

    constructor(private httpClient:HttpClient, private router:Router){}

    isAuthenticated():boolean{
        return true;
    }

    //log user in
    login(user){
        this.httpClient.post('http://localhost:8080/user/signin', user).subscribe(res => {
            if(res == false){
                console.log('wrong email or password');
                this.loggedIn = false;
                return;
            }else{
                console.log(res['token']);
                this.loggedIn = true;
                this.userEmail = res['email'];
                this.router.navigate(['/admin'])
                return;
            }
		}, err => {
            console.log(err);
            return;
		});
    }

    //log user out
    logout(){
        this.loggedIn = false;
    }
}
