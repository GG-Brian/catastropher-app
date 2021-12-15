import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-disaster-update-confirm',
  templateUrl: './disaster-update-confirm.page.html',
  styleUrls: ['./disaster-update-confirm.page.scss'],
})
export class DisasterUpdateConfirmPage {

  constructor(private modalController: ModalController) { }

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }

}