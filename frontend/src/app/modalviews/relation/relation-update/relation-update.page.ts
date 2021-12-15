import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserpermissionsService } from 'src/app/providers/userpermissions.service';
import { Relation } from 'src/app/models/relation';
import { RelationService } from 'src/app/services/relation.service';
import { RelationUpdateConfirmPage } from '../relation-update-confirm/relation-update-confirm.page';

@Component({
  selector: 'app-relation-update',
  templateUrl: './relation-update.page.html',
  styleUrls: ['./relation-update.page.scss'],
})
export class RelationUpdatePage implements OnInit {

  disasterId: number;
  groupId: number;
  myRelation: Relation;
  public modelData: any;

  constructor(private relationService: RelationService, private modalController: ModalController, private userpermissionsService: UserpermissionsService) { }

  ngOnInit() {
    this.disasterId = + localStorage.getItem("disasterId");
    this.groupId = + localStorage.getItem("groupId");
    this.relationSearch(this.disasterId, this.groupId);
  }

  relationSearch(disasterId: number, groupId: number) {
    this.relationService.getRelationByIds(disasterId, groupId).subscribe((relation: Relation) => {
      this.myRelation = relation;
    })
  }

  recordUpdate(disasterNew, groupNew) {
    const newRelation: Relation = {
      disasterId: disasterNew,
      groupId: groupNew
    };
    this.relationService.createRelation(newRelation).subscribe(() => {
      this.relationService.deleteRelation(this.disasterId, this.groupId).subscribe(() => {
        this.modalConfirm();
      })
    })



  }

  async modalConfirm() {
    const modalConfirm = await this.modalController.create({ component: RelationUpdateConfirmPage, });
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