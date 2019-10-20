import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  showEditBox: Boolean = false;
  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {}

  logout(){
    this.presentAlert();
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: 'Are you sure to logout?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.navigateBack('login');
          }
        }
      ],
      cssClass : 'alert-style'
    });

    await alert.present();
  }

  EnableEdit(args){
    this.showEditBox =  !this.showEditBox;
  }

}
