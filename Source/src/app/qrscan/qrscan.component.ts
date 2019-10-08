import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
 
@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.component.html',
  styleUrls: ['./qrscan.component.scss'],
})
export class QRScanComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  StartScan(args){
    this.navCtrl.navigateForward('/verification');
  }
}
