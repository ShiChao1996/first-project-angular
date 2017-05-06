import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animate/fly-in';
import { NewsService } from '../news.service';

import { Router,ActivatedRoute,Params } from '@angular/router';
import { fadeIn } from '../../animate/fade-in';
@Component({
  selector: 'app-news-list',
  templateUrl: 'news-list.component.html',
  styleUrls: ['news-list.component.css'],
  animations:[
    flyIn,
    fadeIn
  ],
  providers:[
    NewsService
  ]
})
export class NewsListComponent implements OnInit {

  constructor(public service:NewsService,public route:ActivatedRoute,public router:Router) { }

  ngOnInit() {
    this.getNews();
  }
  public showDetail:boolean;
  public allNews=[{id:0},{id:0},{id:0},{id:0}];
  public totalItems:number;
  public currentPage:number = 1;
  public smallnumPages:number = 0;

  public currentNews=[{id:0},{id:0},{id:0},{id:0}];
  public pageChanged(event:any):void {
    this.currentPage = event.page;
    this.currentNews = this.allNews.slice(4*this.currentPage-4,4*this.currentPage);
  }
  getNews(){
    this.service.getNews()
      .subscribe(
        val=>{
          this.allNews = val;
          this.totalItems = Math.ceil(this.allNews.length*2.5) ;
          this.currentNews = this.allNews.slice(4*(this.currentPage)-4,4*this.currentPage);
        },
        err=>{
          console.log(err)
        }
      )
  }
  gotoDetail(id:number){
    this.service.currentNewId = id;
    console.log(this.service.currentNewId);
    this.router.navigate(['/news',id]);
  }

}
