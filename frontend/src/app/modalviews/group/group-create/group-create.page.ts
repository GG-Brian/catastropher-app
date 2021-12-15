import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserpermissionsService } from 'src/app/providers/userpermissions.service';
import { Helpgroup } from 'src/app/models/helpgroup';
import { HelpgroupService } from 'src/app/services/helpgroup.service';
import { GroupCreateConfirmPage } from '../group-create-confirm/group-create-confirm.page';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.page.html',
  styleUrls: ['./group-create.page.scss'],
})
export class GroupCreatePage {

  myGroup: Helpgroup;
  public modelData: any;

  constructor(private disasterService: HelpgroupService, private modalController: ModalController, private userpermissionsService: UserpermissionsService) { }

  recordCreate(newTask: string, newPlace: string, newCreation: string, ){
    newCreation = newCreation.substring(0, newCreation.length - 19);
    const newGroup: Helpgroup = {
      id: null,
      task: newTask,
      place: newPlace,
      creation: newCreation,
    };
    this.disasterService.createGroup(newGroup).subscribe(() => { this.modalConfirm() })
  }

  async modalConfirm() {
    const modalConfirm = await this.modalController.create({ component: GroupCreateConfirmPage, });
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