import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupUpdateConfirmPage } from './group-update-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: GroupUpdateConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupUpdateConfirmPageRoutingModule {}
