import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupporterUpdateConfirmPage } from './supporter-update-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: SupporterUpdateConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupporterUpdateConfirmPageRoutingModule {}
