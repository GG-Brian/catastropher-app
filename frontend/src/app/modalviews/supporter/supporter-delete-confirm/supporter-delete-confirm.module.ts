import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupporterDeleteConfirmPageRoutingModule } from './supporter-delete-confirm-routing.module';

import { SupporterDeleteConfirmPage } from './supporter-delete-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupporterDeleteConfirmPageRoutingModule
  ],
  declarations: [SupporterDeleteConfirmPage]
})
export class SupporterDeleteConfirmPageModule {}
