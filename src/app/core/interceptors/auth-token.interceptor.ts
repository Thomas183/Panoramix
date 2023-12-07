import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        let token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJEZXZzLlBhbm9yYU1peEBob3RtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTcwMjA0MzIzMn0.qM1xAk4QJjJLdvdnFxrY56G7LrZ48fNfoDT4CzNNmaq6s3tZSImE0V9TyWAu3QBwC9xIfYgbQzO6lLmo-4mKNw';

        if (token && token !== '') {

            let requestClone = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return next.handle(requestClone);
        }
        return next.handle(request);
    }
}
