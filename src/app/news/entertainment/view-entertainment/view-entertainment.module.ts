import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEntertainmentPageRoutingModule } from './view-entertainment-routing.module';

import { ViewEntertainmentPage } from './view-entertainment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEntertainmentPageRoutingModule
  ],
  declarations: [ViewEntertainmentPage]
})
export class ViewEntertainmentPageModule {}
