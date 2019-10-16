import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verfication',
  templateUrl: './verfication.component.html',
  styleUrls: ['./verfication.component.scss'],
})
export class VerficationComponent implements OnInit {
  ShowOrderStatus: boolean = false
  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params.key) {
        if (JSON.parse(params.key) == "Summary")
          this.ShowOrderStatus = true;
        else
          this.ShowOrderStatus = false;
      }
    });
  }

  ngOnInit() { }

  StartOrder() {
    this.navCtrl.navigateForward('/order');
  }

  CurrentOrder(args) {
    this.navCtrl.navigateForward('/history');
  }

  viewAccount(args) {
    this.navCtrl.navigateForward('account');
  }

}
