import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelationCreateConfirmPageRoutingModule } from './relation-create-confirm-routing.module';

import { RelationCreateConfirmPage } from './relation-create-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelationCreateConfirmPageRoutingModule
  ],
  declarations: [RelationCreateConfirmPage]
})
export class RelationCreateConfirmPageModule {}
