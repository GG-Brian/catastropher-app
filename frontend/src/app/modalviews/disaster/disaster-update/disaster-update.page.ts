import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserpermissionsService } from 'src/app/providers/userpermissions.service';
import { Disaster } from 'src/app/models/disaster';
import { DisasterService } from 'src/app/services/disaster.service';
import { DisasterUpdateConfirmPage } from '../disaster-update-confirm/disaster-update-confirm.page';

@Component({
  selector: 'app-disaster-update',
  templateUrl: './disaster-update.page.html',
  styleUrls: ['./disaster-update.page.scss'],
})
export class DisasterUpdatePage implements OnInit {
  
  disasterId: number;
  myDisaster: Disaster;
  public modelData: any;

  constructor(private disasterService: DisasterService, private modalController: ModalController, private userpermissionsService: UserpermissionsService) { }

  ngOnInit() {
    this.disasterId =+ localStorage.getItem("disasterId");
    this.disasterSearch(this.disasterId)
  }

  disasterSearch(id: number){
    this.disasterService.getDisasterById(id).subscribe((disaster: Disaster) => {
      this.myDisaster = disaster;
    })
  }

  recordUpdate(disasterId, type: string, origin: string, area: number, injured: number, deceased: number, time: string){
    if (time.length != 20){ time = time.substring(0, time.length - 6) + 'Z'; }  // ion-datetime tag adds unallowed values for backend's Instant class
    this.disasterService.updateDisaster(disasterId, type, origin, area, injured, deceased, time).subscribe(() => {
      this.modalConfirm();
    })
  }

  async modalConfirm() {
    const modalConfirm = await this.modalController.create({ component: DisasterUpdateConfirmPage, });
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