import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSciencePageRoutingModule } from './view-science-routing.module';

import { ViewSciencePage } from './view-science.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSciencePageRoutingModule
  ],
  declarations: [ViewSciencePage]
})
export class ViewSciencePageModule {}
