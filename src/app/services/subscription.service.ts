import { Injectable } from '@angular/core';
import {IResponse} from '../interfaces/IResponse';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../constants';

@Injectable()
export class SubscriptionService {

  constructor(private http: HttpClient) {
  }

  subscribeToNewsLetter(emailAddress) {
    return this.http.post<IResponse<any>>(`${Constants.BASE_API_URL}/subscribe`, {
      email_address: emailAddress
    });
  }

}
