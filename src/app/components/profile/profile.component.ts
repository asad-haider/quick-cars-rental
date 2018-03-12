import {AfterViewInit, Component, OnInit} from '@angular/core';
import {initTabs} from '../../../assets/js/sliders';
import {IUser} from '../../interfaces/IUser';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  public userData: IUser;

  constructor(private _authService: AuthService, private _router: Router) {
    if (_authService.isAuthenticated() && _authService.getUserInfo() != null) {
      this.userData = _authService.getUserInfo();
    } else {
      this._router.navigate(['']);
    }
  }

  ngOnInit() {
  }

  updateProfile() {
    this.userData.name = this.userData.fname + ' ' + this.userData.lname;
    this._authService.updateProfile(this.userData).subscribe(res => {
      this._authService.setUserData(res.Result.user);
    });
  }

  ngAfterViewInit(): void {
    initTabs();
  }
}
