import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisasterCreateConfirmPageRoutingModule } from './disaster-create-confirm-routing.module';

import { DisasterCreateConfirmPage } from './disaster-create-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisasterCreateConfirmPageRoutingModule
  ],
  declarations: [DisasterCreateConfirmPage]
})
export class DisasterCreateConfirmPageModule {}
