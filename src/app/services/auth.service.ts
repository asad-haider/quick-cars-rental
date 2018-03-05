import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IResponse} from '../interfaces/IResponse';
import {Constants} from '../constants';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(payload) {
    return this.http.post<IResponse<any>>(`${Constants.BASE_API_URL}/login`, payload);
  }

  logout() {
    return this.http.post<IResponse<any>>(`${Constants.BASE_API_URL}/logout`, {}, {
      headers: {
        Authorization: localStorage.getItem('tolen')
      }
    });
  }
}
