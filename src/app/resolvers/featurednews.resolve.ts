import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {INews} from '../interfaces/INews';
import {NewsService} from '../services/news.service';

@Injectable()
export class FeaturedNewsResolve implements Resolve<INews[]> {

  constructor(private _newsService: NewsService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this._newsService.getFeaturedNews().toPromise().then(value => value.Result);
  }

}
