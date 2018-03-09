import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {ListingService} from '../services/listing.service';

@Injectable()
export class FeaturedListingResolve implements Resolve<IListing.ListingItem[]> {

  constructor(private _listingService: ListingService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this._listingService.getFeaturedListings().toPromise().then(value => value.Result);
  }

}
