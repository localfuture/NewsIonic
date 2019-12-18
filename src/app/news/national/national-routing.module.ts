import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NationalPage } from './national.page';

const routes: Routes = [
  {
    path: '',
    component: NationalPage
  },
  {
    path: 'national-detail',
    loadChildren: () => import('./national-detail/national-detail.module').then( m => m.NationalDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NationalPageRoutingModule {}
