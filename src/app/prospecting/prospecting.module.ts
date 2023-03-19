import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectingPageRoutingModule } from './prospecting-routing.module';

import { ProspectingPage } from './prospecting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProspectingPageRoutingModule
  ],
  declarations: [ProspectingPage]
})
export class ProspectingPageModule {}
