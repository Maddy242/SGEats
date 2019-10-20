import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular'
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.component.html',
  styleUrls: ['./qrscan.component.scss'],
})
export class QRScanComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  StartScan(args) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        key: JSON.stringify('QrCode'),
      }
    };
    this.navCtrl.navigateForward('/verification', navigationExtras);
  }

  viewAccount(args) {
    this.navCtrl.navigateForward('account');
  }
}
