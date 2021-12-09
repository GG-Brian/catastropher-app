import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupUpdatePageRoutingModule } from './group-update-routing.module';

import { GroupUpdatePage } from './group-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupUpdatePageRoutingModule
  ],
  declarations: [GroupUpdatePage]
})
export class GroupUpdatePageModule {}
