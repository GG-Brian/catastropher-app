import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelationUpdatePageRoutingModule } from './relation-update-routing.module';

import { RelationUpdatePage } from './relation-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelationUpdatePageRoutingModule
  ],
  declarations: [RelationUpdatePage]
})
export class RelationUpdatePageModule {}
