import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DomainsPage } from './domains.page';

const routes: Routes = [
  {
    path: '',
    component: DomainsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DomainsPageRoutingModule {}
