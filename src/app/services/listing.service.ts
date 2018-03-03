import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Constants} from '../constants';
import {IPaginateResponse} from '../interfaces/IPaginateResponse';
import {IResponse} from '../interfaces/IResponse';

@Injectable()
export class ListingService {

  constructor(private http: HttpClient) {
  }

  getListings(filter?) {
    return this.http.get<IResponse<IPaginateResponse<IListing.ListingItem[]>>>(`${Constants.BASE_API_URL}/listings`, {
      params: filter
    });
  }

  getListingsAtUrl(url: string, filter?) {
    return this.http.get<IResponse<IPaginateResponse<IListing.ListingItem[]>>>(url, {
      params: filter
    });
  }

  getListingById(id: number) {
    return this.http.get<IResponse<IListing.Detail>>(`${Constants.BASE_API_URL}/listing/${id}`);
  }
}
