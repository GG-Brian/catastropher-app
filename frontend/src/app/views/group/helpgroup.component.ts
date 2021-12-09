import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GroupCreatePage } from 'src/app/modalviews/group/group-create/group-create.page';
import { GroupDeletePage } from 'src/app/modalviews/group/group-delete/group-delete.page';
import { GroupUpdatePage } from 'src/app/modalviews/group/group-update/group-update.page';
import { Helpgroup } from 'src/app/models/helpgroup';
import { HelpgroupService } from 'src/app/services/helpgroup.service';

@Component({
  selector: 'app-helpgroup',
  templateUrl: './helpgroup.component.html',
  styleUrls: ['./helpgroup.component.scss'],
})
export class HelpgroupComponent implements OnInit {

  public groups: Array<Helpgroup> = [];
  public myGroup: Helpgroup;
  public modelData: any;
  private groupId: number;

  constructor(private groupService: HelpgroupService, private modalController: ModalController) { }
  
  ngOnInit(): void { this.dataLoader(); }
  
  dataLoader() {
    this.groupService.getGroups().subscribe((allGroups: Array<Helpgroup>) => {
      this.groups = allGroups;
    })
  }


  

  async modalCreate() {

    const modalCreate = await this.modalController.create({ component: GroupCreatePage, });

    modalCreate.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        window.location.reload();
      }
    });
    return await modalCreate.present();
  }




  async modalUpdate(id: number) {

    this.groupId = id;
    localStorage.setItem("groupId", `${this.groupId}`);

    const modalUpdate = await this.modalController.create({ component: GroupUpdatePage, });

    modalUpdate.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        window.location.reload();
      }
    });
    return await modalUpdate.present();
  }




  async modalDelete(id: number) {
    this.groupId = id;
    localStorage.setItem("groupId", `${this.groupId}`);

    const modalDelete = await this.modalController.create({ component: GroupDeletePage, });

    modalDelete.onDidDismiss().then((modelData) => {
      if (modelData != null){
        this.modelData = modelData.data;
        window.location.reload();
      }
    })
    return await modalDelete.present();
  }

}