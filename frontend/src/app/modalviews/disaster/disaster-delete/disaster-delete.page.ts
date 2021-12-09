import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Disaster } from 'src/app/models/disaster';
import { DisasterService } from 'src/app/services/disaster.service';
import { DisasterDeleteConfirmPage } from '../disaster-delete-confirm/disaster-delete-confirm.page';

@Component({
  selector: 'app-disaster-delete',
  templateUrl: './disaster-delete.page.html',
  styleUrls: ['./disaster-delete.page.scss'],
})
export class DisasterDeletePage implements OnInit {

  disasterId: number;
  myDisaster: Disaster;
  public modelData: any;

  constructor(private disasterService: DisasterService, private modalController: ModalController) { }

  ngOnInit() {
    this.disasterId =+ localStorage.getItem("disasterId");
    this.disasterSearch(this.disasterId)
  }

  disasterSearch(id: number){
    this.disasterService.getDisasterById(id).subscribe((disaster: Disaster) => {
      this.myDisaster = disaster;
    })
  }

  recordDelete(disasterId){
    this.disasterService.deleteDisaster(disasterId).subscribe(() => {
      this.modalConfirm();
    })
  }

  async modalConfirm() {
    const modalConfirm = await this.modalController.create({ component: DisasterDeleteConfirmPage, });
    modalConfirm.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        window.location.reload();
      }
    });
    return await modalConfirm.present();
  }



  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }
}