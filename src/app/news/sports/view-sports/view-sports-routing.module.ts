import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSportsPage } from './view-sports.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSportsPageRoutingModule {}
