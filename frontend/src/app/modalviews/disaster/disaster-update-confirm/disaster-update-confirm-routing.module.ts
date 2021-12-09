import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisasterUpdateConfirmPage } from './disaster-update-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: DisasterUpdateConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisasterUpdateConfirmPageRoutingModule {}
