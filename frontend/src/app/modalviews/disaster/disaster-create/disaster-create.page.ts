import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserpermissionsService } from 'src/app/providers/userpermissions.service';
import { Disaster } from 'src/app/models/disaster';
import { DisasterService } from 'src/app/services/disaster.service';
import { DisasterCreateConfirmPage } from '../disaster-create-confirm/disaster-create-confirm.page';

@Component({
  selector: 'app-disaster-create',
  templateUrl: './disaster-create.page.html',
  styleUrls: ['./disaster-create.page.scss'],
})
export class DisasterCreatePage {
  
  myDisaster: Disaster;
  public modelData: any;

  constructor(private disasterService: DisasterService, private modalController: ModalController, private userpermissionsService: UserpermissionsService) { }

  recordCreate(newType: string, newOrigin: string, newArea: number, newInjured: number, newDeceased: number, newTime: string){
    newTime = newTime.substring(0, newTime.length - 6) + 'Z';
    const newDisaster: Disaster = {
      id: null,
      type: newType,
      origin: newOrigin,
      area: newArea,
      injured: newInjured,
      deceased: newDeceased,
      time: newTime
    };
    this.disasterService.createDisaster(newDisaster).subscribe(() => { this.modalConfirm() })
  }

  async modalConfirm() {
    const modalConfirm = await this.modalController.create({ component: DisasterCreateConfirmPage, });
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