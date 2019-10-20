import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {

  showPromoBox: boolean = false;;
  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  showPromo(args) {
    this.showPromoBox = !this.showPromoBox;;
  }

  AddCount(element, canAdd) {
    if (element != undefined && element != null) {
      if (canAdd)
        element.value = +(element.value) + 1;
      else
        element.value = +(element.value) - 1;
    }
  }

  Paynow(args) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        key: JSON.stringify('Summary'),
      }
    };
    this.navCtrl.navigateForward('/verification', navigationExtras);
  }

  viewAccount(args) {
    this.navCtrl.navigateForward('account');
  }



}
