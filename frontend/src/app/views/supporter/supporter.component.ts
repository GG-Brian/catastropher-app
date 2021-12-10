import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SupporterCreatePage } from 'src/app/modalviews/supporter/supporter-create/supporter-create.page';
import { SupporterDeletePage } from 'src/app/modalviews/supporter/supporter-delete/supporter-delete.page';
import { SupporterUpdatePage } from 'src/app/modalviews/supporter/supporter-update/supporter-update.page';
import { Supporter } from 'src/app/models/supporter';
import { HelpgroupService } from 'src/app/services/helpgroup.service';
import { SupporterService } from 'src/app/services/supporter.service';

@Component({
  selector: 'app-supporter',
  templateUrl: './supporter.component.html',
  styleUrls: ['./supporter.component.scss'],
})
export class SupporterComponent implements OnInit {

  public members: Array<Supporter> = [];
  public myMember: Supporter;
  public modelData: any;
  private memberDni: string;

  constructor(private supporterService: SupporterService, private helpgroupService: HelpgroupService, private modalController: ModalController) { }
  
  ngOnInit(): void { this.dataLoader(); }
  
  dataLoader() {
    this.supporterService.getSupporters().subscribe((allSupporters: Array<Supporter>) => {
      // allSupporters.forEach((thisSupporter) => {
      //   this.helpgroupService.getGroupById( thisSupporter .thegroup.)
      // });
      this.members = allSupporters;
      console.log(allSupporters);
    })
  }




  async modalCreate() {

    const modalCreate = await this.modalController.create({ component: SupporterCreatePage, });

    modalCreate.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        window.location.reload();
      }
    });
    return await modalCreate.present();
  }




  async modalUpdate(id: string) {
    this.memberDni = id;
    localStorage.setItem("memberDni", `${this.memberDni}`);

    const modalUpdate = await this.modalController.create({ component: SupporterUpdatePage, });

    modalUpdate.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        window.location.reload();
      }
    });
    return await modalUpdate.present();
  }




  async modalDelete(id: string) {
    this.memberDni = id;
    localStorage.setItem("memberDni", `${this.memberDni}`);

    const modalDelete = await this.modalController.create({ component: SupporterDeletePage, });

    modalDelete.onDidDismiss().then((modelData) => {
      if (modelData != null){
        this.modelData = modelData.data;
        window.location.reload();
      }
    })
    return await modalDelete.present();
  }

}
