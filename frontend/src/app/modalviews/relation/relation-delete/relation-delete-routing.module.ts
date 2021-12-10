import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelationDeletePage } from './relation-delete.page';

const routes: Routes = [
  {
    path: '',
    component: RelationDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelationDeletePageRoutingModule {}
