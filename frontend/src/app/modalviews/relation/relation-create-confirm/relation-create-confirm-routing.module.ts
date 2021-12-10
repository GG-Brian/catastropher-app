import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelationCreateConfirmPage } from './relation-create-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: RelationCreateConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelationCreateConfirmPageRoutingModule {}
