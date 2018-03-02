import {AfterViewInit, Component, OnInit} from '@angular/core';
import {initClientSaysSlider, initAreaSlider, initRentCarSlider} from '../../../assets/js/sliders';
import {BrandService} from '../../services/brand.service';
import {TypeService} from '../../services/type.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public brands;
  public types;

  constructor(private _brandService: BrandService, private _typeService: TypeService) {
  }

  ngOnInit() {
    this.getBrands();
    this.getTypes();
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

  getTypes() {
    this._typeService.getAllTypes()
      .subscribe(
        data => {
          this.types = data.Result;
        },
        err => console.error(err),
      );
  }


  ngAfterViewInit(): void {

    initClientSaysSlider();
    initAreaSlider();
    initRentCarSlider();
  }
}
