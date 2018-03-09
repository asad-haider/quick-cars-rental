import {AfterViewInit, Component, OnInit} from '@angular/core';
import {initClientSaysSlider, initAreaSlider, initRentCarSlider} from '../../../assets/js/sliders';
import {BrandService} from '../../services/brand.service';
import {TypeService} from '../../services/type.service';
import {SubscriptionService} from '../../services/subscription.service';
import {DataService} from '../../services/DataService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public brands;
  public types;
  public emailAddress;

  constructor(private _brandService: BrandService, private _typeService: TypeService, private _subscriptionService: SubscriptionService,
              private _dataService: DataService) {
  }

  ngOnInit() {
    this.getBrands();
    this.getTypes();
  }

  getBrands() {
    this._brandService.getAllBrands()
      .subscribe(
        data => {
          this._dataService.updateBrands(data.Result);
        },
        err => console.error(err),
      );
  }

  getTypes() {
    this._typeService.getAllTypes()
      .subscribe(
        data => {
          this._dataService.updateTypes(data.Result);
        },
        err => console.error(err),
      );
  }

  subscribeToNewsLetter() {
    this._subscriptionService.subscribeToNewsLetter(this.emailAddress).subscribe(
      data => {
        // this.types = data.Result;
        console.log(data.Message);
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
