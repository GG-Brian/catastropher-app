import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelationDeletePageRoutingModule } from './relation-delete-routing.module';

import { RelationDeletePage } from './relation-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelationDeletePageRoutingModule
  ],
  declarations: [RelationDeletePage]
})
export class RelationDeletePageModule {}
