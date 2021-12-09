import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisasterCreateConfirmPage } from './disaster-create-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: DisasterCreateConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisasterCreateConfirmPageRoutingModule {}
