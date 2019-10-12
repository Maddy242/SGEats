import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  status: boolean;
  display: boolean = false;
  showPencil: boolean = true;
  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() { }

  toggle() {
    this.status = !this.status;
    // if (this.status && this.audio)
    //   this.audio.pause();
    // else {
    //   if (this.wheelSpinning == true && this.audio)
    //     this.audio.play();
    // }
  }

  changeCustomization(args) {
    if (args == 'Pencil')
      this.showPencil = false;
    else
      this.showPencil = true;

  }

  ShowCustomize(args) {
    this.display = true
  }

  CloseCustomize(args) {
    this.display = false;
  }

  HideCustomizeOnblur(args) {
    if (args != null && args.target != undefined && args.target != null && args.target.innerText != null && args.target.innerText != "" && args.target.innerText == "Customize" && args.target.id != "custheader")
      this.display = true;
    else //if(args.target.parentElement.id != "custdialog")
      this.display = false;
  }

  Ordernow(args){
    this.navCtrl.navigateForward('summary');
  }


}
