import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IResponse} from '../interfaces/IResponse';
import {Constants} from '../constants';
import {map} from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(payload) {
    return this.http.post<IResponse<any>>(`${Constants.BASE_API_URL}/login`, payload)
      .pipe(map(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userData', JSON.stringify(data.Result.user));
      }));
  }

  logout() {
    return this.http.post<IResponse<any>>(`${Constants.BASE_API_URL}/logout`, {}, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).pipe(map(data => {
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
    }));
  }

  loggedIn() {
    return tokenNotExpired();
  }
}
