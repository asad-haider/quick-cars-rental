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
    console.log(this.loginPayload);
    this._authService.login(this.loginPayload)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userData', JSON.stringify(data.Result.user));
        },
        err => console.error(err),
      );
  }

}
