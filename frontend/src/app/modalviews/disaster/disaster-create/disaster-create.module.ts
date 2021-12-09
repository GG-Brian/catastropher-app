import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisasterCreatePageRoutingModule } from './disaster-create-routing.module';

import { DisasterCreatePage } from './disaster-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisasterCreatePageRoutingModule
  ],
  declarations: [DisasterCreatePage]
})
export class DisasterCreatePageModule {}
