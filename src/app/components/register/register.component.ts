import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

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
    name: null,
    username: null,
    email: null,
    password: null,
    password_confirmation: null,
    agreeTermAndConditions: false
  };

  constructor(private _authService: AuthService, private _router: Router) {
    if (_authService.isAuthenticated()) {
      this._router.navigate(['']);
    }
  }

  ngOnInit() {
  }

  login() {
    this._authService.login(this.loginPayload).subscribe(res => {
      this._router.navigate(['']);
    });
  }

  register() {
    this._authService.register(this.registerPayload).subscribe(res => {
      this._router.navigate(['']);
    });
  }
}
