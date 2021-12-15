import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserpermissionsService } from 'src/app/providers/userpermissions.service';
import { Helpgroup } from 'src/app/models/helpgroup';
import { HelpgroupService } from 'src/app/services/helpgroup.service';
import { GroupUpdateConfirmPage } from '../group-update-confirm/group-update-confirm.page';

@Component({
  selector: 'app-group-update',
  templateUrl: './group-update.page.html',
  styleUrls: ['./group-update.page.scss'],
})
export class GroupUpdatePage implements OnInit {

  groupId: number;
  myGroup: Helpgroup;
  public modelData: any;

  constructor(private groupService: HelpgroupService, private modalController: ModalController, private userpermissionsService: UserpermissionsService) { }

  ngOnInit() {
    this.groupId =+ localStorage.getItem("groupId");
    this.groupSearch(this.groupId);
  }

  groupSearch(id: number){
    this.groupService.getGroupById(id).subscribe((helpgroup: Helpgroup) => {
      this.myGroup = helpgroup;
    })
  }

  recordUpdate(groupId, task: string, place: string, creation: string){
    if (creation.length != 10){ creation = creation.substring(0, creation.length - 15); }  // ion-datetime tag adds unallowed values for backend's Instant class
    this.groupService.updateGroup(groupId, task, place, creation).subscribe(() => {
      this.modalConfirm();
    })
  }

  async modalConfirm() {
    const modalConfirm = await this.modalController.create({ component: GroupUpdateConfirmPage, });
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