import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportsPage } from './sports.page';

const routes: Routes = [
  {
    path: '',
    component: SportsPage
  },
  {
    path: 'view-sports',
    loadChildren: () => import('./view-sports/view-sports.module').then( m => m.ViewSportsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsPageRoutingModule {}
