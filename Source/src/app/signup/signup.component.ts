import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  public name:any;
  public number: any;
  public email: any;
  public height: any;
  constructor(public alertController: AlertController, public navCtrl: NavController) { }

  ngOnInit() {
    this.height = {
      'height': '100vh'
    }
  }

  signup(args){
    if(args != null && this.name != null && this.number != null &&  this.name != "" && this.number != ""){
      if(this.validateEmail(this.email)){
        this.loginClick();
      }
      else{
        this.presentAlert('Invalid Email');
      }
    }
  }

  validateEmail(email): any{
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

  loginClick(){
    this.navCtrl.navigateForward("/login");
  }

  show(args){
     this.height = {
         'height': '115vh'
     }
  }

  hide(args){
    this.height = {
        'height': '100vh'
    }
  }

}
