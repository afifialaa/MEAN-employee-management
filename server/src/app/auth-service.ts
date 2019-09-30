import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    loggedIn:boolean = false;

    constructor(private httpClient:HttpClient, private router:Router){}

    isAuthenticated():boolean{
        return true;
    }

    login(user){
        this.httpClient.post('http://localhost:8080/user/signin', user).subscribe(res => {
            console.log(res['token']);
            this.loggedIn = true;
            this.router.navigate(['/admin']);
		}, err => {
            console.log(err);
            return false;
		});
    }

    logout(){
        this.loggedIn = false;
    }
}
