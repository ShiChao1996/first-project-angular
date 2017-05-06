import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { LoseInfoService } from './lose-info.service';
import { GridTableComponent } from '../grid-table/grid-table.component'
import { fadeIn } from '../animate/fade-in';
import {Observable} from "rxjs";
@Component({
  selector: 'app-lose-info',
  templateUrl: 'lose-info.component.html',
  styleUrls: ['lose-info.component.css'],
  animations:[
    fadeIn
  ],
  providers:[
    LoseInfoService
  ]
})
export class LoseInfoComponent implements OnInit ,AfterViewInit{
  count:number = 0;
  messages:Object[];
  public title = [
    {"title": "姓名"},
    {"title": "学号"},
    {"title": "遗失时间"}
  ];

  constructor(public service:LoseInfoService) { }

  ngOnInit() {
    this.getInfo();
  }

  ngAfterViewInit(){
    console.log(this.messages)
  }

  getInfo(){
    this.service.getLoseInfo()
      .subscribe(
        msg=>{this.messages = msg;
        console.log(msg)},
        err=>{console.log(err)}
      )
  }
}
