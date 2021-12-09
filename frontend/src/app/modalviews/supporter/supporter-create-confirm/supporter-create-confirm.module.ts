import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupporterCreateConfirmPageRoutingModule } from './supporter-create-confirm-routing.module';

import { SupporterCreateConfirmPage } from './supporter-create-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupporterCreateConfirmPageRoutingModule
  ],
  declarations: [SupporterCreateConfirmPage]
})
export class SupporterCreateConfirmPageModule {}
