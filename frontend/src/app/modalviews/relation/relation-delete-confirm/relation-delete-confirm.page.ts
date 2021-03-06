import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-relation-delete-confirm',
  templateUrl: './relation-delete-confirm.page.html',
  styleUrls: ['./relation-delete-confirm.page.scss'],
})
export class RelationDeleteConfirmPage {

  constructor(private modalController: ModalController) { }

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }

}