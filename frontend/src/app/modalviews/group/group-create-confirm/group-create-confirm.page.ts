import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-group-create-confirm',
  templateUrl: './group-create-confirm.page.html',
  styleUrls: ['./group-create-confirm.page.scss'],
})
export class GroupCreateConfirmPage implements OnInit {

  constructor(private modalController: ModalController) { }
  ngOnInit() {}

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }

}