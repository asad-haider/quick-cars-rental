import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private typeSource = new BehaviorSubject<string>(null);
  types = this.typeSource.asObservable();

  private brandSource = new BehaviorSubject<string>(null);
  brands = this.brandSource.asObservable();

  constructor() {
  }

  updateTypes(types: any) {
    this.typeSource.next(types);
  }

  updateBrands(brands: any) {
    this.brandSource.next(brands);
  }

}
