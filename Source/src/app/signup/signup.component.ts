import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  public name: any;
  public number: any;
  public email: any;
  public height: any;
  constructor(private alertController: AlertController, private navCtrl: NavController, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.height = {
      'height': '100vh'
    }
  }

  signup(args) {
    if (args != null && this.name != null && this.number != null && this.name != "" && this.number != "") {
      if (this.mobileValidation(this.number)) {
        if (this.validateEmail(this.email)) {
          this.loginClick();
        }
        else {
          this.presentToast('Invalid Email');
        }
      }
      else
        this.presentToast('Invalid Mobile');
    }
    else {
      this.presentToast('Please enter all the fields');
    }
  }

  mobileValidation(number): any {
    var pattern = /^([0|\+[0-9]{1,5})?([7-9][0-9]{7,9})$/;
    if (pattern.test(number))
      return true;
    else
      return false;

  }


  validateEmail(email): any {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  async presentAlert(content) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: content,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast(content) {
    const toast = await this.toastCtrl.create({
      message: content,
      duration: 500,
      cssClass: 'toast-content-10',

    });
    toast.present();
  }

  loginClick() {
    this.navCtrl.navigateForward("/login");
  }

  show(args) {
    this.height = {
      'height': '115vh'
    }
  }

  hide(args) {
    this.height = {
      'height': '100vh'
    }
  }

}
