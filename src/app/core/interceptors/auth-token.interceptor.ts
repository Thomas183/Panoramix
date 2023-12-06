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
    let token= "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJEZXZzLlBhbm9yYU1peEBob3RtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTcwMTg4MjkzM30.PT0hI9PYbYXSflSQD6HAeSgyD5sUtrsNM9kWUmzq9R_uDaTULQN1YA29BJk-4nBAmSedHjnuIpQylSQYpWiDnQ";


    if(token && token !=='') {

      let requestClone = request.clone({setHeaders : {
        'Authorization' : `Bearer ${token}`
      }});
      return next.handle(requestClone);
    }
    return next.handle(request);
  }
}
