import { NgModule }      from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
//import { CanDeactivateGuard } from './can-deactivate-guard.service';
//import { AuthGuard } from './auth-guard.service';

import { UserLoginComponent } from './user-login/user-login.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { NewsComponent } from './news/news.component';
import { LoseInfoComponent } from './lose-info/lose-info.component';
import { FileDownloadComponent } from './file-download/file-download.component';
import { InfoSearchComponent } from './info-search/info-search.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserInfoChangeComponent } from './user-info/user-info-change/user-info-change.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { DataAnalyseComponent } from './data-analyse/data-analyse.component';
import { ReportLoseComponent } from './report-lose/report-lose.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminFileComponent } from './admin-file/admin-file.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminLogComponent } from './admin-log/admin-log.component';
import { AdminLosingComponent } from './admin-losing/admin-losing.component';
import { AdminOfficeComponent } from './admin-office/admin-office.component';
import { ChangePswComponent } from './change-psw/change-psw.component';
import { AdminNewEditComponent } from './admin-news/admin-new-edit/admin-new-edit.component';

import { AuthGuard } from './auth-guard.service';
import { AdminGuard } from './admin-guard.service';
export const appRoutes:Routes = [
    {
        path:'user-login',
    component:UserLoginComponent,
  //  canLoad:[AuthGuard]
    },
    {
        path:'',
     redirectTo:'user-login',
    pathMatch:'full'
    },
    {
        path:'card-info',
        component:CardInfoComponent,
        canActivate:[AuthGuard]

    },
 /* {
    path:'news',
    component:NewsComponent,
    canActivateChild:[AuthGuard]
  },*/
  {
    path:'lose-info',
    component:LoseInfoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'file-download',
    component:FileDownloadComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'info-search',
    component:InfoSearchComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user-info',
    component:UserInfoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user-info-change',
    component:UserInfoChangeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user-register',
    component:UserRegisterComponent,
  },
  {
    path:'about-card',
    component:AboutCardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'data-analyse',
    component:DataAnalyseComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'report-lose',
    component:ReportLoseComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin-news',
    component:AdminNewsComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'admin-office',
    component:AdminOfficeComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'admin-info',
    component:AdminInfoComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'admin-file',
    component:AdminFileComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'admin-log',
    component:AdminLogComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'admin-losing',
    component:AdminLosingComponent,
    canActivate:[AdminGuard]
  },
  {
    path:'change-psw',
    component:ChangePswComponent,
  },
  {
    path:'admin-news/admin-new-edit',
    component:AdminNewEditComponent,
  },

  ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule],
    providers:[
      AuthGuard,
      AdminGuard
    ]
})

export class AppRoutingModule{}
