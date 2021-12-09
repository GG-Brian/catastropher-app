import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisasterDeleteConfirmPage } from './disaster-delete-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: DisasterDeleteConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisasterDeleteConfirmPageRoutingModule {}
