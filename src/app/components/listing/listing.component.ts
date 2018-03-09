import {AfterViewInit, Component, OnInit} from '@angular/core';
import {initClientSaysSlider, init, initReturnToTop} from '../../../assets/js/sliders';
import {CategoryService} from '../../services/category.service';
import {BrandService} from '../../services/brand.service';
import {ListingService} from '../../services/listing.service';
import {IPaginateResponse} from '../../interfaces/IPaginateResponse';
import {Constants} from '../../constants';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit, AfterViewInit {

  public categories;
  public brands;
  public BASE_URL = Constants.BASE_URL;
  public listingResponse: IPaginateResponse<IListing.ListingItem[]>;
  public filter = {
    category_id: null,
    brand_id: null
  };

  constructor(private _categoryService: CategoryService, private _brandService: BrandService, private _listingService: ListingService) {
  }

  ngOnInit() {
    this.getCategories();
    this.getBrands();
    this.getListings();
  }

  ngAfterViewInit(): void {
    init();
    initReturnToTop();
    initClientSaysSlider();
  }

  getCategories() {
    this._categoryService.getAllCategories()
      .subscribe(
        data => {
          this.categories = data.Result;
        },
        err => console.error(err),
      );
  }

  getBrands() {
    this._brandService.getAllBrands()
      .subscribe(
        data => {
          this.brands = data.Result;
        },
        err => console.error(err)
      );
  }

  getListings() {
    this._listingService.getListings(this.filter)
      .subscribe(
        data => {
          this.listingResponse = data.Result;
        },
        err => console.error(err)
      );
  }

  getListingsByPageNumber(url: string, pageNumber: number) {
    this._listingService.getListingsAtUrl(`${url}?page=${pageNumber}`, this.filter)
      .subscribe(
        data => {
          this.listingResponse = data.Result;
        },
        err => console.error(err)
      );
  }
}
