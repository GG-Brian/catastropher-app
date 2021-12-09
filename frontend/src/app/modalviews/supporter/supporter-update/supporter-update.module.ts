import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupporterUpdatePageRoutingModule } from './supporter-update-routing.module';

import { SupporterUpdatePage } from './supporter-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupporterUpdatePageRoutingModule
  ],
  declarations: [SupporterUpdatePage]
})
export class SupporterUpdatePageModule {}
