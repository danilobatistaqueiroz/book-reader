import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RepositoriesPage } from './repositories.page';

import { RepositoriesPageRoutingModule } from './repositories-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepositoriesPageRoutingModule
  ],
  declarations: [RepositoriesPage]
})
export class RepositoriesPageModule {}
