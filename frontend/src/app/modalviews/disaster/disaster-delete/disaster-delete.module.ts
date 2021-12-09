import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisasterDeletePageRoutingModule } from './disaster-delete-routing.module';

import { DisasterDeletePage } from './disaster-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisasterDeletePageRoutingModule
  ],
  declarations: [DisasterDeletePage]
})
export class DisasterDeletePageModule {}
