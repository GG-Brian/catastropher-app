import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelationCreatePageRoutingModule } from './relation-create-routing.module';

import { RelationCreatePage } from './relation-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelationCreatePageRoutingModule
  ],
  declarations: [RelationCreatePage]
})
export class RelationCreatePageModule {}
