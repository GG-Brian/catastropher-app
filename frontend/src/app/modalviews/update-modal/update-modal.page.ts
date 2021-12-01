import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Disaster } from 'src/app/models/disaster';
import { DisasterService } from 'src/app/services/disaster.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.page.html',
  styleUrls: ['./update-modal.page.scss'],
})
export class UpdateModalPage implements OnInit {

  disasterId: number;
  myDisaster: Disaster;

  constructor(private disasterService: DisasterService, private modalController: ModalController) { }

  ngOnInit() {
    this.disasterId =+ localStorage.getItem("disasterId");
    this.disasterSearch(this.disasterId)
  }

  disasterSearch(id: number){
    this.disasterService.getDisasterById(id).subscribe((disaster: Disaster) => {
      this.myDisaster = disaster;
    })
  }


  async closeModel() {
    const close: string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

}