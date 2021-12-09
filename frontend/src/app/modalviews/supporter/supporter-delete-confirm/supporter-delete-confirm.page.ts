import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-supporter-delete-confirm',
  templateUrl: './supporter-delete-confirm.page.html',
  styleUrls: ['./supporter-delete-confirm.page.scss'],
})
export class SupporterDeleteConfirmPage implements OnInit {

  constructor(private modalController: ModalController) { }
  ngOnInit() {}

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }

}