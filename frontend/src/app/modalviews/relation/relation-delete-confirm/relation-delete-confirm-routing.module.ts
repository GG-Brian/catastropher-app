import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelationDeleteConfirmPage } from './relation-delete-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: RelationDeleteConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelationDeleteConfirmPageRoutingModule {}
