import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HTTP_INTERCEPTORS, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");

    // Adds token to outgoing request
    const headers = new HttpHeaders().set("Authorization", "Bearer " + token);

    const clone = req.clone({
      headers: headers
    })

    return next.handle(clone)
  }
}
