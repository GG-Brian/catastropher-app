import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserpermissionsService } from 'src/app/providers/userpermissions.service';
import { Helpgroup } from 'src/app/models/helpgroup';
import { HelpgroupService } from 'src/app/services/helpgroup.service';
import { GroupDeleteConfirmPage } from '../group-delete-confirm/group-delete-confirm.page';

@Component({
  selector: 'app-group-delete',
  templateUrl: './group-delete.page.html',
  styleUrls: ['./group-delete.page.scss'],
})
export class GroupDeletePage implements OnInit {

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

  recordDelete(groupId){
    this.groupService.deleteGroup(groupId).subscribe(() => {
      this.modalConfirm();
    })
  }

  async modalConfirm() {
    const modalConfirm = await this.modalController.create({ component: GroupDeleteConfirmPage, });
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