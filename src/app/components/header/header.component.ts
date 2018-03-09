import {AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';
import {IUser} from '../../interfaces/IUser';
import {FormControl} from '@angular/forms';
import {MapsAPILoader} from '@agm/core';
import {DataService} from '../../services/DataService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public pageTitle: String;
  public isLoggedIn: boolean;
  public userData: IUser;

  public latitude: number;
  public longitude: number;

  public pickupLatitude: number;
  public pickupLongitude: number;
  public dropOfLatitude: number;
  public dropOfLongitude: number;
  public zoom: number;

  public types;
  public brands;

  @ViewChild('pickupAddress')
  public pickupAddress: ElementRef;

  @ViewChild('dropOfAddress')
  public dropOfAddress: ElementRef;

  constructor(private _activatedRoute: ActivatedRoute, public _router: Router, private _authService: AuthService,
              private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private _dataService: DataService) {
  }

  ngOnInit() {

    this._dataService.types.subscribe(value => this.types = value);
    this._dataService.brands.subscribe(value => this.brands = value);

    this._router
      .events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => {
        let child = this._activatedRoute.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          } else {
            return null;
          }
        }
        return null;
      }))
      .subscribe((title: any) => {
        this.pageTitle = title;
        this.isLoggedIn = this._authService.isAuthenticated();
        this.userData = this._authService.getUserInfo();

        if (this._router.url === '/') {
          console.log(this._router.url);
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

  logout() {
    this._authService.logout().subscribe(res => {
      this.isLoggedIn = this._authService.isAuthenticated();
    });
  }
}
