import {AfterViewInit, Component, OnInit} from '@angular/core';
import {initClientSaysSlider} from '../../../assets/js/sliders';
import {CategoryService} from '../../services/category.service';
import {BrandService} from '../../services/brand.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit, AfterViewInit {

  public categories;
  public brands;

  constructor(private _categoryService: CategoryService, private _brandService: BrandService) {
  }

  ngOnInit() {
    this.getCategories();
    this.getBrands();
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
}
