import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-disaster-delete-confirm',
  templateUrl: './disaster-delete-confirm.page.html',
  styleUrls: ['./disaster-delete-confirm.page.scss'],
})
export class DisasterDeleteConfirmPage {
  
  constructor(private modalController: ModalController) { }

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }
  
}