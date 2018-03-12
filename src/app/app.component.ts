import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {IUser} from './interfaces/IUser';
import {AuthService} from './services/auth.service';
import {DataService} from './services/data.service';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
  ],
})
export class AppComponent implements OnInit {
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _authService: AuthService,
              private _dataService: DataService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  public pageTitle: string;
  public isLoggedIn: boolean;
  public userData: IUser;

  ngOnInit() {
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

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
        this._dataService.updateIsLoggedIn(this.isLoggedIn);
        this._dataService.updateUserData(this.userData);
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
}
