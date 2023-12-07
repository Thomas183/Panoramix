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

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token: string | null = localStorage.getItem('apiToken');


    if (token && token !== '') {
      let requestClone = request.clone({
        setHeaders: {
          'Authorization': `${token}`
        }
      });
      return next.handle(requestClone);
    }
    return next.handle(request);
  }
}
