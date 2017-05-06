import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import {switchMap} from "rxjs/operator/switchMap";
import { NewsService } from '../news.service';
import {id} from "@swimlane/ngx-charts/release/utils";
import { New } from '../new-model';
import { flyIn } from '../../animate/fly-in';
import { fadeIn } from '../../animate/fade-in';
@Component({
  selector: 'app-news-detail',
  templateUrl: 'news-detail.component.html',
  styleUrls: ['news-detail.component.css'],
  animations:[
    flyIn,
    fadeIn
  ]
})
export class NewsDetailComponent implements OnInit {

  id:number = 1;
  currentNew =[{id:0,title:'',content:''}] ;
  constructor(private route:ActivatedRoute,private router:Router,public newsService:NewsService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id']-1;
    this.getNew(this.id);
  }
  getNew(id:number){
    this.newsService.getNews()
      .subscribe(
        val=>{
          this.currentNew = val[id];
          console.log(this.currentNew);
        })
  }
  goBack(){
    this.router.navigate(['news/news-list'])
  }

}
