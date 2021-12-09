import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupCreateConfirmPage } from './group-create-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: GroupCreateConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupCreateConfirmPageRoutingModule {}
