import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessPage } from './business.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessPage
  },
  {
    path: 'view-business',
    loadChildren: () => import('./view-business/view-business.module').then( m => m.ViewBusinessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessPageRoutingModule {}
