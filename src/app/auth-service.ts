import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    loggedIn:boolean = false;

    constructor(){}

    isAuthenticated():boolean{
        this.login();
        return true;
    }

    login(){
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }
}
