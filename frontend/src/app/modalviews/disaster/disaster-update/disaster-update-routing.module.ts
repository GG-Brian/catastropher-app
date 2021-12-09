import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisasterUpdatePage } from './disaster-update.page';

const routes: Routes = [
  {
    path: '',
    component: DisasterUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisasterUpdatePageRoutingModule {}
