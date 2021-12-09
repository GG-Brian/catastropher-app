import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupDeletePageRoutingModule } from './group-delete-routing.module';

import { GroupDeletePage } from './group-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupDeletePageRoutingModule
  ],
  declarations: [GroupDeletePage]
})
export class GroupDeletePageModule {}
