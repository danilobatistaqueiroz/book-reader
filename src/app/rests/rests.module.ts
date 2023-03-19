import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestsPageRoutingModule } from './rests-routing.module';

import { RestsPage } from './rests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestsPageRoutingModule
  ],
  declarations: [RestsPage]
})
export class RestsPageModule {}
