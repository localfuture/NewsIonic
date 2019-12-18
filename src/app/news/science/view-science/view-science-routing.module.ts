import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSciencePage } from './view-science.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSciencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSciencePageRoutingModule {}
