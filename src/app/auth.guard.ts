import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './services/login.service';

@Injectable({
	providedIn: 'root'
})

export class AuthGuard implements CanActivate {

	constructor(private loginService:LoginService, private router:Router){}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean {
			if(localStorage.getItem('token') != null){
				console.log('access granted');
				return true;
			}else{
				return false;
			}
	}
}
