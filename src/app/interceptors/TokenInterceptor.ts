import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../services/auth.service';
import {map} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public _authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.has('Auth-Check')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this._authService.getToken()}`
        },
      });
    }
    return next.handle(request)
      .pipe(map(event => {
        if (event instanceof HttpResponse && request.headers.has('Auth-Check')) {
          if (event.headers.has('Authorization')) {
            this._authService.setToken(event.headers.get('Authorization'));
          }
        }
        return event;
      }));
  }
}
