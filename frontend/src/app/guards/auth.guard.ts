import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AccountService} from '../services/account.service';

@Injectable({
	providedIn: 'root'
})

export class AuthGuard implements CanActivate {

	constructor(private accountSrvc:AccountService, private router:Router){}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean {
			if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
				localStorage.clear();
				this.router.navigate(['/signin']);
				return false;
			}else{
				return true;
			}
	}
}
