import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth-service';

@Injectable({
	providedIn: 'root'
})

export class AuthGuard implements CanActivate {

	constructor(private authService:AuthService, private router:Router){}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean {
			console.log('AuthGiard#canActivate');
			if(this.authService.loggedIn){
				return true;
			}
			else{
				console.log('false');
				return false;
			};
	}
}