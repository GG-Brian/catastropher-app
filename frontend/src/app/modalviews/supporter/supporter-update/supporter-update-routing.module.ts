import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupporterUpdatePage } from './supporter-update.page';

const routes: Routes = [
  {
    path: '',
    component: SupporterUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupporterUpdatePageRoutingModule {}
