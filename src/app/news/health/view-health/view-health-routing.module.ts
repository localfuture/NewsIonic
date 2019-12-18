import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHealthPage } from './view-health.page';

const routes: Routes = [
  {
    path: '',
    component: ViewHealthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewHealthPageRoutingModule {}
