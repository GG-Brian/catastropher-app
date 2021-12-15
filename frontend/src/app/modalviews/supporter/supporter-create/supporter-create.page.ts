import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserpermissionsService } from 'src/app/providers/userpermissions.service';
import { Supporter } from 'src/app/models/supporter';
import { SupporterService } from 'src/app/services/supporter.service';
import { SupporterCreateConfirmPage } from '../supporter-create-confirm/supporter-create-confirm.page';

@Component({
  selector: 'app-supporter-create',
  templateUrl: './supporter-create.page.html',
  styleUrls: ['./supporter-create.page.scss'],
})
export class SupporterCreatePage {

  myMember: Supporter;
  public modelData: any;

  constructor(private supporterService: SupporterService, private modalController: ModalController, private userpermissionsService: UserpermissionsService) { }

  recordCreate(newDni: string, newName: string, newAge: number, newDate: string, newThegroup: number ){
    newDate = newDate.substring(0, newDate.length - 19);
    const newGroup: Supporter = {
      dni: newDni,
      name: newName,
      age: newAge,
      date: newDate,
      thegroup: newThegroup
    };
    this.supporterService.createSupporter(newGroup).subscribe(() => { this.modalConfirm() })
  }

  async modalConfirm() {
    const modalConfirm = await this.modalController.create({ component: SupporterCreateConfirmPage, });
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