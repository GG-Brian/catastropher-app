import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-group-update-confirm',
  templateUrl: './group-update-confirm.page.html',
  styleUrls: ['./group-update-confirm.page.scss'],
})
export class GroupUpdateConfirmPage {

  constructor(private modalController: ModalController) { }

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }

}