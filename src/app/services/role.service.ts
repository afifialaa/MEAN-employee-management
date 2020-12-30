import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class RoleService {

	constructor() { }

	roles: any[] = [
		'admin',
		'normal',
	]
}
