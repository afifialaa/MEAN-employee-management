import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {

    constructor() { }

	intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
		const token = localStorage.getItem("token");
		token ? console.log('token was found') : console.log('token was not found');

		// Adds token to outgoing request
		const headers = new HttpHeaders().set("Authorization", "Bearer " + token);

		const clone = req.clone({
			headers: headers
		})

    return next.handle(clone)
  }


}
