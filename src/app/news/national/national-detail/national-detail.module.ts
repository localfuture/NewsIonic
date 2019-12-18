import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NationalDetailPageRoutingModule } from './national-detail-routing.module';

import { NationalDetailPage } from './national-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NationalDetailPageRoutingModule
  ],
  declarations: [NationalDetailPage]
})
export class NationalDetailPageModule {}
