import {AfterViewInit, Component, OnInit} from '@angular/core';
import {initClientSaysSlider, initAreaSlider, initRentCarSlider} from '../../assets/js/sliders';
import {BrandService} from '../brand.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public brands;

  constructor(private _brandService: BrandService) {
  }

  ngOnInit() {
    this._brandService.getAllBrands()
      .subscribe(
      data => {
        console.log(data);
        this.brands = data.Result;
      },
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }

  ngAfterViewInit(): void {

    initClientSaysSlider();
    initAreaSlider();
    initRentCarSlider();
  }
}
