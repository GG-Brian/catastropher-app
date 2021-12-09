import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupDeleteConfirmPage } from './group-delete-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: GroupDeleteConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupDeleteConfirmPageRoutingModule {}
