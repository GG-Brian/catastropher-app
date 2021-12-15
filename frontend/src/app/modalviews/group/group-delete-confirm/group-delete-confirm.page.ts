import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-group-delete-confirm',
  templateUrl: './group-delete-confirm.page.html',
  styleUrls: ['./group-delete-confirm.page.scss'],
})
export class GroupDeleteConfirmPage {

  constructor(private modalController: ModalController) { }

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }

}