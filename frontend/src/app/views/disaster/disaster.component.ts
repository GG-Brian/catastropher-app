import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdateModalPage } from 'src/app/modalviews/update-modal/update-modal.page';
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

  constructor(private disasterService: DisasterService, private modalController: ModalController) { }
  
  ngOnInit(): void { this.dataLoader(); }
  
  dataLoader() {
    this.disasterService.getDisasters().subscribe((allDisasters: Array<Disaster>) => {
      this.disasters = allDisasters;
    })
  }

  async modalUpdate(id: number) {

    this.disasterId = id;
    localStorage.setItem("disasterId", `${this.disasterId}`)

    const modal = await this.modalController.create({
      component: UpdateModalPage,

    });

    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        window.location.reload();
      }
    });

    return await modal.present();
  }

}