import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

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

  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this._authService.login(this.loginPayload);
  }
}
