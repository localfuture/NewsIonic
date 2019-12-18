import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SciencePage } from './science.page';

const routes: Routes = [
  {
    path: '',
    component: SciencePage
  },
  {
    path: 'view-science',
    loadChildren: () => import('./view-science/view-science.module').then( m => m.ViewSciencePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SciencePageRoutingModule {}
