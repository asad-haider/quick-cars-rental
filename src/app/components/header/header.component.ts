import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';
import {IUser} from '../../interfaces/IUser';
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

  constructor(private _activatedRoute: ActivatedRoute, public _router: Router, private _authService: AuthService,
              private _dataService: DataService) {
  }

  ngOnInit() {
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
      });
  }

  logout() {
    this._authService.logout().subscribe(res => {
      this.isLoggedIn = this._authService.isAuthenticated();
    });
  }
}
