import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisasterDeleteConfirmPageRoutingModule } from './disaster-delete-confirm-routing.module';

import { DisasterDeleteConfirmPage } from './disaster-delete-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisasterDeleteConfirmPageRoutingModule
  ],
  declarations: [DisasterDeleteConfirmPage]
})
export class DisasterDeleteConfirmPageModule {}
