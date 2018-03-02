import {AfterViewInit, Component, OnInit} from '@angular/core';
import {initClientSaysSlider} from '../../../assets/js/sliders';
import {CategoryService} from '../../services/category.service';
import {BrandService} from '../../services/brand.service';
import {ListingService} from '../../services/listing.service';
import {IPaginateResponse} from '../../interfaces/IPaginateResponse';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit, AfterViewInit {

  public categories;
  public brands;
  public listingResponse: IPaginateResponse = {
    data: [],
    next_page_url: null,
    prev_page_url: null,
    current_page: 1,
    from: 0,
    last_page: 0,
    per_page: 0,
    path: null,
    total: 0,
    to: 0,
  };

  constructor(private _categoryService: CategoryService, private _brandService: BrandService, private _listingService: ListingService) {
  }

  ngOnInit() {
    this.getCategories();
    this.getBrands();
    this.getListings();
  }

  ngAfterViewInit(): void {
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
        err => console.error(err),
      );
  }

  getListings() {
    this._listingService.getListings()
      .subscribe(
        data => {
          this.listingResponse = data.Result;
          console.log(this.listingResponse);
        },
        err => console.error(err),
      );
  }

  prevPage() {
    this._listingService.getListingsAtUrl(this.listingResponse.prev_page_url)
      .subscribe(
        data => {
          this.listingResponse = data.Result;
        },
        err => console.error(err),
      );
  }

  nextPage() {
    this._listingService.getListingsAtUrl(this.listingResponse.next_page_url)
      .subscribe(
        data => {
          this.listingResponse = data.Result;
        },
        err => console.error(err),
      );
  }
}
