import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token= "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJEZXZzLlBhbm9yYU1peEBob3RtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTcwMjAyOTI3Mn0.A4FbQ3pbZb7GmvuPAK6_f6iupEqxlX_5W9Jjr486SN5A00iwQBBkm4ajK4U8Z23lsKAivmIOIpnmVe7YAsGNrw";


    if(token && token !=='') {

      let requestClone = request.clone({setHeaders : {
        'Authorization' : `Bearer ${token}`
      }});
      return next.handle(requestClone);
    }
    return next.handle(request);
  }
}
