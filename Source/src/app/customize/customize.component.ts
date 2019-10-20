import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular'

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss'],
})
export class CustomizeComponent implements OnInit {
  showPencil: any = true;
  constructor(private popoverController: PopoverController) { }

  ngOnInit() { }

  changeCustomization(args) {
    if (args == 'Pencil')
      this.showPencil = false;
    else
      this.showPencil = true;
  }

  CloseCustomize(args) {
    this.DismissClick();
  }

  async DismissClick() {
    await this.popoverController.dismiss();
  }

}
