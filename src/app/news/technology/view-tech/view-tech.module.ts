import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewTechPageRoutingModule } from './view-tech-routing.module';

import { ViewTechPage } from './view-tech.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewTechPageRoutingModule
  ],
  declarations: [ViewTechPage]
})
export class ViewTechPageModule {}
