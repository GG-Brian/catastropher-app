import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupporterDeletePageRoutingModule } from './supporter-delete-routing.module';

import { SupporterDeletePage } from './supporter-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupporterDeletePageRoutingModule
  ],
  declarations: [SupporterDeletePage]
})
export class SupporterDeletePageModule {}
