import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupDeletePage } from './group-delete.page';

const routes: Routes = [
  {
    path: '',
    component: GroupDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupDeletePageRoutingModule {}
