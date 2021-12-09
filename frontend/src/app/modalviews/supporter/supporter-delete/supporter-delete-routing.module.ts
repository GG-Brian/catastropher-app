import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupporterDeletePage } from './supporter-delete.page';

const routes: Routes = [
  {
    path: '',
    component: SupporterDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupporterDeletePageRoutingModule {}
