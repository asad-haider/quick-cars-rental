import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public loginPayload = {
    email: null,
    password: null
  };

  public registerPayload = {
    fname: null,
    lname: null,
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
    agreeTermAndConditions: false
  };

  constructor(private _authService: AuthService, private _router: Router, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    if (_authService.isAuthenticated()) {
      this._router.navigate(['']);
    }
  }

  ngOnInit() {
  }

  login() {
    this._authService.login(this.loginPayload).subscribe(res => {
      this.toastr.success(res.Message, 'Success');
      this._router.navigate(['']);
    }, err => {
      this.toastr.error(err.error.Message, 'Error');
    });
  }

  register() {
    this.registerPayload.name = this.registerPayload.fname + ' ' + this.registerPayload.lname;
    this._authService.register(this.registerPayload).subscribe(res => {
      this.toastr.success(res.Message, 'Success');
      this._router.navigate(['']);
    }, err => {
      this.toastr.error(err.error.Message, 'Error');
    });
  }
}
