import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestsPage } from './rests.page';

const routes: Routes = [
  {
    path: '',
    component: RestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestsPageRoutingModule {}
