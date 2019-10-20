import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {

  status : boolean = true;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  changeTab(args){
    this.status = !this.status;
  }

  viewAccount(args){
    this.navCtrl.navigateForward('account');
  }

}
