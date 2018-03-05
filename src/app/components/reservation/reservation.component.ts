import {AfterViewInit, Component, OnInit} from '@angular/core';
import {initTabs} from '../../../assets/js/sliders';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    initTabs();
  }

}
