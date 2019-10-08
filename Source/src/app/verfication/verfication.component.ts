import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-verfication',
  templateUrl: './verfication.component.html',
  styleUrls: ['./verfication.component.scss'],
})
export class VerficationComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  StartOrder(){
    this.navCtrl.navigateForward('/order');
  }

}
