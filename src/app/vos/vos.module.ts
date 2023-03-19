import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VosPageRoutingModule } from './vos-routing.module';

import { VosPage } from './vos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VosPageRoutingModule
  ],
  declarations: [VosPage]
})
export class VosPageModule {}
