import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Supporter } from 'src/app/models/supporter';
import { SupporterService } from 'src/app/services/supporter.service';
import { SupporterDeleteConfirmPage } from '../supporter-delete-confirm/supporter-delete-confirm.page';

@Component({
  selector: 'app-supporter-delete',
  templateUrl: './supporter-delete.page.html',
  styleUrls: ['./supporter-delete.page.scss'],
})
export class SupporterDeletePage implements OnInit {

  memberId: string;
  myMember: Supporter;
  public modelData: any;

  constructor(private supporterService: SupporterService, private modalController: ModalController) { }

  ngOnInit() {
    this.memberId = localStorage.getItem("memberDni");
    this.memberSearch(this.memberId);
  }

  memberSearch(id: string){
    this.supporterService.getSupporterById(id).subscribe((member: Supporter) => {
      this.myMember = member;
    })
  }

  recordDelete(memberId){
    this.supporterService.deleteSupporter(memberId).subscribe(() => {
      this.modalConfirm();
    })
  }

  async modalConfirm() {
    const modalConfirm = await this.modalController.create({ component: SupporterDeleteConfirmPage, });
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