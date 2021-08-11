import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

	intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
		const token = localStorage.getItem("token");
		token ? console.log('token was found') : console.log('token was not found');

		const headers = new HttpHeaders().set("Authorization", "Bearer " + token);

		const clone = req.clone({
			headers: headers
		})

    	return next.handle(clone);
  	}


  constructor() { }
}
