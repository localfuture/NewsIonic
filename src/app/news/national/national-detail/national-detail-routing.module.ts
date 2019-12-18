import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NationalDetailPage } from './national-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NationalDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NationalDetailPageRoutingModule {}
