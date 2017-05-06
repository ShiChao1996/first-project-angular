import {Component, OnInit} from '@angular/core';
import {flyIn} from '../animate/fly-in';
import {fadeIn} from '../animate/fade-in';
import {DemoAccordionConfigComponent} from '../ngBootsComp/accordion';

@Component({
  selector: 'app-info-search',
  templateUrl: 'info-search.component.html',
  styleUrls: ['info-search.component.css'],
  animations: [
    flyIn,
    fadeIn
  ]
})
export class InfoSearchComponent implements OnInit {
  time = new Date();
  message = [
    {
      title: "aaa",
      content: "bbbbbbbdfdhjfdvndksja;kjcmdsjhsfkdjfdkf",
      time: this.time
    },
    {
      title: "sss",
      content: "bbbbbbbdfdhjfdvndksja;kjcmdsjhsfkdjfdkf",
      time: this.time
    },
    {
      title: "ddd",
      content: "bbbbbbbdfdhjfdvndksja;kjcmdsjhsfkdjfdkf",
      time: this.time
    },
    {
      title: "fff",
      content: "bbbbbbbdfdhjfdvndksja;kjcmdsjhsfkdjfdkf",
      time: this.time
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
