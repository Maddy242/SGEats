import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, PopoverController, IonSlides } from '@ionic/angular';
import { CustomizeComponent } from '../customize/customize.component';
import { CustomizeTextComponent } from '../customize-text/customize-text.component';
import { FilterComponent } from '../filter/filter.component'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 1000,
    autoPlay : 1000
  };
  status: boolean;
  display: boolean = false;
  showPencil: boolean = true;
  @ViewChild('slider', {static: false}) Slider : IonSlides;
  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private popOverController: PopoverController) { }

  ngOnInit() { }

  StartSlides(args){
    this.Slider.startAutoplay();
  }

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

  // ShowCustomize(args) {
  //   //this.display = true
  // }

  async ShowCustomize(ev: any) {
    this.presentCustomizePopover(ev);
  }

  async ShowCustomizeText(ev: any) {
    this.presentCustomizeTextPopover(ev);
  }

  openFilter(args){
    this.presentFilterPopover(args);
  }

  async presentCustomizePopover(ev: any) {
    const popover = await this.popOverController.create({
      component: CustomizeComponent,
      event: ev,
      translucent: true,
      backdropDismiss: true,
      cssClass: 'Customize-pop'
    });


    await popover.present();

    popover.onDidDismiss().then(() => {
      console.log('test');
    }, () => {

    });
  }

  async presentCustomizeTextPopover(ev: any) {
    const popover = await this.popOverController.create({
      component: CustomizeTextComponent,
      event: ev,
      translucent: true,
      backdropDismiss: true,
      cssClass: 'Customize-pop'
    });


    await popover.present();

    popover.onDidDismiss().then(() => {
      console.log('test');
    }, () => {

    });
  }

  async presentFilterPopover(ev: any) {
    const popover = await this.popOverController.create({
      component: FilterComponent,
      event: ev,
      translucent: true,
      backdropDismiss: true,
      cssClass: 'Customize-pop'
    });


    await popover.present();

    popover.onDidDismiss().then(() => {
      console.log('test');
    }, () => {

    });
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

  Ordernow(args) {
    this.navCtrl.navigateForward('summary');
  }

  viewAccount(args){
    this.navCtrl.navigateForward('account');
  }


}
