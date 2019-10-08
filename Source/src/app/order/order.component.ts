import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  status: boolean;
  constructor() { }

  ngOnInit() {}

  toggle() {
    this.status = !this.status;
    // if (this.status && this.audio)
    //   this.audio.pause();
    // else {
    //   if (this.wheelSpinning == true && this.audio)
    //     this.audio.play();
    // }
  }



}
