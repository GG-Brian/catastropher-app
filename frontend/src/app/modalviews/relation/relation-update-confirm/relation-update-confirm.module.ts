import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelationUpdateConfirmPageRoutingModule } from './relation-update-confirm-routing.module';

import { RelationUpdateConfirmPage } from './relation-update-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelationUpdateConfirmPageRoutingModule
  ],
  declarations: [RelationUpdateConfirmPage]
})
export class RelationUpdateConfirmPageModule {}
