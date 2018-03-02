import {AfterViewInit, Component, OnInit} from '@angular/core';
import {initClientSaysSlider} from '../../assets/js/sliders';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    initClientSaysSlider();
  }

  constructor() { }

  ngOnInit() {
  }

}
