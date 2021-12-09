import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisasterCreatePage } from './disaster-create.page';

const routes: Routes = [
  {
    path: '',
    component: DisasterCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisasterCreatePageRoutingModule {}
