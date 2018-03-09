import {Component, OnInit} from '@angular/core';
import {SubscriptionService} from '../../services/subscription.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  public emailAddress;

  constructor(private _subscriptionService: SubscriptionService) {
  }

  ngOnInit() {
  }

  subscribeToNewsLetter() {
    this._subscriptionService.subscribeToNewsLetter(this.emailAddress).subscribe(
      data => {
        // this.types = data.Result;
        console.log(data.Message);
      },
      err => console.error(err),
    );
  }

}
