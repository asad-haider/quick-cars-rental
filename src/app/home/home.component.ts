import {AfterViewInit, Component, OnInit} from '@angular/core';
import {initClientSaysSlider, initAreaSlider, initRentCarSlider} from '../../assets/js/sliders';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    initClientSaysSlider();
    initAreaSlider();
    initRentCarSlider();
  }

  constructor() {
  }

  ngOnInit() {
  }
}
