import { Component, OnInit } from '@angular/core';

import { GridTableComponent } from '../grid-table/grid-table.component';
import { flyIn } from '../animate/fly-in';
import { fadeIn } from '../animate/fade-in';
@Component({
  selector: 'app-card-info',
  templateUrl: 'card-info.component.html',
  styleUrls: ['card-info.component.css'],
  animations:[
    flyIn,
    fadeIn
  ]
})
export class CardInfoComponent implements OnInit {
  public data:any = {
    "columns": [{
      "title": "证件情况",
      "field": "username"
    }, {
      "title": "证件有效日期",
      "field": "email"
    }],
    "rows": [ {
      "username": "正常",
      "email": "2016/1/1 -- 2018/1/1"
    }]
  };

  public data2:any = {
    "columns": [{
      "title": "办公地点",
      "field": "col1"
    }, {
      "title": "工作时间",
      "field": "col2"
    },{
      "title": "联系电话",
      "field": "col2"
    }],
    "rows": [{
      "col1": "钟钟",
      "col2": "XXX@qq.com"
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
