import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-disaster-create-confirm',
  templateUrl: './disaster-create-confirm.page.html',
  styleUrls: ['./disaster-create-confirm.page.scss'],
})
export class DisasterCreateConfirmPage {
  
  constructor(private modalController: ModalController) { }

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }
  
}