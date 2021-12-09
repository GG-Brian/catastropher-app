import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupporterCreateConfirmPage } from './supporter-create-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: SupporterCreateConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupporterCreateConfirmPageRoutingModule {}
