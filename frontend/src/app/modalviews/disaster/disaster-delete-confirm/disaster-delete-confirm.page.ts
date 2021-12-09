import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-disaster-delete-confirm',
  templateUrl: './disaster-delete-confirm.page.html',
  styleUrls: ['./disaster-delete-confirm.page.scss'],
})
export class DisasterDeleteConfirmPage implements OnInit {
  
  constructor(private modalController: ModalController) { }
  ngOnInit() {}

  closeModel() {
    const close: string = "Modal Removed";
    this.modalController.dismiss(close);
  }
  
}