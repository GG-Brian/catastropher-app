import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-supporter-delete-confirm',
  templateUrl: './supporter-delete-confirm.page.html',
  styleUrls: ['./supporter-delete-confirm.page.scss'],
})
export class SupporterDeleteConfirmPage {

  constructor(private modalController: ModalController) { }

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }

}