import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupporterUpdateConfirmPageRoutingModule } from './supporter-update-confirm-routing.module';

import { SupporterUpdateConfirmPage } from './supporter-update-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupporterUpdateConfirmPageRoutingModule
  ],
  declarations: [SupporterUpdateConfirmPage]
})
export class SupporterUpdateConfirmPageModule {}
