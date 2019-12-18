import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSportsPageRoutingModule } from './view-sports-routing.module';

import { ViewSportsPage } from './view-sports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSportsPageRoutingModule
  ],
  declarations: [ViewSportsPage]
})
export class ViewSportsPageModule {}
