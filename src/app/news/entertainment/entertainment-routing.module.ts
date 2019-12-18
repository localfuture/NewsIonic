import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntertainmentPage } from './entertainment.page';

const routes: Routes = [
  {
    path: '',
    component: EntertainmentPage
  },
  {
    path: 'view-entertainment',
    loadChildren: () => import('./view-entertainment/view-entertainment.module').then( m => m.ViewEntertainmentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntertainmentPageRoutingModule {}
