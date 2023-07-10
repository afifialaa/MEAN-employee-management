import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {AccountService} from '../services/account.service';

@Injectable({
	providedIn: 'root'
})

export class AuthGuard {

	constructor(private accountSrvc:AccountService, private router:Router){}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean {
			if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined || localStorage.getItem('token') == ''){
				localStorage.clear()
				this.router.navigate(['/account/login'])
				return false
			}else{
				return true
			}
	}
}
