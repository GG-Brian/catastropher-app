import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelationCreatePage } from './relation-create.page';

const routes: Routes = [
  {
    path: '',
    component: RelationCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelationCreatePageRoutingModule {}
