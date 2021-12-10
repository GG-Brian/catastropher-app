import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-relation-create-confirm',
  templateUrl: './relation-create-confirm.page.html',
  styleUrls: ['./relation-create-confirm.page.scss'],
})
export class RelationCreateConfirmPage implements OnInit {

  constructor(private modalController: ModalController) { }
  ngOnInit() {}

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }

}