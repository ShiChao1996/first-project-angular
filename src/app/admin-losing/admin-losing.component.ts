import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animate/fly-in';
import { fadeIn } from '../animate/fade-in';
@Component({
  selector: 'app-admin-losing',
  templateUrl: './admin-losing.component.html',
  styleUrls: ['./admin-losing.component.css'],
  animations:[
    flyIn,
    fadeIn
  ]
})
export class AdminLosingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
