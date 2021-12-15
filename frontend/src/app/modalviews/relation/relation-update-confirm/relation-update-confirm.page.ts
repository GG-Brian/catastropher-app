import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-relation-update-confirm',
  templateUrl: './relation-update-confirm.page.html',
  styleUrls: ['./relation-update-confirm.page.scss'],
})
export class RelationUpdateConfirmPage {

  constructor(private modalController: ModalController) { }

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }

}