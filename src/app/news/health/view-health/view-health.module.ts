import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewHealthPageRoutingModule } from './view-health-routing.module';

import { ViewHealthPage } from './view-health.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewHealthPageRoutingModule
  ],
  declarations: [ViewHealthPage]
})
export class ViewHealthPageModule {}
