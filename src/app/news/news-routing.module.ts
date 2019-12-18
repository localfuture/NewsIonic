import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPage } from './news.page';

const routes: Routes = [
  {
    path: '',
    component: NewsPage
  },
  {
    path: 'national',
    loadChildren: () => import('./national/national.module').then( m => m.NationalPageModule)
  },
  {
    path: 'technology',
    loadChildren: () => import('./technology/technology.module').then( m => m.TechnologyPageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'entertainment',
    loadChildren: () => import('./entertainment/entertainment.module').then( m => m.EntertainmentPageModule)
  },
  {
    path: 'health',
    loadChildren: () => import('./health/health.module').then( m => m.HealthPageModule)
  },
  {
    path: 'science',
    loadChildren: () => import('./science/science.module').then( m => m.SciencePageModule)
  },
  {
    path: 'sports',
    loadChildren: () => import('./sports/sports.module').then( m => m.SportsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}
