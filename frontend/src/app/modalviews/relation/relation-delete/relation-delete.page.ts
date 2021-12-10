import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Relation } from 'src/app/models/relation';
import { RelationService } from 'src/app/services/relation.service';
import { RelationDeleteConfirmPage } from '../relation-delete-confirm/relation-delete-confirm.page';

@Component({
  selector: 'app-relation-delete',
  templateUrl: './relation-delete.page.html',
  styleUrls: ['./relation-delete.page.scss'],
})
export class RelationDeletePage implements OnInit {

  disasterId: number;
  groupId: number;
  myRelation: Relation;
  public modelData: any;

  constructor(private relationService: RelationService, private modalController: ModalController) { }

  ngOnInit() {
    this.disasterId =+ localStorage.getItem("disasterId");
    this.groupId =+ localStorage.getItem("groupId");
    this.relationSearch(this.disasterId, this.groupId);
  }

  relationSearch(disasterId: number, groupId: number){
    this.relationService.getRelationByIds(disasterId, groupId).subscribe((relation: Relation) => {
      this.myRelation = relation;
    })
  }

  recordDelete(disasterId, groupId){
    this.relationService.deleteRelation(disasterId, groupId).subscribe(() => {
      this.modalConfirm();
    })
  }

  async modalConfirm() {
    const modalConfirm = await this.modalController.create({ component: RelationDeleteConfirmPage, });
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