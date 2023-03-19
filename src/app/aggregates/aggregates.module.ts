import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AggregatesPageRoutingModule } from './aggregates-routing.module';

import { AggregatesPage } from './aggregates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AggregatesPageRoutingModule
  ],
  declarations: [AggregatesPage]
})
export class AggregatesPageModule {}
