import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constants} from '../constants';
import {IResponse} from '../interfaces/IResponse';

@Injectable()
export class BrandService {

  constructor(private http: HttpClient) {
  }

  getAllBrands() {
    return this.http.get<IResponse<any>>(`${Constants.BASE_API_URL}/brands`, {
      headers: {
        'Auth-Check': ''
      },
    });
  }
}
