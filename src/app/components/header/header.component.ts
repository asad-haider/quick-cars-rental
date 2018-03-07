import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public pageTitle: String;

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) {
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
      });

  }

}
