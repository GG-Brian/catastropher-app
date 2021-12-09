import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupDeleteConfirmPageRoutingModule } from './group-delete-confirm-routing.module';

import { GroupDeleteConfirmPage } from './group-delete-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupDeleteConfirmPageRoutingModule
  ],
  declarations: [GroupDeleteConfirmPage]
})
export class GroupDeleteConfirmPageModule {}
