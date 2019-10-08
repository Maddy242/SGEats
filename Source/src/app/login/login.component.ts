import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  mobileNumber: any;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() { }

  signupClick(args) {
    this.navCtrl.navigateForward("/signup");
  }

  loginClick(args) {
    if (this.mobileValidation(this.mobileNumber))
      this.navCtrl.navigateForward("/otp");
    else
      this.presentAlert("Invalid Mobile Number");
  }

  mobileValidation(number): any {
    var pattern = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    if (pattern.test(number))
      return true;
    else
      return false;

  }

  async presentAlert(content) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: content,
      buttons: ['OK']
    });

    await alert.present();
  }

}
