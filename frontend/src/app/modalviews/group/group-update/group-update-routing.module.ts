import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupUpdatePage } from './group-update.page';

const routes: Routes = [
  {
    path: '',
    component: GroupUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupUpdatePageRoutingModule {}
