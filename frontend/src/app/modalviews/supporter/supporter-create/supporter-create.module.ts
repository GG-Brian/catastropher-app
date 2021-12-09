import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupporterCreatePageRoutingModule } from './supporter-create-routing.module';

import { SupporterCreatePage } from './supporter-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupporterCreatePageRoutingModule
  ],
  declarations: [SupporterCreatePage]
})
export class SupporterCreatePageModule {}
