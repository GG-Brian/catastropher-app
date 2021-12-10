import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RelationCreatePage } from 'src/app/modalviews/relation/relation-create/relation-create.page';
import { RelationDeletePage } from 'src/app/modalviews/relation/relation-delete/relation-delete.page';
import { RelationUpdatePage } from 'src/app/modalviews/relation/relation-update/relation-update.page';
import { Relation } from 'src/app/models/relation';
import { JavascriptLoaderService } from 'src/app/services/javascript-loader.service';
import { RelationService } from 'src/app/services/relation.service';

@Component({
  selector: 'app-relation-disaster-group',
  templateUrl: './relation-disaster-group.component.html',
  styleUrls: ['./relation-disaster-group.component.scss'],
})
export class RelationDisasterGroupComponent implements OnInit {

  public relations: Array<Relation> = [];
  public relationsGroup: Array<Relation> = [];
  // public myGroup: Helpgroup;
  public modelData: any;

  private disasterId: number;
  private groupId: number;

  constructor(private javascriptFile: JavascriptLoaderService, private relationService: RelationService, private modalController: ModalController) { 
      this.javascriptFile.LoadMeetUsFiles(["relation-tabs"])
  }
  
  ngOnInit(): void { this.dataLoader(); }
  
  dataLoader() {
    this.relationService.getRelations(false).subscribe((allRelations: Array<Relation>) => {
      this.relations = allRelations;
      console.log(this.relations)
    })
    this.relationService.getRelations(true).subscribe((allRelationByGroups: Array<Relation>) => {
      this.relationsGroup = allRelationByGroups;
    })
  }
  

  

  async modalCreate() {

    const modalCreate = await this.modalController.create({ component: RelationCreatePage, });

    modalCreate.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        window.location.reload();
      }
    });
    return await modalCreate.present();
  }




  async modalUpdate(disasterId: number, groupId: number) {

    this.disasterId = disasterId;
    this.groupId = groupId;
    localStorage.setItem("disasterId", `${this.disasterId}`)
    localStorage.setItem("groupId", `${this.groupId}`);

    const modalUpdate = await this.modalController.create({ component: RelationUpdatePage, });

    modalUpdate.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        window.location.reload();
      }
    });
    return await modalUpdate.present();
  }




  async modalDelete(disasterId: number, groupId: number) {
    
    this.disasterId = disasterId;
    this.groupId = groupId;
    localStorage.setItem("disasterId", `${this.disasterId}`);
    localStorage.setItem("groupId", `${this.groupId}`);

    const modalDelete = await this.modalController.create({ component: RelationDeletePage, });

    modalDelete.onDidDismiss().then((modelData) => {
      if (modelData != null){
        this.modelData = modelData.data;
        window.location.reload();
      }
    })
    return await modalDelete.present();
  }


}