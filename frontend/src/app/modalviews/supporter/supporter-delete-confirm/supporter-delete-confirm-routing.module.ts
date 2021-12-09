import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupporterDeleteConfirmPage } from './supporter-delete-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: SupporterDeleteConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupporterDeleteConfirmPageRoutingModule {}
