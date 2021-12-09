import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisasterDeletePage } from './disaster-delete.page';

const routes: Routes = [
  {
    path: '',
    component: DisasterDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisasterDeletePageRoutingModule {}
