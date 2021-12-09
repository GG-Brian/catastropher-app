import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupUpdateConfirmPageRoutingModule } from './group-update-confirm-routing.module';

import { GroupUpdateConfirmPage } from './group-update-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupUpdateConfirmPageRoutingModule
  ],
  declarations: [GroupUpdateConfirmPage]
})
export class GroupUpdateConfirmPageModule {}
