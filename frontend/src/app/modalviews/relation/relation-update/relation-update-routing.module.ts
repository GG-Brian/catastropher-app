import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelationUpdatePage } from './relation-update.page';

const routes: Routes = [
  {
    path: '',
    component: RelationUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelationUpdatePageRoutingModule {}
