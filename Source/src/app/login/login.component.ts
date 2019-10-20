import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  mobileNumber: any;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public toasterCtrl: ToastController) { }

  ngOnInit() { }

  signupClick(args) {
    this.navCtrl.navigateForward("/signup");
  }

  loginClick(args) {
    if (this.mobileNumber != null && this.mobileNumber != "") {
      if (this.mobileValidation(this.mobileNumber))
        this.navCtrl.navigateForward("/otp");
      else
        this.presentToast("Invalid Mobile Number");
    }
    else
      this.presentToast("Please enter mobile number");
  }

  mobileValidation(number): any {
    var pattern = /^([0|\+[0-9]{1,5})?([7-9][0-9]{7,9})$/;
    if (pattern.test(number))
      return true;
    else
      return false;

  }

  async presentAlert(content) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: content,
      buttons: ['OK'],
      cssClass: 'alert-style'
    });

    await alert.present();
  }

  async presentToast(content) {
    const toast = await this.toasterCtrl.create({
      message: content,
      duration: 500,
      cssClass: 'toast-content-10'
      
    });
    toast.present();
  }

}
