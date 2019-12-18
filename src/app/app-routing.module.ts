import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  {
    path: 'news',
    children: [
      { path: '', loadChildren: './news/news.module#NewsPageModule'},
      {path: 'national', children:[
        { path: '', loadChildren: './news/national/national.module#NationalPageModule'},
        { path: ':viewId', loadChildren: './news/national/national-detail/national-detail.module#NationalDetailPageModule'}
      ]},
    {path: 'technology', children: [
      {path: '', loadChildren: './news/technology/technology.module#TechnologyPageModule'},
      {path: ':viewTech', loadChildren: './news/technology/view-tech/view-tech.module#ViewTechPageModule'}
    ]},
    {path: 'business', children: [
      {path: '', loadChildren: './news/business/business.module#BusinessPageModule'},
      {path: ':viewBusi', loadChildren: './news/business/view-business/view-business.module#ViewBusinessPageModule'}
    ]},
    {path: 'entertainment', children: [
      {path: '', loadChildren: './news/entertainment/entertainment.module#EntertainmentPageModule'},
      {path: ':viewEnter', loadChildren: './news/entertainment/view-entertainment/view-entertainment.module#ViewEntertainmentPageModule'}
    ]},
    {path: 'health', children: [
      {path: '', loadChildren: './news/health/health.module#HealthPageModule'},
      {path: ':viewHealth', loadChildren: './news/health/view-health/view-health.module#ViewHealthPageModule'}
    ]},
    {path: 'science', children: [
      {path: '', loadChildren: './news/science/science.module#SciencePageModule'},
      {path: ':viewScience', loadChildren: './news/science/view-science/view-science.module#ViewSciencePageModule'}
    ]},
    {path: 'sports', children: [
      {path: '', loadChildren: './news/sports/sports.module#SportsPageModule'},
      {path: ':viewSports', loadChildren: './news/sports/view-sports/view-sports.module#ViewSportsPageModule'}
    ]}
  ]
  }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
