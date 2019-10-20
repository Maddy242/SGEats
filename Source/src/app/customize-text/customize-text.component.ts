import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular'

@Component({
  selector: 'app-customize-text',
  templateUrl: './customize-text.component.html',
  styleUrls: ['./customize-text.component.scss'],
})
export class CustomizeTextComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}
  
  CloseCustomize(args) {
    this.DismissClick();
  }

  async DismissClick() {
    await this.popoverController.dismiss();
  }

}
