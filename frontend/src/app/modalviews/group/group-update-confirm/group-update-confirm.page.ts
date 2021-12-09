import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-group-update-confirm',
  templateUrl: './group-update-confirm.page.html',
  styleUrls: ['./group-update-confirm.page.scss'],
})
export class GroupUpdateConfirmPage implements OnInit {

  constructor(private modalController: ModalController) { }
  ngOnInit() {}

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }

}