import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTechPage } from './view-tech.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTechPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTechPageRoutingModule {}
