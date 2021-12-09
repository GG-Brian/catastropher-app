import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisasterUpdateConfirmPageRoutingModule } from './disaster-update-confirm-routing.module';

import { DisasterUpdateConfirmPage } from './disaster-update-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisasterUpdateConfirmPageRoutingModule
  ],
  declarations: [DisasterUpdateConfirmPage]
})
export class DisasterUpdateConfirmPageModule {}
