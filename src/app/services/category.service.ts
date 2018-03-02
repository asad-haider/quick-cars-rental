import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constants';
import {IResponse} from '../interfaces/IResponse';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAllCategories() {
    return this.http.get<IResponse<any>>(`${Constants.BASE_URL}/categories`);
  }

}
