import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';

import { NewsComponent } from './news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsListComponent } from './news-list/news-list.component';

const routes:Routes = [
  {
    path:'news',component:NewsComponent,canLoad:[AuthGuard],
    children:[
      {path:'',component:NewsListComponent,canLoad:[AuthGuard]},
      {path:'news-list',component:NewsListComponent,canLoad:[AuthGuard]},
      {path:':id',component:NewsDetailComponent,canLoad:[AuthGuard]}
    ],
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule],
  providers:[
    AuthGuard
  ]
})
export class NewsRoutingModule { }
