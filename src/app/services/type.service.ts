import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constants';
import {IResponse} from '../interfaces/IResponse';

@Injectable()
export class TypeService {

  constructor(private http: HttpClient) {
  }

  getAllTypes() {
    return this.http.get<IResponse<any>>(`${Constants.BASE_API_URL}/types`);
  }

}
