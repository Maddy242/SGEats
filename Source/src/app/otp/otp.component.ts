import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  submitOTP(args) {
    this.navCtrl.navigateForward("/qr");
  }

  next(args, previousElement, nextElement) {
    console.log(args);
    // if (args != null && args.keyCode != null && args.keyCode != 229) {
    //   if (nextElement != "") {
    //     nextElement.setFocus();
    //   }
    // }
    // else{
    //   if(previousElement != ""){
    //     previousElement.setFocus();
    //   }
    // }

    if (args != null && args.target != null && args.target.value.trim() != "") {
      if (nextElement != "") {
        nextElement.focus();
      }
    }
    else {
      if(previousElement != ""){
        previousElement.focus();
      }
    }

  }

}
