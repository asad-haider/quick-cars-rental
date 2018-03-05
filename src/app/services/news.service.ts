import {Injectable} from '@angular/core';
import {IPaginateResponse} from '../interfaces/IPaginateResponse';
import {IResponse} from '../interfaces/IResponse';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constants';
import {INews} from '../interfaces/INews';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) {
  }

  getNews() {
    return this.http.get<IResponse<IPaginateResponse<INews[]>>>(`${Constants.BASE_API_URL}/news`);
  }

  getNewsAtUrl(url: string) {
    return this.http.get<IResponse<IPaginateResponse<INews[]>>>(url);
  }

  getNewsById(id: number) {
    return this.http.get<IResponse<INews>>(`${Constants.BASE_API_URL}/news/${id}`);
  }
}
