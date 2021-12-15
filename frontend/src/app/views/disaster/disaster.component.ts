import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserpermissionsService } from 'src/app/providers/userpermissions.service';
import { DisasterCreatePage } from 'src/app/modalviews/disaster/disaster-create/disaster-create.page';
import { DisasterDeletePage } from 'src/app/modalviews/disaster/disaster-delete/disaster-delete.page';
import { DisasterUpdatePage } from 'src/app/modalviews/disaster/disaster-update/disaster-update.page';
import { DisasterService } from 'src/app/services/disaster.service';
import { Disaster } from '../../models/disaster'

@Component({
  selector: 'app-disaster',
  templateUrl: './disaster.component.html',
  styleUrls: ['./disaster.component.scss'],
})
export class DisasterComponent implements OnInit {

  public disasters: Array<Disaster> = [];
  public myDisaster: Disaster;
  public modelData: any;
  private disasterId: number;

  constructor(private disasterService: DisasterService, private modalController: ModalController, private userpermissionsService: UserpermissionsService) { }
  
  ngOnInit(): void { this.dataLoader(); }
  
  dataLoader() {
    this.disasterService.getDisasters().subscribe((allDisasters: Array<Disaster>) => {
      this.disasters = allDisasters;
    })
  }


  

  async modalCreate() {

    const modalCreate = await this.modalController.create({ component: DisasterCreatePage, });

    modalCreate.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        window.location.reload();
      }
    });
    return await modalCreate.present();
  }




  async modalUpdate(id: number) {

    this.disasterId = id;
    localStorage.setItem("disasterId", `${this.disasterId}`);

    const modalUpdate = await this.modalController.create({ component: DisasterUpdatePage, });

    modalUpdate.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        window.location.reload();
      }
    });
    return await modalUpdate.present();
  }




  async modalDelete(id: number) {
    this.disasterId = id;
    localStorage.setItem("disasterId", `${this.disasterId}`);

    const modalDelete = await this.modalController.create({ component: DisasterDeletePage, });

    modalDelete.onDidDismiss().then((modelData) => {
      if (modelData != null){
        this.modelData = modelData.data;
        window.location.reload();
      }
    })
    return await modalDelete.present();
  }

}