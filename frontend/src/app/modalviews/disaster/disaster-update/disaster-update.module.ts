import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisasterUpdatePageRoutingModule } from './disaster-update-routing.module';

import { DisasterUpdatePage } from './disaster-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisasterUpdatePageRoutingModule
  ],
  declarations: [DisasterUpdatePage]
})
export class DisasterUpdatePageModule {}
