import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Relation } from 'src/app/models/relation';
import { RelationService } from 'src/app/services/relation.service';
import { RelationCreateConfirmPage } from '../relation-create-confirm/relation-create-confirm.page';

@Component({
  selector: 'app-relation-create',
  templateUrl: './relation-create.page.html',
  styleUrls: ['./relation-create.page.scss'],
})
export class RelationCreatePage implements OnInit {
  
  myRelation: Relation;
  public modelData: any;

  constructor(private relationService: RelationService, private modalController: ModalController) { }

  ngOnInit() { }

  recordCreate(disasterId: number, groupId: number){
    const newRelation: Relation = {
      disasterId: disasterId,
      groupId: groupId
    };
    this.relationService.createRelation(newRelation).subscribe(() => { this.modalConfirm() })
  }

  async modalConfirm() {
    const modalConfirm = await this.modalController.create({ component: RelationCreateConfirmPage, });
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