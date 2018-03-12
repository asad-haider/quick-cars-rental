import {AfterViewInit, Component, ElementRef, Input, NgZone, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {initClientSaysSlider, initAreaSlider, initRentCarSlider} from '../../../assets/js/sliders';
import {BrandService} from '../../services/brand.service';
import {TypeService} from '../../services/type.service';
import {DataService} from '../../services/data.service';
import {MapsAPILoader} from '@agm/core';
import {ListingService} from '../../services/listing.service';
import {Constants} from '../../constants';
import {ActivatedRoute, Router} from '@angular/router';
import {INews} from '../../interfaces/INews';
import {IUser} from '../../interfaces/IUser';
import {AuthService} from '../../services/auth.service';
import {} from '@types/googlemaps';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public brands;
  public types;

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

  public BASE_URL = Constants.BASE_URL;

  featuredListings: IListing.ListingItem[];
  featuredNews: INews[];

  public isLoggedIn: boolean;
  public userData: IUser;

  public reservation: any = {};

  constructor(private _brandService: BrandService, private _typeService: TypeService,
              private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private _dataService: DataService,
              private _listingService: ListingService, private _route: ActivatedRoute,
              private _authService: AuthService, private _router: Router, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.getBrands();
    this.getTypes();
    this.setCurrentPosition();
    this.loadMap();
    this._dataService.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    this._dataService.userData.subscribe(userData => this.userData = userData);

    this._route.data
      .subscribe((data: { featuredListings: IListing.ListingItem[] }) => {
        this.featuredListings = data.featuredListings;
      });

    this._route.data
      .subscribe((data: { featuredNews: INews[] }) => {
        this.featuredNews = data.featuredNews;
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

  loadMap() {
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

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
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

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();

          this.zoom = 12;
        });
      });
    });
  }

  logout() {
    this._authService.logout().subscribe(res => {
      this.toastr.success(res.Message, 'Success');
      this.isLoggedIn = this._authService.isAuthenticated();
      this.userData = this._authService.getUserInfo();
      this._dataService.updateIsLoggedIn(this.isLoggedIn);
      this._dataService.updateUserData(this.userData);
      this._router.navigate(['']);
    }, err => {
      this.toastr.error(err.error.Message, 'Error');
    });
  }

  ngAfterViewInit(): void {
    initClientSaysSlider();
    initAreaSlider();
    initRentCarSlider();
  }
}
