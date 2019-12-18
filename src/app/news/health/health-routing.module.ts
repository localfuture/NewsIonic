import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthPage } from './health.page';

const routes: Routes = [
  {
    path: '',
    component: HealthPage
  },
  {
    path: 'view-health',
    loadChildren: () => import('./view-health/view-health.module').then( m => m.ViewHealthPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthPageRoutingModule {}
