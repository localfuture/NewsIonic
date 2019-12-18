import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEntertainmentPage } from './view-entertainment.page';

const routes: Routes = [
  {
    path: '',
    component: ViewEntertainmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEntertainmentPageRoutingModule {}
