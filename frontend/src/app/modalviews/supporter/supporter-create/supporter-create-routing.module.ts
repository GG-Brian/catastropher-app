import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupporterCreatePage } from './supporter-create.page';

const routes: Routes = [
  {
    path: '',
    component: SupporterCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupporterCreatePageRoutingModule {}
