import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animate/fly-in';
import { NewsService } from './news.service';

import { Router,ActivatedRoute,Params } from '@angular/router';
import { fadeIn } from '../animate/fade-in';

@Component({
  selector: 'app-news',
  templateUrl: 'news.component.html',
  styleUrls: ['news.component.css'],
  animations:[
    flyIn,
    fadeIn
  ],
  providers:[
    NewsService
  ]
})
export class NewsComponent implements OnInit {

  constructor(public service:NewsService,public route:ActivatedRoute,public router:Router) { }

  ngOnInit() {}


}
