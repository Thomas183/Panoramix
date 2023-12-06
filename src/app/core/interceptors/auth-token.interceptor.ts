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
    let token= "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJEZXZzLlBhbm9yYU1peEBob3RtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTcwMTg4Nzc3OH0.Z6cYV1bt3XIZmKlWlVOutH_CJtKqFOKFCasPq-6uSfC6qSb--vE1MFxbrc5F8D1Hz7lnhcp6qgznR5VI5o7tPA";


    if(token && token !=='') {

      let requestClone = request.clone({setHeaders : {
        'Authorization' : `Bearer ${token}`
      }});
      return next.handle(requestClone);
    }
    return next.handle(request);
  }
}
