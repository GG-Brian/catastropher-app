import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Supporter } from 'src/app/models/supporter';
import { SupporterService } from 'src/app/services/supporter.service';
import { SupporterUpdateConfirmPage } from '../supporter-update-confirm/supporter-update-confirm.page';

@Component({
  selector: 'app-supporter-update',
  templateUrl: './supporter-update.page.html',
  styleUrls: ['./supporter-update.page.scss'],
})
export class SupporterUpdatePage implements OnInit {

  memberDni: string;
  myMember: Supporter;
  public modelData: any;

  constructor(private supporterService: SupporterService, private modalController: ModalController) { }

  ngOnInit() {
    this.memberDni = localStorage.getItem("memberDni");
    this.memberSearch(this.memberDni);
  }

  memberSearch(id: string){
    this.supporterService.getSupporterById(id).subscribe((member: Supporter) => {
      this.myMember = member;
    })
  }

  recordUpdate(memberDni, name: string, age: number, date: string, thegroup: number){
    if (date.length != 10){ date = date.substring(0, date.length - 15); }  // ion-datetime tag adds unallowed values for backend's Instant class
    this.supporterService.updateSupporter(memberDni, name, age, date, thegroup).subscribe(() => {
      this.modalConfirm();
    })
  }

  async modalConfirm() {
    const modalConfirm = await this.modalController.create({ component: SupporterUpdateConfirmPage, });
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