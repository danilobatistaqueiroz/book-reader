import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AggregatesPage } from './aggregates.page';

const routes: Routes = [
  {
    path: '',
    component: AggregatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AggregatesPageRoutingModule {}
