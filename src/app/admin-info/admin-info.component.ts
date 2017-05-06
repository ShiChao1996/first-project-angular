import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animate/fly-in';
import { fadeIn } from '../animate/fade-in';
@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css'],
  animations:[
    fadeIn
  ]
})
export class AdminInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
