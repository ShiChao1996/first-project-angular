import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule,JsonpModule ,Http} from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { NewsRoutingModule } from './news/news-routing.module';
import { AppComponent } from './app.component';
import {appRoutes} from './app-routing.module';

import { AnimationService } from './animate/animation';

import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { DemoDropdownComponent } from './ngBootsComp/dropDown';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { DemoAccordionConfigComponent } from './ngBootsComp/accordion';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { CollapseDemoComponent } from './ngBootsComp/collapse';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { AppRoutingModule } from './app-routing.module';
import { LoseInfoComponent } from './lose-info/lose-info.component';
import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { InfoSearchComponent } from './info-search/info-search.component';
import { FileDownloadComponent } from './file-download/file-download.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserService } from './user-info/user-service';
import { AppService } from './app.service';

import { ChartsModule } from 'ng2-charts';
import { LineChartDemoComponent } from './lose-info/chart';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LoginService } from './login.service';
import { AboutCardComponent } from './about-card/about-card.component';
import { DataAnalyseComponent } from './data-analyse/data-analyse.component';
import { ReportLoseComponent } from './report-lose/report-lose.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminOfficeComponent } from './admin-office/admin-office.component';
import { AdminLogComponent } from './admin-log/admin-log.component';
import { AdminLosingComponent } from './admin-losing/admin-losing.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminFileComponent } from './admin-file/admin-file.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { UserInfoChangeComponent } from './user-info/user-info-change/user-info-change.component';
import { HighlightDirective } from './directive';
import { SideMenuComponent } from './ngBootsComp/side-menu/side-menu.component';
import { ChangePswComponent } from './change-psw/change-psw.component';
import { GridTableComponent } from './grid-table/grid-table.component';
import { ModalModule } from 'ng2-bootstrap/modal';
import { AdminNewEditComponent } from './admin-news/admin-new-edit/admin-new-edit.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [
    HighlightDirective,
    AppComponent,
    DemoDropdownComponent,
    DemoAccordionConfigComponent,
    CollapseDemoComponent,
    SideBarComponent,
    CardInfoComponent,
    UserLoginComponent,
    LoseInfoComponent,
    NewsComponent,
    InfoSearchComponent,
    FileDownloadComponent,
    UserInfoComponent,
    LineChartDemoComponent,
    UserRegisterComponent,
    AboutCardComponent,
    DataAnalyseComponent,
    ReportLoseComponent,
    AdminNewsComponent,
    AdminOfficeComponent,
    AdminLogComponent,
    AdminLosingComponent,
    AdminInfoComponent,
    AdminFileComponent,
    NewsDetailComponent,
    NewsListComponent,
    UserInfoChangeComponent,
    SideMenuComponent,
    ChangePswComponent,
    GridTableComponent,
    AdminNewEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    AppRoutingModule,
    NewsRoutingModule,
    RouterModule.forRoot(appRoutes),
    DropdownModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    ChartsModule,
    ModalModule.forRoot(),
    CKEditorModule,

  ],
  providers: [
    AnimationService,
    UserService,
    LoginService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
