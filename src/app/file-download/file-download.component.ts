import {Component, OnInit} from '@angular/core';
import {flyIn} from '../animate/fly-in';
import {fadeIn} from '../animate/fade-in';
@Component({
  selector: 'app-file-download',
  templateUrl: 'file-download.component.html',
  styleUrls: ['file-download.component.css'],
  animations: [
    flyIn,
    fadeIn
  ]
})
export class FileDownloadComponent implements OnInit {
  deadTime = new Date();
  files = [
    {
      name: "教学日历",
      url: "http://www.baidu.com",
      expire: this.deadTime
    },
    {
      name: "教学日历",
      url: "http://www.baidu.com",
      expire: this.deadTime
    },
    {
      name: "教学日历",
      url: "http://www.baidu.com",
      expire: this.deadTime
    },
    {
      name: "教学日历",
      url: "http://www.baidu.com",
      expire: this.deadTime
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
