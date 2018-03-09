import {AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {initClientSaysSlider, initAreaSlider, initRentCarSlider} from '../../../assets/js/sliders';
import {BrandService} from '../../services/brand.service';
import {TypeService} from '../../services/type.service';
import {SubscriptionService} from '../../services/subscription.service';
import {DataService} from '../../services/DataService';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public brands;
  public types;
  public emailAddress;

  public latitude: number;
  public longitude: number;

  public pickupLatitude: number;
  public pickupLongitude: number;
  public dropOfLatitude: number;
  public dropOfLongitude: number;
  public zoom: number;

  @ViewChild('pickupAddress')
  public pickupAddress: ElementRef;

  @ViewChild('dropOfAddress')
  public dropOfAddress: ElementRef;


  constructor(private _brandService: BrandService, private _typeService: TypeService, private _subscriptionService: SubscriptionService,
              private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private _dataService: DataService) {
  }

  ngOnInit() {
    this.getBrands();
    this.getTypes();

    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      const pickupAddressAutocomplete = new google.maps.places.Autocomplete(this.pickupAddress.nativeElement, {
        types: ['address']
      });
      pickupAddressAutocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = pickupAddressAutocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.pickupLatitude = place.geometry.location.lat();
          this.pickupLongitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });

      const dropdownAddressAutocomplete = new google.maps.places.Autocomplete(this.dropOfAddress.nativeElement, {
        types: ['address']
      });
      dropdownAddressAutocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = dropdownAddressAutocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.dropOfLatitude = place.geometry.location.lat();
          this.dropOfLongitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  getBrands() {
    this._brandService.getAllBrands()
      .subscribe(
        data => {
          // this._dataService.updateBrands(data.Result);
          this.brands = data.Result;
        },
        err => console.error(err),
      );
  }

  getTypes() {
    this._typeService.getAllTypes()
      .subscribe(
        data => {
          // this._dataService.updateTypes(data.Result);
          this.types = data.Result;
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
