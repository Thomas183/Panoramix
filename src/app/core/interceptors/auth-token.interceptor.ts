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
    let token= "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJEZXZzLlBhbm9yYU1peEBob3RtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTcwMTcxMDc2M30.RJ9vrU_JfFfVOnCfmdbp_b2Rwt1qn73z5Lzl9aJ8oOu3H7Re1-Ho8PYI2__quZ_hPJLkIWhofG4gA5gMo3zuCA";


    if(token && token !=='') {

      let requestClone = request.clone({setHeaders : {
        'Authorization' : `Bearer ${token}`
      }});
      return next.handle(requestClone);
    }
    return next.handle(request);
  }
}
