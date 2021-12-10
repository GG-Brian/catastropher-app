import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelationDeleteConfirmPageRoutingModule } from './relation-delete-confirm-routing.module';

import { RelationDeleteConfirmPage } from './relation-delete-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelationDeleteConfirmPageRoutingModule
  ],
  declarations: [RelationDeleteConfirmPage]
})
export class RelationDeleteConfirmPageModule {}
