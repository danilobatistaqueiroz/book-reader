import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasePage } from './base.page';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasePageRoutingModule {}
