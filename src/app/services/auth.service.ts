import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IResponse} from '../interfaces/IResponse';
import {Constants} from '../constants';
import {map} from 'rxjs/operators';
import {tokenNotExpired} from 'angular2-jwt';
import {IUser} from '../interfaces/IUser';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(payload) {
    return this.http.post<IResponse<any>>(`${Constants.BASE_API_URL}/login`, payload)
      .pipe(map(data => {
        this.setToken(data.token);
        this.setUserData(data.Result.user);
      }));
  }

  logout() {
    this.removeToken();
    // return this.http.post<IResponse<any>>(`${Constants.BASE_API_URL}/logout`, {}, {
    //   headers: {
    //     'Auth-Check': ''
    //   }
    // }).pipe(map(data => {
    //   this.removeToken();
    // }));
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public setToken(token) {
    localStorage.setItem('token', token);
  }

  public setUserData(user) {
    localStorage.setItem('userData', JSON.stringify(user));
  }

  public removeToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('userData')) as IUser;
  }

  register(payload) {
    return this.http.post<IResponse<any>>(`${Constants.BASE_API_URL}/register`, payload);
  }

  updateProfile(payload) {
    return this.http.post<IResponse<{ user: IUser }>>(`${Constants.BASE_API_URL}/updateProfile`, payload, {
      headers: {
        'Auth-Check': ''
      }
    });
  }
}
