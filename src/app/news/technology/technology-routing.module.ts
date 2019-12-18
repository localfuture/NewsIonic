import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologyPage } from './technology.page';

const routes: Routes = [
  {
    path: '',
    component: TechnologyPage
  },
  {
    path: 'view-tech',
    loadChildren: () => import('./view-tech/view-tech.module').then( m => m.ViewTechPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologyPageRoutingModule {}
