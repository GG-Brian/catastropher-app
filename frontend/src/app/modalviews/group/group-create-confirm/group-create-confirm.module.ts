import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupCreateConfirmPageRoutingModule } from './group-create-confirm-routing.module';

import { GroupCreateConfirmPage } from './group-create-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupCreateConfirmPageRoutingModule
  ],
  declarations: [GroupCreateConfirmPage]
})
export class GroupCreateConfirmPageModule {}
