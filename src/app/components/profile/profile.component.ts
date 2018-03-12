import {AfterViewInit, Component, OnInit, ViewContainerRef} from '@angular/core';
import {initTabs} from '../../../assets/js/sliders';
import {IUser} from '../../interfaces/IUser';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  public userData: IUser;

  public changePasswordPayload = {
    old_password: null,
    password: null,
    password_confirmation: null
  };

  constructor(private _authService: AuthService, private _router: Router, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
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
      this.toastr.success(res.Message, 'Success');
    }, err => {
      this.toastr.error(err.error.Message, 'Error');
    });
  }

  changePassword() {
    this.userData.name = this.userData.fname + ' ' + this.userData.lname;
    this._authService.changePassword(this.changePasswordPayload).subscribe(res => {
      this.toastr.success(res.Message, 'Success');
    }, err => {
      this.toastr.error(err.error.Message, 'Error');
    });
  }

  ngAfterViewInit(): void {
    initTabs();
  }
}
