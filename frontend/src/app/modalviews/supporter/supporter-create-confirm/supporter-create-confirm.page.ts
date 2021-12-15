import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-supporter-create-confirm',
  templateUrl: './supporter-create-confirm.page.html',
  styleUrls: ['./supporter-create-confirm.page.scss'],
})
export class SupporterCreateConfirmPage {

  constructor(private modalController: ModalController) { }

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }

}