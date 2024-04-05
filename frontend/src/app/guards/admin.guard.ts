import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AdminGuard {
	constructor(private router: Router) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean {
		if (localStorage.getItem('role') == 'admin') {
            console.log('user is admin')
			return true
		}

		localStorage.clear()
		this.router.navigate(['/account/login'])
		return false

	}

}
