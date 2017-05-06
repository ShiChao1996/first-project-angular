import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animate/fly-in';
import { fadeIn } from '../animate/fade-in';
@Component({
  selector: 'app-admin-log',
  templateUrl: './admin-log.component.html',
  styleUrls: ['./admin-log.component.css'],
  animations:[
    flyIn,
    fadeIn
  ]
})
export class AdminLogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
