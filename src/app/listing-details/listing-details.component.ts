import {AfterViewInit, Component, OnInit} from '@angular/core';
import {initDetailListSlider} from '../../assets/js/sliders';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    initDetailListSlider();
  }
  constructor() {
  }

  ngOnInit() {
  }

}
