import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-supporter-update-confirm',
  templateUrl: './supporter-update-confirm.page.html',
  styleUrls: ['./supporter-update-confirm.page.scss'],
})
export class SupporterUpdateConfirmPage implements OnInit {

  constructor(private modalController: ModalController) { }
  ngOnInit() {}

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }

}