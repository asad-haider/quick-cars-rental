import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';
import {IUser} from '../../interfaces/IUser';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() isLoggedIn: boolean;
  @Input() userData: IUser;
  @Output() logoutEvent = new EventEmitter();

  constructor(public _router: Router) {
  }

  ngOnInit() {

  }

  logout() {
    this.logoutEvent.emit();
  }
}
