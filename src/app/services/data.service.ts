import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {IUser} from '../interfaces/IUser';

@Injectable()
export class DataService {

  private isLoggedInSource = new BehaviorSubject<boolean>(null);
  isLoggedIn = this.isLoggedInSource.asObservable();

  private userDataSource = new BehaviorSubject<IUser>(null);
  userData = this.userDataSource.asObservable();

  constructor() {
  }

  updateIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedInSource.next(isLoggedIn);
  }

  updateUserData(userData: IUser) {
    this.userDataSource.next(userData);
  }
}
