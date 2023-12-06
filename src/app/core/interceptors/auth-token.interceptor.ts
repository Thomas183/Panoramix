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
    let token= "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdW…cRSumSIY8R6rKtdHOKqq1z0A1LtV_Ith0XcjkyvkWlVvTWimA";


    if(token && token !=='') {

      let requestClone = request.clone({setHeaders : {
        'Authorization' : `Bearer ${token}`
      }});
      return next.handle(requestClone);
    }
    return next.handle(request);
  }
}
