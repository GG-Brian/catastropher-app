import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelationUpdateConfirmPage } from './relation-update-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: RelationUpdateConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelationUpdateConfirmPageRoutingModule {}
