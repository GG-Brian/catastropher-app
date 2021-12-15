import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-group-create-confirm',
  templateUrl: './group-create-confirm.page.html',
  styleUrls: ['./group-create-confirm.page.scss'],
})
export class GroupCreateConfirmPage {

  constructor(private modalController: ModalController) { }

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }

}